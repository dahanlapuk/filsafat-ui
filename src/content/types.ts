export type Content = {
  lang: 'id' | 'en'
  skipLabel: string
  header: { wordmark: string; switchLabel: string }
  hero: { title: string; lead: string; programsLabel: string; libraryLabel: string }
  about: {
    label: string
    facts: { term: string; value: string }[]
    paragraphs: string[]
  }
  nav: { id: string; label: string }[]
  footer: {
    name: string
    place: string
    menuLabel: string
    linksLabel: string
    libraryLabel: string
    infoLabel: string
    facultyLabel: string
    copyright: string
    builtBy: string
  }
}
