import { Link } from '@tanstack/react-router'
import type { Content } from '../content/types'
import { programsEn, programsId } from '../content/programs'
import { sectionsEn, sectionsId } from '../content/sections'
import { BIBLIOTEKA_URL, FIB_URL } from '../lib/site'
import { Programs } from './Programs'
import { Sections } from './Sections'

const wrap = 'mx-auto w-full max-w-6xl px-5 md:px-8'
const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current'
const label = 'text-xs font-semibold uppercase tracking-[0.14em]'

export function Landing({ content: c }: { content: Content }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        {c.skipLabel}
      </a>

      <header className="bg-sun text-ink">
        <div className={`${wrap} flex items-center justify-between py-5`}>
          <p className="text-sm font-semibold tracking-wide">{c.header.wordmark}</p>
          <nav aria-label={c.header.switchLabel} className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              lang="id"
              hrefLang="id"
              activeOptions={{ exact: true }}
              activeProps={{ className: 'font-semibold underline underline-offset-4' }}
              className={focus}
            >
              ID
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              to="/en"
              lang="en"
              hrefLang="en"
              activeOptions={{ exact: true }}
              activeProps={{ className: 'font-semibold underline underline-offset-4' }}
              className={focus}
            >
              EN
            </Link>
          </nav>
        </div>
      </header>

      <main id="konten" className="flex-1">
        <section className="bg-sun text-ink">
          <div className={`${wrap} pb-16 pt-10 md:pb-28 md:pt-20`}>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl">{c.hero.lead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#pendidikan"
                className={`text-base font-semibold underline underline-offset-4 ${focus}`}
              >
                {c.hero.programsLabel}
              </a>
              <a
                href={BIBLIOTEKA_URL}
                className={`bg-ink px-5 py-3 text-sm font-semibold text-cream ${focus}`}
              >
                {c.hero.libraryLabel}
              </a>
            </div>
          </div>
        </section>

        <section id="tentang" className="scroll-mt-4 py-16 md:py-24">
          <div
            className={`${wrap} grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-16`}
          >
            <div>
              <h2 className={`${label} text-muted`}>{c.about.label}</h2>
              <dl className="mt-6 border-t border-rule">
                {c.about.facts.map((f) => (
                  <div key={f.term} className="border-b border-rule py-3">
                    <dt className="text-sm text-muted">{f.term}</dt>
                    <dd className="mt-0.5 font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="space-y-6 font-serif text-xl leading-relaxed md:text-2xl">
              {c.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <Programs copy={c.lang === 'id' ? programsId : programsEn} />
        <Sections copy={c.lang === 'id' ? sectionsId : sectionsEn} />
      </main>

      <footer className="bg-ink text-cream">
        <div className={`${wrap} grid gap-10 py-14 md:grid-cols-3`}>
          <div>
            <a
              href={FIB_URL}
              className={`mb-5 inline-block bg-cream p-2 ${focus}`}
            >
              <img
                src="/fib-ui-logo.svg"
                alt={
                  c.lang === 'id'
                    ? 'Logo Fakultas Ilmu Pengetahuan Budaya Universitas Indonesia'
                    : 'Logo of the Faculty of Humanities, Universitas Indonesia'
                }
                width="50"
                height="56"
                className="block h-14 w-[50px]"
              />
            </a>
            <p className="font-serif text-xl font-semibold">{c.footer.name}</p>
            <p className="mt-2 text-sm text-cream/80">{c.footer.place}</p>
          </div>
          <nav aria-label={c.footer.menuLabel}>
            <p className={`${label} text-cream/80`}>{c.footer.menuLabel}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {c.nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className={`underline underline-offset-4 ${focus}`}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm">
            <a
              href={BIBLIOTEKA_URL}
              className={`font-semibold underline underline-offset-4 ${focus}`}
            >
              {c.footer.libraryLabel}
            </a>
          </div>
        </div>
        <div className="border-t border-cream/20">
          <div
            className={`${wrap} flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-cream/80`}
          >
            <p>{c.footer.copyright}</p>
            <p>
              {c.footer.builtBy}{' '}
              <a href="https://crkstudio.com" className={`underline underline-offset-4 ${focus}`}>
                crkstudio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
