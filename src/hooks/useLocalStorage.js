import { useEffect, useState } from "react";

/**
 * Bir state'i LocalStorage ile senkronize tutan generic hook.
 * @param {string} key
 * @param {*} initialValue
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.error("LocalStorage okunamadı:", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("LocalStorage yazılamadı:", err);
    }
  }, [key, value]);

  return [value, setValue];
}
