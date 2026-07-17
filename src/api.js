const API = import.meta.env?.VITE_API_URL ?? 'http://localhost:3000'

/**
 * POST /auth/login — on success the backend sets an httpOnly `token` cookie.
 * `credentials: 'include'` is what stores it; without it every later request 401s.
 */
export async function login(email, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json().catch(() => ({}))

  // Stay generic on a bad credential so the form can't be used to enumerate users.
  if (res.status === 403) throw new Error('Invalid email or password')
  if (!res.ok) throw new Error(data.message || `Login failed (${res.status})`)

  return data.payload
}
