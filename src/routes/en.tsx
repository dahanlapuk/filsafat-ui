import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/en')({ component: English })

function English() {
  return (
    <main>
      <h1>PRERENDER TEST ENGLISH</h1>
      <p>Department of Philosophy, Universitas Indonesia</p>
      <Link to="/">ID</Link>
    </main>
  )
}
