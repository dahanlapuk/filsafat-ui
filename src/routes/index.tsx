import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/')({
  head: () => pageHead('id'),
  component: Home,
})

function Home() {
  return (
    <main>
      <h1>UJI PRERENDER INDONESIA</h1>
      <p>Departemen Filsafat Universitas Indonesia</p>
      <Link to="/en">EN</Link>
    </main>
  )
}
