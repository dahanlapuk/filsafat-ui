import { useState } from 'react'
import { dosen, type Level } from '../content/dosen'
import type { ProgramsContent } from '../content/programs'

const wrap = 'mx-auto w-full max-w-6xl px-5 md:px-8'
const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current'
const label = 'text-xs font-semibold uppercase tracking-[0.14em]'
const levels: Level[] = ['s1', 's2', 's3']

export function Programs({ copy }: { copy: ProgramsContent }) {
  const { programs, faculty } = copy
  const [active, setActive] = useState<Level>('s1')
  const activeProgram = programs.items.find((p) => p.key === active)

  return (
    <>
      <section id="pendidikan" className="scroll-mt-4 bg-pale-soft py-16 md:py-24">
        <div className={wrap}>
          <h2 className={`${label} text-muted`}>{programs.label}</h2>
          <p className="mt-4 max-w-2xl font-serif text-xl text-muted md:text-2xl">
            {programs.hint}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {programs.items.map((p) => {
              const on = p.key === active
              return (
                <article
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className={`flex cursor-pointer flex-col border p-6 ${
                    on ? 'border-ink bg-ink text-cream' : 'border-rule bg-cream'
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={on}
                    aria-controls={`dosen-${p.key}`}
                    onClick={() => setActive(p.key)}
                    className={`cursor-pointer text-left ${focus}`}
                  >
                    <span className={`${label} ${on ? 'text-sun' : 'text-muted'}`}>
                      {p.level}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug">
                      {p.name}
                    </h3>
                  </button>
                  <ul className="mt-5 space-y-1.5 text-sm">
                    {p.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    href={p.href}
                    className={`mt-auto pt-6 text-sm font-semibold underline underline-offset-4 ${focus}`}
                  >
                    {programs.linkLabel}
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="dosen" className="scroll-mt-4 py-16 md:py-24">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={`${label} text-muted`}>{faculty.label}</h2>
            <div role="group" aria-label={faculty.selectLabel} className="flex gap-2">
              {levels.map((k) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={k === active}
                  aria-controls={`dosen-${k}`}
                  onClick={() => setActive(k)}
                  className={`cursor-pointer border px-4 py-1.5 text-sm font-semibold ${focus} ${
                    k === active ? 'border-ink bg-ink text-cream' : 'border-rule bg-cream'
                  }`}
                >
                  {k.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {levels.map((k) => {
            const list = dosen.filter((d) => d.levels.includes(k))
            return (
              <div key={k} id={`dosen-${k}`} hidden={k !== active} className="mt-8">
                <h3 className="font-serif text-2xl font-semibold">
                  {faculty.listTitle} · {k.toUpperCase()}{' '}
                  <span className="font-normal text-muted">({list.length})</span>
                </h3>
                <ul className="mt-6 grid gap-x-12 border-t border-rule md:grid-cols-2">
                  {list.map((d) => {
                    const role = d.roles?.[k]
                    const field = k !== 's1' && d.field ? faculty.fields[d.field] : null
                    return (
                      <li key={d.name} className="border-b border-rule py-4">
                        <p className="font-serif text-xl">{d.name}</p>
                        {role && (
                          <p className="mt-2 inline-block bg-sun px-2 py-0.5 text-xs font-semibold">
                            {faculty.roles[role]}
                          </p>
                        )}
                        {field && <p className="mt-1 text-sm text-muted">{field}</p>}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}

          <p className="mt-8 text-sm text-muted">
            {faculty.sourceNote}{' '}
            {activeProgram && (
              <a
                href={activeProgram.href}
                className={`font-semibold text-ink underline underline-offset-4 ${focus}`}
              >
                {faculty.sourceLabel}
              </a>
            )}
          </p>
        </div>
      </section>
    </>
  )
}
