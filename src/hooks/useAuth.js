import { useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const USERS_KEY = "myRecipeBook.users";
const SESSION_KEY = "myRecipeBook.currentUser";

// NOT: Bu basit bir demo/ödev projesidir. Şifreler düz metin olarak
// LocalStorage'da tutulur; gerçek bir üründe ASLA böyle yapılmamalıdır.
// Gerçek kullanım için şifre hash'leme ve bir backend gerekir.

export default function useAuth() {
  const [users, setUsers] = useLocalStorage(USERS_KEY, []);
  const [currentUser, setCurrentUser] = useLocalStorage(SESSION_KEY, null);

  const register = useCallback(
    (username, password) => {
      const trimmed = username.trim();
      if (!trimmed || !password) {
        return { success: false, message: "Kullanıcı adı ve şifre zorunludur." };
      }
      const exists = users.some(
        (u) => u.username.toLowerCase() === trimmed.toLowerCase()
      );
      if (exists) {
        return { success: false, message: "Bu kullanıcı adı zaten alınmış." };
      }
      const newUser = { username: trimmed, password };
      setUsers((prev) => [...prev, newUser]);
      setCurrentUser({ username: trimmed });
      return { success: true };
    },
    [users, setUsers, setCurrentUser]
  );

  const login = useCallback(
    (username, password) => {
      const trimmed = username.trim();
      const found = users.find(
        (u) =>
          u.username.toLowerCase() === trimmed.toLowerCase() &&
          u.password === password
      );
      if (!found) {
        return { success: false, message: "Kullanıcı adı veya şifre hatalı." };
      }
      setCurrentUser({ username: found.username });
      return { success: true };
    },
    [users, setCurrentUser]
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, [setCurrentUser]);

  return { currentUser, register, login, logout };
}
