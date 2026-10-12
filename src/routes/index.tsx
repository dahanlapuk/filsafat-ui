import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <h1>UJI PRERENDER INDONESIA</h1>
      <p>Departemen Filsafat Universitas Indonesia</p>
      <Link to="/en">EN</Link>
    </main>
  )
}
