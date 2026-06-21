export const INSTITUTIONS = [
  {
    type: 'school',
    name: 'Vidya Mandir Estancia',
    id: 'VME2026',
    password: 'demo123',
    welcomeNote: 'Your students\' collection drive has already diverted plastic through 2 active ReBins on campus.',
  },
  {
    type: 'corporate',
    name: 'TEA TIDES',
    id: 'TT2026',
    password: 'demo456',
    welcomeNote: 'Your team\'s ReBin partnership is tracked here, alongside your branded merchandise catalog.',
  },
]

export function verifyLogin(id, password) {
  return INSTITUTIONS.find((i) => i.id === id && i.password === password) || null
}
