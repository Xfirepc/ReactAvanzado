import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storeValue, setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStorageValue(value)
    } catch (e) {
      console.error(e)
    }
  }
  return [storeValue, setLocalStorage]
}
