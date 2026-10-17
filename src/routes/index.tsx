import { createFileRoute } from '@tanstack/react-router'
import { contentId } from '../content/id'
import { pageHead } from '../lib/seo'
import { Landing } from '../pages/Landing'

export const Route = createFileRoute('/')({
  head: () => pageHead('id'),
  component: Home,
})

function Home() {
  return <Landing content={contentId} />
}
