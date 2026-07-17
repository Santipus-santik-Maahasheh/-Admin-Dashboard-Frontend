// node --test src/api.test.ts
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { login } from './api.ts'

const reply = (status: number, body: unknown) => {
  globalThis.fetch = (async () => ({
    status,
    ok: status < 400,
    json: async () => body,
  })) as unknown as typeof fetch
}

test('returns the user payload on success', async () => {
  reply(200, { message: 'login Success', payload: { name: 'Ada', role: 'Admin' } })
  assert.deepEqual(await login('a@b.io', 'pw'), { name: 'Ada', role: 'Admin' })
})

test('403 stays generic — no user enumeration', async () => {
  reply(403, { message: 'login failed' })
  await assert.rejects(() => login('a@b.io', 'wrong'), /Invalid email or password/)
})

test('surfaces the 400 validation message', async () => {
  reply(400, { message: 'email and password are required' })
  await assert.rejects(() => login('', ''), /email and password are required/)
})

test('sends credentials so the httpOnly cookie is actually stored', async () => {
  let sent: RequestInit | undefined
  globalThis.fetch = (async (_url: RequestInfo | URL, opts?: RequestInit) => {
    sent = opts
    return { status: 200, ok: true, json: async () => ({ payload: {} }) }
  }) as unknown as typeof fetch
  await login('a@b.io', 'pw')
  assert.equal(sent?.credentials, 'include')
  assert.deepEqual(JSON.parse(sent?.body as string), { email: 'a@b.io', password: 'pw' })
})
