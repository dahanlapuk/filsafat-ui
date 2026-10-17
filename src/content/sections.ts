import {
  ALUMNI_IG_URL,
  ALUMNI_URL,
  HUMAS_EMAIL_HREF,
  HUMAS_IG_URL,
  HUMAS_PHONE_HREF,
  KOMAFIL_IG_URL,
} from '../lib/links'

export type SectionsContent = {
  library: {
    label: string
    title: string
    text: string
    facts: { term: string; lines: string[] }[]
    catalogLabel: string
    infoLabel: string
  }
  community: {
    label: string
    items: {
      name: string
      full?: string
      text: string
      note?: string
      links: { label: string; href: string }[]
    }[]
    join: { title: string; text: string; label: string }
  }
  contact: {
    label: string
    visit: { title: string; place: string; lines: string[]; mapLabel: string }
    faculty: {
      title: string
      note: string
      office: string
      address: string[]
      items: { term: string; value: string; href: string }[]
      checked: string
    }
  }
}

export const sectionsId: SectionsContent = {
  library: {
    label: 'Biblioteka',
    title: 'Biblioteka Departemen Filsafat UI',
    text: 'Biblioteka Departemen Filsafat UI menyimpan koleksi buku, jurnal, dan tugas akhir milik departemen. Semuanya bisa dicari di katalog daring. Untuk meminjam, isi formulir di halaman buku (tanpa akun), tunggu persetujuan admin, lalu datang dan baca di tempat.',
    facts: [
      {
        term: 'Lokasi',
        lines: [
          'Gedung VII Anton M. Moeliono, Fakultas Ilmu Pengetahuan Budaya, Universitas Indonesia',
          'Ruang Departemen Filsafat, Lantai 2. Area membaca berada di Lantai 1.',
        ],
      },
      {
        term: 'Jam',
        lines: ['Senin sampai Rabu dan Jumat: 08.00-16.00 WIB', 'Kamis: 08.00-14.00 WIB'],
      },
      { term: 'Peminjam', lines: ['Mahasiswa dan dosen Departemen Filsafat UI (S1, S2, S3)'] },
    ],
    catalogLabel: 'Buka katalog',
    infoLabel: 'Informasi lengkap',
  },
  community: {
    label: 'Komunitas dan alumni',
    items: [
      {
        name: 'KOMAFIL',
        full: 'Komunitas Mahasiswa Filsafat',
        text: 'Himpunan yang menaungi mahasiswa tingkat sarjana di Program Studi Ilmu Filsafat FIB UI, berdiri sejak 15 November 2002. Wadah bagi mahasiswa untuk mengembangkan minat, bakat, dan kemampuan di bidang akademik, organisasi, advokasi, serta pengabdian masyarakat.',
        note: 'Ketua 2026: Mukhyar Ziyadaturrizqi',
        links: [{ label: 'Instagram @komafil.ui', href: KOMAFIL_IG_URL }],
      },
      {
        name: 'Alumni Filsafat UI',
        text: 'Jaringan alumni Filsafat UI lintas angkatan. Situsnya memuat direktori alumni, tulisan dan terbitan (Buletin Agora, Kertas Kerja), serta acara seperti Marginalia, Philosopher at Work, dan PhilosoGigs. Dikelola terpisah dari departemen.',
        links: [
          { label: 'alumnifilsafatui.com', href: ALUMNI_URL },
          { label: 'Instagram @alumnifilsafatui', href: ALUMNI_IG_URL },
        ],
      },
    ],
    join: {
      title: 'Grup pengumuman',
      text: 'Pengumuman program studi untuk mahasiswa. Hanya admin yang dapat mengirim pesan.',
      label: 'Gabung grup',
    },
  },
  contact: {
    label: 'Kontak',
    visit: {
      title: 'Kunjungi',
      place: 'Biblioteka Departemen Filsafat UI',
      lines: [
        'Gedung VII Anton M. Moeliono, Fakultas Ilmu Pengetahuan Budaya, Universitas Indonesia',
        'Ruang Departemen Filsafat, Lantai 2. Area membaca berada di Lantai 1.',
      ],
      mapLabel: 'Buka di Google Maps',
    },
    faculty: {
      title: 'Hubungi fakultas',
      note: 'Kontak tingkat fakultas.',
      office: 'Kantor Humas & Protokol FIB UI',
      address: ['Jalan Prof. Dr. Nugroho Notosusanto', 'Kampus UI, Depok 16424'],
      items: [
        { term: 'Telepon', value: '+62 21 7863528 ekst. 110', href: HUMAS_PHONE_HREF },
        { term: 'Surel', value: 'humas1@ui.ac.id', href: HUMAS_EMAIL_HREF },
        { term: 'Instagram', value: '@humasfibui', href: HUMAS_IG_URL },
      ],
      checked: 'Kontak diambil dari situs FIB, terakhir diperiksa Oktober 2026.',
    },
  },
}

