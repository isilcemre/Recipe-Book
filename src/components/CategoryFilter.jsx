import { CATEGORIES } from "../interfaces/Recipe";

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-filter">
      <button
        className={`category-pill ${selected === "Tümü" ? "active" : ""}`}
        onClick={() => onSelect("Tümü")}
      >
        Tümü
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`category-pill ${selected === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
