import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Şifreler eşleşmiyor.");
      return;
    }
    const result = onRegister(username, password);
    if (!result.success) {
      setError(result.message);
      return;
    }
    navigate("/");
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit} noValidate>
        <h1 className="page-title mb-1">Hesap Oluştur 🍳</h1>
        <p className="text-muted mb-4">
          Tariflerini kaydetmek için bir hesap oluştur.
        </p>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <div className="mb-3">
          <label className="form-label">Kullanıcı Adı</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Şifre</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Şifre (Tekrar)</label>
          <input
            type="password"
            className="form-control"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-brand w-100 mt-2">
          Kayıt Ol
        </button>

        <p className="text-center mt-3 mb-0">
          Zaten hesabın var mı? <Link to="/giris">Giriş Yap</Link>
        </p>
      </form>
    </div>
  );
}
