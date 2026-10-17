export type Level = 's1' | 's2' | 's3'
export type Role = 'ketuaDepartemen' | 'ketuaProdi' | 'ketuaPasca'
export type Field = 'metafisika' | 'estetika' | 'etika'

export type Dosen = {
  name: string
  levels: Level[]
  roles?: Partial<Record<Level, Role>>
  field?: Field
}

export const dosen: Dosen[] = [
  {
    name: 'Dr. Naupal, M.Hum.',
    levels: ['s1', 's2'],
    roles: { s2: 'ketuaPasca' },
    field: 'metafisika',
  },
  { name: 'Dr. Donny Gahral Adian, M.Hum.', levels: ['s1', 's2', 's3'], field: 'estetika' },
  {
    name: 'Dr. Harsawibawa Albertus, M.Hum.',
    levels: ['s1', 's2'],
    roles: { s1: 'ketuaDepartemen', s2: 'ketuaDepartemen' },
    field: 'metafisika',
  },
  { name: 'Dr. L.G. Saraswati Putri, M.Hum.', levels: ['s1', 's2'], field: 'estetika' },
  { name: 'Dr. Fristian Hadinata, M.Hum.', levels: ['s1', 's2', 's3'], field: 'etika' },
  { name: 'Dr. Herdito Sandi Pratama, M.Hum.', levels: ['s1', 's2', 's3'], field: 'estetika' },
  { name: 'Dr. Ganang Dwi Kartika, M.Hum.', levels: ['s1'] },
  { name: 'James Farlow Mendrofa, S.Hum., M.Hum.', levels: ['s1'] },
  {
    name: 'Ikhaputri Widiantini, S.Hum., M.Si.',
    levels: ['s1'],
    roles: { s1: 'ketuaProdi' },
  },
]
