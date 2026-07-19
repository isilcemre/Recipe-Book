# Recipe Book (Akıllı Tarif Defteri)

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

## Ekran Görüntüleri

<img width="1917" height="968" alt="Ekran görüntüsü 2026-07-19 170640" src="https://github.com/user-attachments/assets/c339c772-2717-4c1b-b75e-f89a9f8b7bfa" />
<br>
<img width="1917" height="970" alt="Ekran görüntüsü 2026-07-19 170650" src="https://github.com/user-attachments/assets/9783cd1b-ba56-4d85-8053-18808ef7a601" />
<br>
<img width="1917" height="970" alt="Ekran görüntüsü 2026-07-19 170657" src="https://github.com/user-attachments/assets/fb1ac88c-fbb9-4f09-919e-1772d772be2f" />
<br>
<img width="1902" height="967" alt="Ekran görüntüsü 2026-07-19 170802" src="https://github.com/user-attachments/assets/d257361c-a3df-40d5-a771-04fbfe8f03c5" />
<br>
<img width="1651" height="352" alt="Ekran görüntüsü 2026-07-19 170815" src="https://github.com/user-attachments/assets/d1b5f95f-7120-4c6c-90f1-8d314aef9ed2" />
<br>
<img width="1897" height="968" alt="Ekran görüntüsü 2026-07-19 170832" src="https://github.com/user-attachments/assets/41d5b667-551b-4b4e-b318-597434324997" />
<br>
<img width="1897" height="967" alt="Ekran görüntüsü 2026-07-19 170900" src="https://github.com/user-attachments/assets/a0529172-2002-470b-b06b-df904063a822" />
<br>
<img width="1900" height="966" alt="Ekran görüntüsü 2026-07-19 170916" src="https://github.com/user-attachments/assets/91ed4751-9ec3-40af-bc66-20ef41cecbf7" />
<br>
<img width="1917" height="966" alt="Ekran görüntüsü 2026-07-19 170923" src="https://github.com/user-attachments/assets/a08a90ba-20ef-4abd-a3aa-93ecddee6ae2" />


