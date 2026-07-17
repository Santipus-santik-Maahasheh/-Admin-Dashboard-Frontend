import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Lock, ChevronRight, AlertCircle, Loader2 } from 'lucide-react'
import { login } from './api'

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      onLogin(await login(email, password))
    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Cannot reach the server' : err.message)
      setBusy(false)
    }
  }

  const field =
    'w-full pl-9 pr-3 py-2.5 rounded-xl text-sm font-sans bg-secondary text-foreground ' +
    'placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30'

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-sans)' }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(124,111,239,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow */}
      <div
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,111,239,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
            style={{ background: 'linear-gradient(135deg,#7c6fef,#f0b429)' }}
          >
            <span className="font-display font-black text-2xl text-white">N</span>
          </div>
          <h1 className="font-display font-black text-3xl text-foreground">Nexus HR</h1>
          <p className="text-muted-foreground text-sm mt-1.5 font-sans">Sign in to continue</p>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl p-6 space-y-4"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <div>
            <label htmlFor="email" className="text-xs text-muted-foreground font-sans mb-1.5 block">
              Email
            </label>
            <div className="relative">
              <Mail
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@company.io"
                className={field}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-xs text-muted-foreground font-sans mb-1.5 block">
              Password
            </label>
            <div className="relative">
              <Lock
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className={field}
              />
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="flex items-center gap-2 text-xs font-sans px-3 py-2 rounded-xl"
              style={{ background: 'rgba(239,83,80,0.15)', color: '#ef5350' }}
            >
              <AlertCircle size={13} className="flex-shrink-0" />
              {error}
            </div>
          )}

          <motion.button
            type="submit"
            disabled={busy}
            whileHover={busy ? undefined : { scale: 1.02 }}
            whileTap={busy ? undefined : { scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white font-display disabled:opacity-60"
            style={{ background: 'var(--primary)' }}
          >
            {busy ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Signing in…
              </>
            ) : (
              <>
                Sign in
                <ChevronRight size={15} />
              </>
            )}
          </motion.button>
        </form>

        <p className="text-center text-[10px] text-muted-foreground mt-8 font-mono uppercase tracking-widest">
          Nexus HR — authorized access only
        </p>
      </div>
    </div>
  )
}
