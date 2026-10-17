import type { Field, Level, Role } from './dosen'

export type ProgramsContent = {
  programs: {
    label: string
    hint: string
    linkLabel: string
    items: { key: Level; level: string; name: string; facts: string[]; href: string }[]
  }
  faculty: {
    label: string
    selectLabel: string
    listTitle: string
    sourceNote: string
    sourceLabel: string
    roles: Record<Role, string>
    fields: Record<Field, string>
  }
}

export const programsId: ProgramsContent = {
  programs: {
    label: 'Pendidikan',
    hint: 'Pilih program untuk melihat daftar dosennya di bawah.',
    linkLabel: 'Halaman program di FIB UI',
    items: [
      {
        key: 's1',
        level: 'S1',
        name: 'Program Studi Ilmu Filsafat',
        facts: [
          '144 SKS (114 wajib, 30 pilihan)',
          'Delapan semester',
          'MBKM di semester 7, tugas akhir di semester 8',
        ],
        href: 'https://fib.ui.ac.id/program-studi-ilmu-filsafat/',
      },
      {
        key: 's2',
        level: 'S2',
        name: 'Program Magister Ilmu Filsafat',
        facts: ['54 SKS', 'Jalur kuliah atau jalur riset'],
        href: 'https://fib.ui.ac.id/program-magister-ilmu-filsafat/',
      },
      {
        key: 's3',
        level: 'S3',
        name: 'Program Doktor Ilmu Filsafat',
        facts: ['88 SKS', 'Jalur kuliah atau jalur riset', 'Enam semester, berakhir di promosi'],
        href: 'https://fib.ui.ac.id/program-doktor-ilmu-filsafat/',
      },
    ],
  },
  faculty: {
    label: 'Dosen',
    selectLabel: 'Pilih jenjang',
    listTitle: 'Dosen',
    sourceNote: 'Daftar mengikuti situs FIB, terakhir diperiksa Oktober 2026.',
    sourceLabel: 'Lihat di situs FIB',
    roles: {
      ketuaDepartemen: 'Ketua Departemen',
      ketuaProdi: 'Ketua Program Studi',
      ketuaPasca: 'Ketua Program Studi Pascasarjana',
    },
    fields: { metafisika: 'Metafisika/Ontologi', estetika: 'Estetika', etika: 'Etika' },
  },
}

export const programsEn: ProgramsContent = {
  programs: {
    label: 'Programs',
    hint: 'Select a program to see its faculty below.',
    linkLabel: 'Program page at FIB UI',
    items: [
      {
        key: 's1',
        level: 'S1',
        name: 'Philosophy Studies Program',
        facts: [
          '144 credits (114 compulsory, 30 elective)',
          'Eight semesters',
          'Off-campus learning (MBKM) in semester 7, thesis in semester 8',
        ],
        href: 'https://fib.ui.ac.id/en/subject-prerequisites/',
      },
      {
        key: 's2',
        level: 'S2',
        name: 'Master of Philosophy',
        facts: ['54 credits', 'Coursework track or research track'],
        href: 'https://fib.ui.ac.id/en/master-of-philosophy-programs/',
      },
      {
        key: 's3',
        level: 'S3',
        name: 'Ph.D. in Philosophy',
        facts: [
          '88 credits',
          'Coursework track or research track',
          'Six semesters, ending in a doctoral defense',
        ],
        href: 'https://fib.ui.ac.id/en/doctor-of-philosophy-programs/',
      },
    ],
  },
  faculty: {
    label: 'Faculty',
    selectLabel: 'Select a level',
    listTitle: 'Faculty',
    sourceNote: 'The list follows the FIB website, last checked October 2026.',
    sourceLabel: 'See the FIB website',
    roles: {
      ketuaDepartemen: 'Head of Department',
      ketuaProdi: 'Head of the Undergraduate Program',
      ketuaPasca: 'Head of the Graduate Program',
    },
    fields: { metafisika: 'Metaphysics/Ontology', estetika: 'Aesthetics', etika: 'Ethics' },
  },
}
