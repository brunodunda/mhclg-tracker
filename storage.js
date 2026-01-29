
const KEY_PREFIX = 'mhclg-tracker/'

export const storage = {
  async get(key) {
    const raw = localStorage.getItem(KEY_PREFIX + key)
    return raw ? { value: raw } : null
  },
  async set(key, value) {
    localStorage.setItem(KEY_PREFIX + key, value)
    return true
  },
}

if (!window.storage) {
  window.storage = storage
}
