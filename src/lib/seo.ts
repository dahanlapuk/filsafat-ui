import { BIBLIOTEKA_URL, FIB_URL, SITE_NAME, SITE_URL } from './site'

type Lang = 'id' | 'en'

const copy = {
  id: {
    path: '/',
    title: 'Departemen Filsafat Universitas Indonesia | S1, S2, S3',
    description:
      'Departemen Filsafat Universitas Indonesia, Depok: program sarjana, magister, dan doktor ilmu filsafat, daftar dosen, perpustakaan departemen, dan kontak.',
    locale: 'id_ID',
  },
  en: {
    path: '/en',
    title: 'Department of Philosophy, Universitas Indonesia',
    description:
      'Department of Philosophy, Faculty of Humanities, Universitas Indonesia (Depok): undergraduate, master’s and Ph.D. programs, faculty, library, and contact.',
    locale: 'en_US',
  },
} as const

const url = (path: string) => `${SITE_URL}${path}`

function jsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: [
          'Departemen Filsafat UI',
          'Department of Philosophy, Universitas Indonesia',
        ],
        url: `${SITE_URL}/`,
        parentOrganization: {
          '@type': 'CollegeOrUniversity',
          name: 'Fakultas Ilmu Pengetahuan Budaya, Universitas Indonesia',
          url: FIB_URL,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jalan Prof. Dr. Nugroho Notosusanto, Kampus UI',
          addressLocality: 'Depok',
          addressRegion: 'Jawa Barat',
          postalCode: '16424',
          addressCountry: 'ID',
        },
        subOrganization: {
          '@type': 'Library',
          name: 'Biblioteka Departemen Filsafat UI',
          url: BIBLIOTEKA_URL,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: lang,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }
}

export function pageHead(lang: Lang) {
  const c = copy[lang]
  const other = lang === 'id' ? copy.en : copy.id
  return {
    meta: [
      { title: c.title },
      { name: 'description', content: c.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: c.title },
      { property: 'og:description', content: c.description },
      { property: 'og:url', content: url(c.path) },
      { property: 'og:locale', content: c.locale },
      { property: 'og:locale:alternate', content: other.locale },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: c.title },
      { name: 'twitter:description', content: c.description },
    ],
    links: [
      { rel: 'canonical', href: url(c.path) },
      { rel: 'alternate', hrefLang: 'id', href: url(copy.id.path) },
      { rel: 'alternate', hrefLang: 'en', href: url(copy.en.path) },
      { rel: 'alternate', hrefLang: 'x-default', href: url(copy.id.path) },
    ],
    scripts: [
      { type: 'application/ld+json', children: JSON.stringify(jsonLd(lang)) },
    ],
  }
}
