/// <reference types="vite/client" />

// Types our own VITE_* env vars so `import.meta.env.VITE_API_URL` is checked.
interface ImportMetaEnv {
  readonly VITE_API_URL?: string
}
