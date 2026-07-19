# My Recipe Book (Akıllı Tarif Defteri)

Kullanıcıların kendi yemek tariflerini kaydedebildiği, düzenleyebildiği, silebildiği ve görüntüleyebildiği bir React uygulaması. Veriler tarayıcının **LocalStorage**'ında tutulur, backend/veritabanı gerekmez.

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` açılır. İlk çalıştırmada birkaç örnek tarif otomatik olarak yüklenir (yalnızca LocalStorage boşsa).

Üretim derlemesi için:

```bash
npm run build
npm run preview
```

## Proje Yapısı

```
src/
  components/     -> Navbar, RecipeCard, RecipeForm, SearchBar, CategoryFilter,
                      RandomRecipeButton, IngredientSelector, ConfirmModal, Toast
  pages/          -> Home, AddRecipe, EditRecipe, RecipeDetail,
                      AvailableIngredients, Favorites
  interfaces/      -> Recipe.js (veri modeli + sabitler)
  hooks/          -> useLocalStorage, useRecipes (tüm CRUD + iş mantığı burada)
  data/           -> sampleRecipes.js (ilk açılışta gösterilen örnek tarifler)
  App.jsx         -> Route tanımları ve state bağlama
  main.jsx        -> Giriş noktası (BrowserRouter + Bootstrap importları)
```

## Özellikler

- **Tarif Ekle / Listele / Güncelle / Sil** — tüm veriler LocalStorage'a yazılır.
- **Arama** — Navbar'daki arama kutusu, tarif adına göre anlık filtreler.
- **Kategori Filtreleme** — pill butonlarla kategoriye göre filtreleme.
- **Favoriler** — kart üzerindeki kalp ikonuyla favoriye ekleme/çıkarma, ayrı favoriler sayfası.
- **Tarif Detay Sayfası** — büyük fotoğraf, malzemeler, hazırlanış, süre, porsiyon.
- **Bugün Ne Pişirsem?** — `Math.random()` ile tariflerin arasından rastgele öneri.
- **Elde Ne Var?** — evdeki malzemeleri işaretleyip en yüksek eşleşme yüzdesine göre sıralanmış tarif önerileri; eksik malzemeler de gösterilir.
- **Silme Onayı** — Bootstrap modal ile "emin misiniz?" onayı.
- **Toast Bildirimleri** — ekleme/güncelleme/silme işlemlerinde geri bildirim.

## Kullanılan Teknolojiler

- React 19 + Vite
- React Router (sayfa yönlendirme)
- Bootstrap 5 + Bootstrap Icons (Navbar, Card, Form, Button, Modal, Badge, Toast)
- LocalStorage (veritabanı yerine)

## Notlar / Geliştirilebilecek Noktalar

- Fotoğraflar şu an bir URL alanı olarak ekleniyor; dosya yükleme (base64) eklenebilir.
- Porsiyon miktarına göre malzeme miktarlarını otomatik ölçeklendirme eklenebilir.
- Daha gelişmiş bir "Elde Ne Var?" algoritması için eksik malzeme sayısına göre ağırlıklandırma yapılabilir.
