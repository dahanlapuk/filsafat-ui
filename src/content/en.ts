import type { Content } from './types'

export const contentEn: Content = {
  lang: 'en',
  skipLabel: 'Skip to content',
  header: { wordmark: 'Filsafat UI', switchLabel: 'Language' },
  hero: {
    title: 'Department of Philosophy, Universitas Indonesia',
    lead: 'A place to study and develop philosophical thought, from the undergraduate to the doctoral level, at the Faculty of Humanities, Universitas Indonesia.',
    programsLabel: 'Programs',
    libraryLabel: 'Biblioteka Filsafat UI',
  },
  about: {
    label: 'About',
    facts: [
      { term: 'Levels', value: 'S1, S2, S3' },
      { term: 'Faculty', value: 'Humanities (FIB UI)' },
      { term: 'Campus', value: 'Universitas Indonesia, Depok Campus' },
    ],
    paragraphs: [
      'An academic environment with a strong philosophical character, strengthened by teaching staff whose expertise spans the fields of philosophy.',
    ],
  },
  nav: [
    { id: 'tentang', label: 'About' },
    { id: 'pendidikan', label: 'Programs' },
    { id: 'dosen', label: 'Teaching Staff' },
    { id: 'kurikulum', label: 'Curriculum' },
    { id: 'biblioteka', label: 'Library' },
    { id: 'komunitas', label: 'Community and alumni' },
    { id: 'kontak', label: 'Contact' },
  ],
  footer: {
    name: 'Department of Philosophy, Universitas Indonesia',
    place: 'Faculty of Humanities, Depok Campus',
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
