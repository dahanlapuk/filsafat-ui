import { semesters, type KurikulumContent } from '../content/kurikulum'

const wrap = 'mx-auto w-full max-w-6xl px-5 md:px-8'
const label = 'text-xs font-semibold uppercase tracking-[0.14em]'

function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*+)/).map((part, i) =>
        part.startsWith('*') ? (
          <sup key={i} className="ml-px text-[0.6em] font-bold text-ink">
            {part}
          </sup>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function Curriculum({ copy }: { copy: KurikulumContent }) {
  const total = copy.composition.reduce((n, r) => n + r.sks, 0)
  return (
    <section id="kurikulum" className="scroll-mt-4 bg-pale-soft py-16 md:py-24">
      <div className={wrap}>
        <h2 className={`${label} text-muted`}>{copy.label}</h2>
        <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">
          {copy.detailTitle}
        </h3>
        <div className="mt-4 max-w-3xl space-y-3 leading-relaxed text-muted">
          {copy.lead.map((p) => (
            <p key={p}>
              <Marked text={p} />
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <div>
            <h4 className="font-serif text-2xl font-semibold">{copy.compositionTitle}</h4>
            <dl className="mt-5 border-t border-rule">
              {copy.composition.map((r) => (
                <div key={r.term} className="flex justify-between gap-4 border-b border-rule py-3">
                  <dt>
                    <Marked text={r.term} />
                  </dt>
                  <dd className="shrink-0 font-medium">
                    {r.sks} {copy.unit}
                  </dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-b border-ink py-3 font-semibold">
                <dt>{copy.totalLabel}</dt>
                <dd className="shrink-0">
                  {total} {copy.unit}
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h4 className="font-serif text-2xl font-semibold">{copy.mediaTitle}</h4>
            <p className="mt-5 max-w-xl leading-relaxed">
              {copy.media.intro.map((part, i) =>
                part.bold ? (
                  <strong key={i} className="font-semibold">
                    {part.text}
                  </strong>
                ) : (
                  part.text
                ),
              )}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed">{copy.media.onlineIntro}</p>
            <ul className="mt-3 max-w-xl list-disc space-y-4 pl-10 marker:text-ink">
              {copy.media.modes.map((m) => (
                <li key={m.name}>
                  <p>
                    <span className="font-semibold">{m.name}</span>
                    {': '}
                    {m.text}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {copy.media.platformLabel}:{' '}
                    {m.platforms.map((pl, i) => (
                      <span key={pl.name}>
                        {i > 0 && ', '}
                        {pl.href ? (
                          <a
                            href={pl.href}
                            className="font-semibold text-ink underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                          >
                            {pl.name}
                          </a>
                        ) : (
                          pl.name
                        )}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h4 className="mt-14 font-serif text-2xl font-semibold">
          <Marked text={copy.semesterTitle} />
        </h4>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {semesters.map((s) => {
            const sum = s.courses.reduce((n, c) => n + c.sks, 0)
            return (
              <article key={s.no} className="flex flex-col border border-rule bg-cream p-5">
                <h4 className="flex items-baseline justify-between gap-3 font-serif text-xl font-semibold">
                  <span>
                    {copy.semesterLabel} {s.no}
                  </span>
                  <span className="text-sm font-normal text-muted">
                    {sum} {copy.unit}
                  </span>
                </h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.courses.map((c, i) => (
                    <li key={`${s.no}-${i}`} className="flex justify-between gap-3">
                      <span>{c.kind ? copy.kinds[c.kind] : c.name}</span>
                      <span className="shrink-0 text-muted">{c.sks}</span>
                    </li>
                  ))}
                </ul>
                {s.note && <p className="mt-auto pt-4 text-xs text-muted">{copy.notes[s.note]}</p>}
              </article>
            )
          })}
        </div>

        <div className="mt-8 space-y-1 text-sm text-muted">
          {copy.footnotes.map((f) => (
            <p key={f.mark}>
              <Marked text={f.mark} /> {f.text}
            </p>
          ))}
          <p className="pt-3">{copy.sourceNote}</p>
          {copy.courseNote && <p>{copy.courseNote}</p>}
        </div>
      </div>
    </section>
  )
}
