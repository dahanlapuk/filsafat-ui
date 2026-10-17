import { createFileRoute } from '@tanstack/react-router'
import { contentEn } from '../content/en'
import { pageHead } from '../lib/seo'
import { Landing } from '../pages/Landing'

export const Route = createFileRoute('/en')({
  head: () => pageHead('en'),
  component: English,
})

function English() {
  return <Landing content={contentEn} />
}
