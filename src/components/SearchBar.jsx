export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <i className="bi bi-search search-icon"></i>
      <input
        type="search"
        className="form-control search-input"
        placeholder="Tarif ara... (örn. Pizza)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Tarif ara"
      />
    </div>
  );
}
