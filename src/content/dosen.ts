export type Level = 's1' | 's2' | 's3'
export type Role =
  | 'ketuaDepartemen'
  | 'ketuaProdi'
  | 'ketuaPasca'
  | 'manajerKemahasiswaan'
  | 'koordinatorMbkm'
export type Topic =
  | 'sastra'
  | 'bahasa'
  | 'budaya'
  | 'feminismeIslam'
  | 'pemikiranTimurTengah'
  | 'islamologi'
  | 'sejarahFilsafat'
  | 'philosophyOfMind'
  | 'metafisika'
  | 'estetika'
  | 'filsafatIslam'
  | 'filsafatIslamKontemporer'
  | 'filsafatAgama'
  | 'fenomenologi'
  | 'filsafatPolitik'
  | 'filsafatTimur'
  | 'ekofeminisme'
  | 'filsafatLingkungan'
  | 'eksistensialisme'
  | 'filsafatAnalitik'
  | 'realismeKritis'
  | 'virtueEthics'
  | 'terorisme'
  | 'seniKontemporer'
  | 'estetikaKontemporer'
  | 'feminisme'
  | 'filsafatTanda'
  | 'poshumanisme'
  | 'filsafatSosial'
  | 'logika'
  | 'epistemologi'
  | 'filsafatIlmu'
  | 'filsafatEkonomi'
  | 'metafilsafat'
  | 'filsafatFeminis'
  | 'interseksionalitas'
  | 'etika'
  | 'filsafatHukum'
  | 'filsafatHam'
  | 'estetikaSehariHari'
  | 'seniOlfactory'
  | 'seniModernKontemporer'
  | 'epistemicInjustice'
  | 'memoriKolektif'
  | 'digitalRacism'
  | 'budayaJepang'
  | 'filsafatBahasa'
  | 'demokrasiRadikal'
  | 'populisme'

export type Dosen = {
  name: string
  levels: Level[]
  adjunct?: boolean
  roles?: Partial<Record<Level, Role>>
  expertise: Topic[]
}

// Sumber: konfirmasi Mba Upi (Ketua Program Studi S1), 18 Oktober 2026;
// bidang keahlian dari starter pack mahasiswa baru.
export const dosen: Dosen[] = [
  {
    name: 'Dr. Ganang Dwi Kartika, S.S., M.Hum.',
    levels: ['s1', 's2', 's3'],
    expertise: ['sastra', 'bahasa', 'budaya'],
  },
  {
    name: 'Siti Rohmah Soekarba, S.S., M.Hum.',
    levels: ['s1'],
    expertise: ['feminismeIslam', 'pemikiranTimurTengah', 'islamologi'],
  },
  {
    name: 'Dr. Harsawibawa Albertus, S.Sn., M.Hum.',
    levels: ['s1', 's2', 's3'],
    roles: { s1: 'ketuaDepartemen', s2: 'ketuaDepartemen', s3: 'ketuaDepartemen' },
    expertise: ['sejarahFilsafat', 'philosophyOfMind', 'metafisika', 'estetika'],
  },
  {
    name: 'Dr. Naupal, S.S., M.Hum.',
    levels: ['s1', 's2', 's3'],
    roles: { s2: 'ketuaPasca', s3: 'ketuaPasca' },
    expertise: ['filsafatIslam', 'filsafatIslamKontemporer', 'filsafatAgama'],
  },
  {
    name: 'Dr. Donny Gahral Adian, S.S., M.Hum.',
    levels: ['s1', 's2', 's3'],
    expertise: ['fenomenologi', 'filsafatPolitik', 'metafisika'],
  },
  {
    name: 'Dr. L.G. Saraswati Putri, S.Hum., M.Hum.',
    levels: ['s1', 's2', 's3'],
    expertise: ['filsafatTimur', 'ekofeminisme', 'filsafatLingkungan', 'eksistensialisme'],
  },
  {
    name: 'Dr. Meutia Irina Mukhlis, S.Sos., M.Si.',
    levels: ['s1', 's2'],
    expertise: ['filsafatAnalitik', 'realismeKritis', 'virtueEthics', 'terorisme'],
  },
  {
    name: 'Ikhaputri Widiantini, S.Hum., M.Si.',
    levels: ['s1'],
    roles: { s1: 'ketuaProdi' },
    expertise: ['seniKontemporer', 'estetikaKontemporer', 'feminisme', 'filsafatTanda'],
  },
  {
    name: 'James Farlow Mendrofa, S.Hum., M.Hum.',
    levels: ['s1'],
    roles: { s1: 'manajerKemahasiswaan' },
    expertise: ['eksistensialisme', 'poshumanisme'],
  },
  {
    name: 'Dr. Fristian Hadinata, S.Hum., M.Hum.',
    levels: ['s1', 's2', 's3'],
    expertise: ['filsafatSosial', 'logika'],
  },
  {
    name: 'Dr. Herdito Sandi Pratama, S.Hum., M.Hum.',
    levels: ['s1', 's2'],
    expertise: ['epistemologi', 'filsafatIlmu', 'filsafatEkonomi', 'metafilsafat'],
  },
  {
    name: 'Dr. Abby Gina Boang Manalu, M.Hum.',
    levels: ['s1', 's2'],
    expertise: ['filsafatFeminis', 'interseksionalitas', 'etika'],
  },
  {
    name: 'Haekal Pradifa Furqon, M.Hum., CertDA',
    levels: ['s1'],
    roles: { s1: 'koordinatorMbkm' },
    expertise: ['metafisika', 'filsafatIslam', 'eksistensialisme'],
  },
  {
    name: 'Taufik Basari, LL.M.',
    levels: ['s1'],
    adjunct: true,
    expertise: ['filsafatHukum', 'filsafatHam'],
  },
  {
    name: 'Dyah Sekartaji Putri Hapsari, M.Phil.',
    levels: ['s1'],
    adjunct: true,
    expertise: ['estetikaSehariHari', 'seniOlfactory', 'seniModernKontemporer'],
  },
  {
    name: 'Raka Ihsan Ramadhan, M.Phil.',
    levels: ['s1'],
    adjunct: true,
    expertise: ['epistemicInjustice', 'memoriKolektif', 'filsafatHam'],
  },
  {
    name: 'Robby Hani Dwiki Putra, M.Hum.',
    levels: ['s1'],
    adjunct: true,
    expertise: ['filsafatPolitik', 'demokrasiRadikal', 'populisme'],
  },
  {
    name: 'Dr. Yulius Thedy, M.Hum.',
    levels: ['s1'],
    adjunct: true,
    expertise: ['budayaJepang', 'metafilsafat', 'filsafatBahasa'],
  },
  {
    name: 'Aditama Rizky Noviandry, M.Si.',
    levels: ['s1'],
    adjunct: true,
    expertise: ['filsafatSosial', 'digitalRacism'],
  },
]