export const sectionsEn: SectionsContent = {
  library: {
    label: 'Library',
    title: 'Biblioteka Departemen Filsafat UI',
    text: 'The library of the Department of Philosophy. It holds the department’s books, journals, and theses, all searchable in the online catalog. To borrow, fill in the form on a book’s page (no account needed), wait for an admin’s approval, then come to the library and read on site.',
    facts: [
      {
        term: 'Location',
        lines: [
          'Gedung VII Anton M. Moeliono, Faculty of Humanities, Universitas Indonesia',
          'Department of Philosophy room, 2nd floor. Reading area on the 1st floor.',
        ],
      },
      {
        term: 'Hours',
        lines: ['Monday to Wednesday and Friday: 08:00–16:00 WIB', 'Thursday: 08:00–14:00 WIB'],
      },
      {
        term: 'Borrowers',
        lines: ['Students and lecturers of the Department of Philosophy (S1, S2, S3)'],
      },
    ],
    catalogLabel: 'Open the catalog (Indonesian)',
    infoLabel: 'Full information (Indonesian)',
  },
  community: {
    label: 'Community and alumni',
    items: [
      {
        name: 'KOMAFIL',
        full: 'Komunitas Mahasiswa Filsafat',
        text: 'The student association for undergraduate students of the Philosophy Studies Program at FIB UI, founded on 15 November 2002. A place for students to develop their interests, talents, and skills in academics, organization, advocacy, and community service.',
        note: 'Chair 2026: Mukhyar Ziyadaturrizqi',
        links: [{ label: 'Instagram @komafil.ui', href: KOMAFIL_IG_URL }],
      },
      {
        name: 'Alumni Filsafat UI',
        text: 'The alumni network of Filsafat UI across cohorts. Its site has an alumni directory, essays and publications (Buletin Agora, Kertas Kerja), and events such as Marginalia, Philosopher at Work and PhilosoGigs. Run separately from the department.',
        links: [
          { label: 'alumnifilsafatui.com', href: ALUMNI_URL },
          { label: 'Instagram @alumnifilsafatui', href: ALUMNI_IG_URL },
        ],
      },
    ],
    join: {
      title: 'Announcement group',
      text: 'Announcements for students of the Philosophy Studies Program. Only admins can post.',
      label: 'Join the group',
    },
  },
  contact: {
    label: 'Contact',
    visit: {
      title: 'Visit',
      place: 'Biblioteka Departemen Filsafat UI',
      lines: [
        'Gedung VII Anton M. Moeliono, Faculty of Humanities, Universitas Indonesia',
        'Department of Philosophy room, 2nd floor. Reading area on the 1st floor.',
      ],
      mapLabel: 'Open in Google Maps',
    },
    faculty: {
      title: 'Contact the faculty',
      note: 'Faculty-level contact.',
      office: 'Public Relations Office, Faculty of Humanities',
      address: ['Jalan Prof. Dr. Nugroho Notosusanto', 'Kampus UI, Depok 16424'],
      items: [
        { term: 'Phone', value: '+62 21 7863528 ext. 110', href: HUMAS_PHONE_HREF },
        { term: 'Email', value: 'humas1@ui.ac.id', href: HUMAS_EMAIL_HREF },
        { term: 'Instagram', value: '@humasfibui', href: HUMAS_IG_URL },
      ],
      checked: 'Contact details are taken from the FIB website, last checked October 2026.',
    },
  },
}
