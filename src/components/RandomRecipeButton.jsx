import { useState } from "react";
import { Link } from "react-router-dom";

export default function RandomRecipeButton({ onPick }) {
  const [picked, setPicked] = useState(null);
  const [rolling, setRolling] = useState(false);

  const handleClick = () => {
    const recipe = onPick();
    if (!recipe) return;
    setRolling(true);
    // Kısa bir "zar atma" animasyonu 
    setTimeout(() => {
      setPicked(recipe);
      setRolling(false);
    }, 400);
  };

  return (
    <div className="random-recipe-box">
      <button
        className="btn btn-random"
        onClick={handleClick}
        disabled={rolling}
      >
        {rolling ? "🎲 Karıştırılıyor..." : "🎲 Bugün Ne Pişirsem?"}
      </button>

      {picked && !rolling && (
        <div className="random-result">
          <p className="mb-1 text-muted">Bugünkü önerimiz</p>
          <h4 className="mb-2">
            {emojiForCategory(picked.category)} {picked.name}
          </h4>
          <Link to={`/tarif/${picked.id}`} className="btn btn-sm btn-outline-dark">
            Tarife git
          </Link>
        </div>
      )}
    </div>
  );
}

function emojiForCategory(category) {
  const map = {
    "Ana Yemek": "🍝",
    Çorba: "🍲",
    Salata: "🥗",
    Tatlı: "🍰",
    Kahvaltı: "🍳",
    Aperatif: "🥨",
    İçecek: "🥤",
  };
  return map[category] || "🍽️";
}
