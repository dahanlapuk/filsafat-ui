export type CourseKind = 'mkp'
export type SemesterNote = 'thesis'

export type Course = { name?: string; kind?: CourseKind; sks: number }
export type Semester = { no: number; courses: Course[]; note?: SemesterNote }

export const semesters: Semester[] = [
  {
    no: 1,
    courses: [
      { name: 'MPK Bahasa Inggris', sks: 2 },
      { name: 'MPK Agama', sks: 2 },
      { name: 'Pengantar Ilmu Filsafat', sks: 3 },
      { name: 'Logika', sks: 3 },
      { name: 'Sejarah Filsafat Yunani Kuno', sks: 3 },
      { name: 'Epistemologi', sks: 3 },
      { name: 'Etika', sks: 3 },
    ],
  },
  {
    no: 2,
    courses: [
      { name: 'MPK Terintegrasi', sks: 6 },
      { name: 'Sejarah Filsafat Abad Pertengahan', sks: 3 },
      { name: 'Metafisika', sks: 3 },
      { name: 'Estetika', sks: 3 },
      { name: 'Tinjauan Kepustakaan Filsafat', sks: 3 },
    ],
  },
  {
    no: 3,
    courses: [
      { name: 'Humaniora Digital', sks: 3 },
      { name: 'Pengantar Filsafat Ilmu Pengetahuan', sks: 3 },
      { name: 'Sejarah Filsafat Modern', sks: 3 },
      { name: 'Fenomenologi', sks: 3 },
      { name: 'Hermeneutika', sks: 3 },
      { name: 'Pragmatisme', sks: 3 },
      { name: 'Filsafat Manusia', sks: 3 },
    ],
  },
  {
    no: 4,
    courses: [
      { name: 'Manusia dan Masyarakat Indonesia', sks: 3 },
      { name: 'Sejarah Filsafat Abad 20', sks: 3 },
      { name: 'Filsafat Ketuhanan', sks: 3 },
      { name: 'Eksistensialisme', sks: 3 },
      { name: 'Filsafat Budaya', sks: 3 },
      { name: 'Filsafat Analitik', sks: 3 },
      { name: 'Etika Terapan', sks: 3 },
    ],
  },
  {
    no: 5,
    courses: [
      { name: 'Sejarah Filsafat Kontemporer', sks: 3 },
      { name: 'Metode Penelitian Filsafat', sks: 3 },
      { name: 'Filsafat Akal Budi', sks: 3 },
      { name: 'Feminisme', sks: 3 },
      { name: 'Filsafat Timur', sks: 3 },
      { kind: 'mkp', sks: 5 },
    ],
  },
  {
    no: 6,
    courses: [
      { name: 'Penulisan Ilmiah', sks: 3 },
      { name: 'Seminar Filsafat', sks: 3 },
      { name: 'Filsafat dan HAM', sks: 3 },
      { name: 'Filsafat Lingkungan', sks: 3 },
      { name: 'Filsafat dan Ideologi', sks: 3 },
      { kind: 'mkp', sks: 5 },
    ],
  },
  { no: 7, courses: [{ kind: 'mkp', sks: 20 }] },
  { no: 8, note: 'thesis', courses: [{ name: 'Tugas Akhir', sks: 5 }] },
]

export type KurikulumContent = {
  label: string
  detailTitle: string
  lead: string[]
  compositionTitle: string
  composition: { term: string; sks: number }[]
  totalLabel: string
  unit: string
  semesterLabel: string
  semesterTitle: string
  kinds: Record<CourseKind, string>
  notes: Record<SemesterNote, string>
  mediaTitle: string
  media: {
    intro: { text: string; bold?: boolean }[]
    onlineIntro: string
    platformLabel: string
    modes: { name: string; text: string; platforms: { name: string; href?: string }[] }[]
  }
  footnotes: { mark: string; text: string }[]
  sourceNote: string
  courseNote?: string
}

