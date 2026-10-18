import type { Content } from './types'

export const contentId: Content = {
  lang: 'id',
  skipLabel: 'Lewati ke konten',
  header: { wordmark: 'Filsafat UI', switchLabel: 'Bahasa' },
  hero: {
    title: 'Departemen Filsafat Universitas Indonesia',
    lead: 'Tempat belajar dan mengembangkan pemikiran filosofis, dari jenjang sarjana hingga doktoral, di Fakultas Ilmu Pengetahuan Budaya Universitas Indonesia.',
    programsLabel: 'Pendidikan',
    libraryLabel: 'Biblioteka Filsafat UI',
  },
  about: {
    label: 'Tentang',
    facts: [
      { term: 'Jenjang', value: 'S1, S2, S3' },
      { term: 'Fakultas', value: 'Ilmu Pengetahuan Budaya' },
      { term: 'Kampus', value: 'Universitas Indonesia, Kampus Depok' },
    ],
    paragraphs: [
      'Lingkungan akademik dengan karakter filosofis yang kuat, diperkuat pengajar dengan kepakaran lintas bidang filsafat.',
    ],
  },
  nav: [
    { id: 'tentang', label: 'Tentang' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'dosen', label: 'Tenaga Pengajar' },
    { id: 'kurikulum', label: 'Kurikulum' },
    { id: 'biblioteka', label: 'Biblioteka' },
    { id: 'komunitas', label: 'Komunitas dan alumni' },
    { id: 'kontak', label: 'Kontak' },
  ],
  footer: {
    name: 'Departemen Filsafat Universitas Indonesia',
    place: 'Fakultas Ilmu Pengetahuan Budaya, Kampus Depok',
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
