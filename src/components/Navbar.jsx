import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar({ searchTerm, onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg app-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand app-brand" to="/">
          <span className="brand-icon">📖</span> My Recipe Book
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Tarifler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favoriler">
                Favoriler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elde-ne-var">
                Elde Ne Var?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tarif-ekle">
                + Tarif Ekle
              </NavLink>
            </li>
          </ul>
          {onSearchChange && (
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          )}
        </div>
      </div>
    </nav>
  );
}
