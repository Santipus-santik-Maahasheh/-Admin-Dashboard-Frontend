import { useState } from 'react'
import LoginScreen from './LoginScreen'

function App() {
  const [user, setUser] = useState(null)

  if (!user) return <LoginScreen onLogin={setUser} />

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-3"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-sans)' }}
    >
      <p className="font-display text-foreground">
        Signed in as {user.name} · <span className="text-primary">{user.role}</span>
      </p>
      {/* ponytail: sign-out is client-side only — the httpOnly `token` cookie can't be
          cleared from JS and stays valid for its 1h TTL. Point this at a real
          POST /auth/logout (cookie-clearing) once the backend exposes one. */}
      <button
        onClick={() => setUser(null)}
        className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
      >
        Sign out
      </button>
    </div>
  )
}

export default App
