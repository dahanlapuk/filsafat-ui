import type { Level, Role, Topic } from './dosen'

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
    regularTitle: string
    adjunctTitle: string
    sourceNote: string
    roles: Record<Role, string>
    topics: Record<Topic, string>
  }
}

export const programsId: ProgramsContent = {
  programs: {
    label: 'Pendidikan',
    hint: 'Pilih jenjang, lalu lihat daftar pengajarnya di bawah.',
    linkLabel: 'Lihat di laman fakultas',
    items: [
      {
        key: 's1',
        level: 'S1',
        name: 'Program Studi Ilmu Filsafat',
        facts: ['144 SKS', 'Reguler dan Non-Reguler'],
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
        facts: ['88 SKS', 'Jalur kuliah atau jalur riset'],
        href: 'https://fib.ui.ac.id/program-doktor-ilmu-filsafat/',
      },
    ],
  },
  faculty: {
    label: 'Tenaga Pengajar',
    selectLabel: 'Pilih jenjang',
    listTitle: 'Tenaga Pengajar',
    regularTitle: 'Dosen tetap',
    adjunctTitle: 'Dosen tidak tetap',
    sourceNote: 'Sumber: konfirmasi departemen, Oktober 2026.',
    roles: {
      ketuaDepartemen: 'Ketua Departemen',
      ketuaProdi: 'Ketua Program Studi',
      ketuaPasca: 'Ketua Program Studi Pascasarjana',
      manajerKemahasiswaan: 'Manajer Kemahasiswaan dan Hubungan Alumni FIB UI',
      koordinatorMbkm: 'Koordinator MBKM Program Studi Filsafat',
    },
    topics: {
      sastra: 'Sastra',
      bahasa: 'Bahasa',
      budaya: 'Budaya',
      feminismeIslam: 'Feminisme Islam',
      pemikiranTimurTengah: 'Pemikiran Timur Tengah',
      islamologi: 'Islamologi',
      sejarahFilsafat: 'Sejarah Filsafat',
      philosophyOfMind: 'Philosophy of Mind',
      metafisika: 'Metafisika',
      estetika: 'Estetika',
      filsafatIslam: 'Filsafat Islam',
      filsafatIslamKontemporer: 'Filsafat Islam Kontemporer',
      filsafatAgama: 'Filsafat Agama',
      fenomenologi: 'Fenomenologi',
      filsafatPolitik: 'Filsafat Politik',
      filsafatTimur: 'Filsafat Timur',
      ekofeminisme: 'Ekofeminisme',
      filsafatLingkungan: 'Filsafat Lingkungan',
      eksistensialisme: 'Eksistensialisme',
      filsafatAnalitik: 'Filsafat Analitik',
      realismeKritis: 'Realisme Kritis',
      virtueEthics: 'Virtue Ethics',
      terorisme: 'Terorisme',
      seniKontemporer: 'Seni Kontemporer',
      estetikaKontemporer: 'Estetika Kontemporer: Abjeksi dan Problem Keseharian',
      feminisme: 'Feminisme',
      filsafatTanda: 'Filsafat dan Tanda',
      poshumanisme: 'Poshumanisme',
      filsafatSosial: 'Filsafat Sosial',
      logika: 'Logika',
      epistemologi: 'Epistemologi',
      filsafatIlmu: 'Filsafat Ilmu',
      filsafatEkonomi: 'Filsafat Ekonomi',
      metafilsafat: 'Metafilsafat',
      filsafatFeminis: 'Filsafat Feminis',
      interseksionalitas: 'Teori Interseksionalitas',
      etika: 'Etika',
      filsafatHukum: 'Filsafat Hukum',
      filsafatHam: 'Filsafat dan HAM',
      estetikaSehariHari: 'Estetika Sehari-hari',
      seniOlfactory: 'Seni Olfactory',
      seniModernKontemporer: 'Seni Modern dan Kontemporer',
      epistemicInjustice: 'Epistemic Injustice',
      memoriKolektif: 'Memori Kolektif',
      digitalRacism: 'Digital Racism',
      budayaJepang: 'Budaya Jepang',
      filsafatBahasa: 'Filsafat Bahasa',
      demokrasiRadikal: 'Demokrasi Radikal',
      populisme: 'Populisme',
    },
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
    regularTitle: 'Permanent faculty',
    adjunctTitle: 'Adjunct faculty',
    sourceNote: 'The faculty list was confirmed by the department, October 2026.',
    roles: {
      ketuaDepartemen: 'Head of Department',
      ketuaProdi: 'Head of the Undergraduate Program',
      ketuaPasca: 'Head of the Graduate Program',
      manajerKemahasiswaan: 'Manager of Student Affairs and Alumni Relations, FIB UI',
      koordinatorMbkm: 'Coordinator of Off-Campus Learning (MBKM)',
    },
    topics: {
      sastra: 'Literature',
      bahasa: 'Language',
      budaya: 'Culture',
      feminismeIslam: 'Islamic Feminism',
      pemikiranTimurTengah: 'Middle Eastern Thought',
      islamologi: 'Islamology',
      sejarahFilsafat: 'History of Philosophy',
      philosophyOfMind: 'Philosophy of Mind',
      metafisika: 'Metaphysics',
      estetika: 'Aesthetics',
      filsafatIslam: 'Islamic Philosophy',
      filsafatIslamKontemporer: 'Contemporary Islamic Philosophy',
      filsafatAgama: 'Philosophy of Religion',
      fenomenologi: 'Phenomenology',
      filsafatPolitik: 'Political Philosophy',
      filsafatTimur: 'Eastern Philosophy',
      ekofeminisme: 'Ecofeminism',
      filsafatLingkungan: 'Environmental Philosophy',
      eksistensialisme: 'Existentialism',
      filsafatAnalitik: 'Analytic Philosophy',
      realismeKritis: 'Critical Realism',
      virtueEthics: 'Virtue Ethics',
      terorisme: 'Terrorism',
      seniKontemporer: 'Contemporary Art',
      estetikaKontemporer: 'Contemporary Aesthetics: Abjection and the Problem of the Everyday',
      feminisme: 'Feminism',
      filsafatTanda: 'Philosophy and Signs',
      poshumanisme: 'Posthumanism',
      filsafatSosial: 'Social Philosophy',
      logika: 'Logic',
      epistemologi: 'Epistemology',
      filsafatIlmu: 'Philosophy of Science',
      filsafatEkonomi: 'Philosophy of Economics',
      metafilsafat: 'Metaphilosophy',
      filsafatFeminis: 'Feminist Philosophy',
      interseksionalitas: 'Intersectionality Theory',
      etika: 'Ethics',
      filsafatHukum: 'Philosophy of Law',
      filsafatHam: 'Philosophy and Human Rights',
      estetikaSehariHari: 'Everyday Aesthetics',
      seniOlfactory: 'Olfactory Art',
      seniModernKontemporer: 'Modern and Contemporary Art',
      epistemicInjustice: 'Epistemic Injustice',
      memoriKolektif: 'Collective Memory',
      digitalRacism: 'Digital Racism',
      budayaJepang: 'Japanese Culture',
      filsafatBahasa: 'Philosophy of Language',
      demokrasiRadikal: 'Radical Democracy',
      populisme: 'Populism',
    },
  },
}
