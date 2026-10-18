import type { Content } from './types'

export const contentId: Content = {
  lang: 'id',
  skipLabel: 'Lewati ke konten',
  header: { wordmark: 'Filsafat UI', switchLabel: 'Bahasa' },
  hero: {
    title: 'Departemen Filsafat Universitas Indonesia',
    lead: 'Sarjana, magister, dan doktor ilmu filsafat di Fakultas Ilmu Pengetahuan Budaya, Kampus UI Depok.',
    programsLabel: 'Pendidikan',
    libraryLabel: 'Biblioteka Filsafat UI',
  },
  about: {
    label: 'Tentang',
    facts: [
      { term: 'Jenjang', value: 'S1, S2, S3' },
      { term: 'Fakultas', value: 'Ilmu Pengetahuan Budaya' },
      { term: 'Kampus', value: 'UI Depok' },
    ],
    paragraphs: [
      'Departemen Filsafat berada di Fakultas Ilmu Pengetahuan Budaya Universitas Indonesia, Depok. Di bawahnya ada tiga program: Program Studi Ilmu Filsafat (S1), Program Magister Ilmu Filsafat (S2), dan Program Doktor Ilmu Filsafat (S3).',
      'Rincian tiap program ada di bawah.',
    ],
  },
  nav: [
    { id: 'tentang', label: 'Tentang' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'dosen', label: 'Dosen' },
    { id: 'kurikulum', label: 'Kurikulum' },
    { id: 'biblioteka', label: 'Biblioteka' },
    { id: 'komunitas', label: 'Komunitas dan alumni' },
    { id: 'kontak', label: 'Kontak' },
  ],
  footer: {
    name: 'Departemen Filsafat Universitas Indonesia',
    place: 'Fakultas Ilmu Pengetahuan Budaya, Kampus UI Depok',
    menuLabel: 'Isi halaman',
    linksLabel: 'Tautan',
    libraryLabel: 'Biblioteka Departemen Filsafat UI',
    infoLabel: 'Jam buka dan lokasi',
    facultyLabel: 'Fakultas Ilmu Pengetahuan Budaya UI',
    tagline: 'Viva Philosophia!',
    copyright: '© 2026 Departemen Filsafat Universitas Indonesia',
    builtBy: 'Dibuat oleh',
  },
}
