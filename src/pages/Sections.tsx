import type { SectionsContent } from '../content/sections'
import { LIBRARY_INFO_URL, MAPS_URL, WHATSAPP_GROUP_URL } from '../lib/links'
import { BIBLIOTEKA_URL } from '../lib/site'
import { ExternalIcon } from './icons'

const wrap = 'mx-auto w-full max-w-6xl px-5 md:px-8'
const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current'
const label = 'text-xs font-semibold uppercase tracking-[0.14em]'
const textLink = `font-semibold underline underline-offset-4 ${focus}`
const row = 'grid gap-4 border-b border-rule py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-16'

export function Sections({ copy }: { copy: SectionsContent }) {
  const { library, community, contact } = copy
  return (
    <>
      <section id="biblioteka" className="scroll-mt-4 bg-pale py-16 md:py-24">
        <div
          className={`${wrap} grid gap-10 md:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] md:gap-16`}
        >
          <div>
            <h2 className={`${label} text-muted`}>{library.label}</h2>
            <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              {library.title}
            </h3>
            <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed md:text-2xl">
              {library.text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={BIBLIOTEKA_URL}
                className={`inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-cream ${focus}`}
              >
                {library.catalogLabel}
                <ExternalIcon />
              </a>
              <a href={LIBRARY_INFO_URL} className={textLink}>
                {library.infoLabel}
              </a>
            </div>
          </div>
          <dl className="h-fit border-t border-rule md:mt-8">
            {library.facts.map((f) => (
              <div key={f.term} className="border-b border-rule py-3">
                <dt className="text-sm text-muted">{f.term}</dt>
                {f.lines.map((l) => (
                  <dd key={l} className="mt-0.5 font-medium">
                    {l}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="komunitas" className="scroll-mt-4 py-16 md:py-24">
        <div className={wrap}>
          <h2 className={`${label} text-muted`}>{community.label}</h2>
          <div className="mt-8 border-t border-rule">
            {community.items.map((item) => (
              <div key={item.name} className={row}>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{item.name}</h3>
                  {item.full && <p className="mt-1 text-sm text-muted">{item.full}</p>}
                </div>
                <div>
                  <div className="max-w-2xl space-y-3 text-lg leading-relaxed">
                    {item.paragraphs.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  {item.note && <p className="mt-3 font-medium">{item.note}</p>}
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {item.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className={textLink}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {WHATSAPP_GROUP_URL ? (
              <div className={row}>
                <h3 className="font-serif text-2xl font-semibold">{community.join.title}</h3>
                <div>
                  <p className="max-w-2xl text-lg leading-relaxed">{community.join.text}</p>
                  <a
                    href={WHATSAPP_GROUP_URL}
                    className={`mt-5 inline-block bg-sun px-5 py-3 text-sm font-semibold text-ink ${focus}`}
                  >
                    {community.join.label}
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section id="kontak" className="scroll-mt-4 bg-pale-soft py-16 md:py-24">
        <div className={wrap}>
          <h2 className={`${label} text-muted`}>{contact.label}</h2>
          <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-serif text-2xl font-semibold">{contact.visit.title}</h3>
              <p className="mt-4 font-medium">{contact.visit.place}</p>
              <address className="mt-2 not-italic leading-relaxed">
                {contact.visit.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a href={MAPS_URL} className={`mt-5 inline-flex items-center gap-1.5 text-sm ${textLink}`}>
                {contact.visit.mapLabel}
                <ExternalIcon />
              </a>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold">{contact.faculty.title}</h3>
              <p className="mt-1 text-sm text-muted">{contact.faculty.note}</p>
              <p className="mt-4 font-medium">{contact.faculty.office}</p>
              <address className="mt-2 not-italic leading-relaxed">
                {contact.faculty.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <dl className="mt-4 border-t border-rule">
                {contact.faculty.items.map((i) => (
                  <div
                    key={i.term}
                    className="grid grid-cols-[6rem_1fr] border-b border-rule py-2 text-sm"
                  >
                    <dt className="text-muted">{i.term}</dt>
                    <dd>
                      <a href={i.href} className={textLink}>
                        {i.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-muted">{contact.faculty.checked}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