export const kurikulumId: KurikulumContent = {
  label: 'Kurikulum',
  detailTitle: 'Program Sarjana (S1)',
  lead: [
    'Kurikulum ini mulai berlaku pada tahun ajaran 2026. Bebannya 144 SKS, bisa selesai tepat waktu dalam delapan semester atau paling cepat dalam tujuh semester.**',
    'Mahasiswa mulai dari membaca filsafat secara historis dan konseptual, lalu memakainya untuk menganalisis persoalan sosial-budaya, dari tingkat lokal sampai global.',
  ],
  compositionTitle: 'Komposisi SKS',
  composition: [
    { term: 'Wajib universitas', sks: 10 },
    { term: 'Wajib fakultas', sks: 9 },
    { term: 'Wajib program studi', sks: 90 },
    { term: 'MKP atau MBKM*', sks: 30 },
    { term: 'Tugas akhir', sks: 5 },
  ],
  totalLabel: 'Minimal untuk lulus',
  unit: 'SKS',
  semesterLabel: 'Semester',
  semesterTitle: 'Detail kurikulum per semester***',
  kinds: { mkp: 'MKP atau MBKM' },
  notes: { thesis: 'Bisa diambil setelah mencapai 120 SKS.' },
  mediaTitle: 'Mekanisme perkuliahan',
  media: {
    intro: [
      { text: 'Perkuliahan dilaksanakan secara ' },
      { text: 'luring', bold: true },
      { text: ' (tatap muka) maupun ' },
      { text: 'daring', bold: true },
      { text: ', sesuai kesepakatan kelas.' },
    ],
    onlineIntro: 'Perkuliahan daring dilaksanakan melalui dua mekanisme berikut.',
    platformLabel: 'Platform',
    modes: [
      {
        name: 'Sinkronus',
        text: 'Pertemuan daring antara pengajar dan mahasiswa pada waktu yang sama.',
        platforms: [{ name: 'Zoom' }, { name: 'Google Meet' }, { name: 'Microsoft Teams' }],
      },
      {
        name: 'Asinkronus',
        text: 'Pembelajaran mandiri melalui materi yang disediakan pengajar, tanpa pertemuan pada waktu yang sama.',
        platforms: [
          { name: 'Google Classroom' },
          { name: 'Google Drive' },
          { name: 'EMAS 3', href: 'https://emas3.ui.ac.id' },
        ],
      },
    ],
  },
  footnotes: [
    {
      mark: '*',
      text: 'MKP adalah mata kuliah pilihan yang tidak wajib diambil. Sebagai gantinya, mahasiswa bisa mengikuti MBKM (Merdeka Belajar Kampus Merdeka): magang, riset, MOOC, dan sejenisnya.',
    },
    { mark: '**', text: 'Batas masa studi tujuh tahun, termasuk cuti.' },
    { mark: '***', text: 'Rincian per semester menggunakan asumsi lulus dalam delapan semester.' },
  ],
  sourceNote: 'Sumber: departemen, Oktober 2026.',
}

export const kurikulumEn: KurikulumContent = {
  label: 'Curriculum',
  detailTitle: 'Undergraduate Program (S1)',
  lead: [
    'This curriculum takes effect in the 2026 academic year. It carries 144 credits and can be finished on time in eight semesters, or at the earliest in seven.**',
    'Students start by reading philosophy historically and conceptually, then use it to analyse social and cultural issues, from the local to the global.',
  ],
  compositionTitle: 'Credit composition',
  composition: [
    { term: 'University-wide required', sks: 10 },
    { term: 'Faculty required', sks: 9 },
    { term: 'Study program required', sks: 90 },
    { term: 'Electives or MBKM*', sks: 30 },
    { term: 'Final project', sks: 5 },
  ],
  totalLabel: 'Minimum to graduate',
  unit: 'credits',
  semesterLabel: 'Semester',
  semesterTitle: 'Curriculum detail by semester***',
  kinds: { mkp: 'Electives or MBKM' },
  notes: { thesis: 'Available after reaching 120 credits.' },
  mediaTitle: 'Course delivery',
  media: {
    intro: [
      { text: 'Classes are held ' },
      { text: 'in person', bold: true },
      { text: ' or ' },
      { text: 'online', bold: true },
      { text: ', depending on what the class agrees on.' },
    ],
    onlineIntro: 'Online classes work in two ways:',
    platformLabel: 'Platforms',
    modes: [
      {
        name: 'Synchronous',
        text: 'Meeting online at the same time.',
        platforms: [{ name: 'Zoom' }, { name: 'Google Meet' }, { name: 'Microsoft Teams' }],
      },
      {
        name: 'Asynchronous',
        text: 'Studying on your own from materials the instructor provides, with no meeting time.',
        platforms: [
          { name: 'Google Classroom' },
          { name: 'Google Drive' },
          { name: 'EMAS 3', href: 'https://emas3.ui.ac.id' },
        ],
      },
    ],
  },
  footnotes: [
    {
      mark: '*',
      text: 'MKP are elective courses and are not compulsory. Instead, students can join MBKM (Merdeka Belajar Kampus Merdeka): internships, research, MOOCs, and similar.',
    },
    { mark: '**', text: 'Maximum study period is seven years, leave included.' },
    { mark: '***', text: 'The semester breakdown assumes graduation in eight semesters.' },
  ],
  sourceNote: 'Source: the department, October 2026.',
  courseNote: 'Course names are kept in Indonesian.',
}
