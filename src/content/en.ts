import type { Content } from './types'

export const contentEn: Content = {
  lang: 'en',
  skipLabel: 'Skip to content',
  header: { wordmark: 'Filsafat UI', switchLabel: 'Language' },
  hero: {
    title: 'Department of Philosophy, Universitas Indonesia',
    lead: 'Undergraduate, master’s, and doctoral study in philosophy at the Faculty of Humanities, UI Depok campus.',
    programsLabel: 'Programs',
    libraryLabel: 'Biblioteka Filsafat UI',
  },
  about: {
    label: 'About',
    facts: [
      { term: 'Levels', value: 'S1, S2, S3' },
      { term: 'Faculty', value: 'Humanities (FIB UI)' },
      { term: 'Campus', value: 'UI Depok' },
    ],
    paragraphs: [
      'The Department of Philosophy is part of the Faculty of Humanities (Fakultas Ilmu Pengetahuan Budaya) at Universitas Indonesia, in Depok. It runs three programs: the Philosophy Studies Program (S1, undergraduate), the Master of Philosophy (S2), and the Ph.D. in Philosophy (S3).',
      'Details for each program are below.',
    ],
  },
  nav: [
    { id: 'tentang', label: 'About' },
    { id: 'pendidikan', label: 'Programs' },
    { id: 'dosen', label: 'Faculty' },
    { id: 'biblioteka', label: 'Library' },
    { id: 'komunitas', label: 'Community and alumni' },
    { id: 'kontak', label: 'Contact' },
  ],
  footer: {
    name: 'Department of Philosophy, Universitas Indonesia',
    place: 'Faculty of Humanities, UI Depok campus',
    menuLabel: 'On this page',
    linksLabel: 'Links',
    libraryLabel: 'Biblioteka Departemen Filsafat UI',
    infoLabel: 'Opening hours and location',
    facultyLabel: 'Faculty of Humanities, UI',
    tagline: 'Viva Philosophia!',
    copyright: '© 2026 Department of Philosophy, Universitas Indonesia',
    builtBy: 'Built by',
  },
}
