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
    libraryLabel: string
    copyright: string
    builtBy: string
  }
}
