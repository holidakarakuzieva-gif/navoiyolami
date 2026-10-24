# JOZIBALI O‘ZBEK TILI
## Alisher Navoiy ijodiga bag‘ishlangan zamonaviy, interaktiv, ikki tilli ta’lim platformasi

Ushbu platforma O‘zbekiston umumiy o‘rta ta’lim maktablarining rus tilida ta’lim oladigan 8-sinf o‘quvchilari uchun maxsus ishlab chiqilgan. Asosiy maqsad — buyuk mutafakkir Alisher Navoiy hayoti, ijodi, “Xamsa” dostonlari va mumtoz adabiyotimizning jozibasini rusiyzabon yoshlarga zamonaviy EdTech uslubida yetkazishdir.

---

## 🌟 Asosiy imkoniyatlar

1. **Bilingual (Ikki tilli tizim)**: O‘zbekcha (Lotin) va Ruscha interfeys, barcha darslar, tushuntirishlar va testlar 100% ikki tilda.
2. **Yorug‘ va Tungi rejim**: Ko‘zni charchatmaydigan, estetik Sharqona miniatyura va zamonaviy minimalizm uyg‘unligi.
3. **Navoiy olami (Raqamli muzey)**:
   - 5 ta chuqur o‘quv bobi (A, B, C darajali topshiriqlar bilan).
   - 1441–1501 yillarni qamrab olgan interaktiv vaqt chizig‘i (Timeline).
   - Tarixiy geografiya (Hirot, Samarqand, Mashhad, Astrobod, Marv).
   - “Muhokamat ul-lug‘atayn” va tilimiz boyligi tahlili.
4. **“Xamsa” — Besh doston olami**:
   - «Hayrat ul-abror», «Farhod va Shirin», «Layli va Majnun», «Sab’ai sayyor», «Saddi Iskandariy».
   - Qahramonlar tahlili, g‘oyasi, bugungi hayot bilan bog‘liqligi.
   - “Voqealar ketma-ketligini tikla” interaktiv jumboq mashqi.
5. **O‘yinlar laboratoriyasi**:
   - «Navoiy bilimdoni» — 10 ta savolli viktorina.
   - «So‘z ovchisi» — o‘zbekcha-ruscha so‘zlarni moslashtirish.
   - «Hikmatni anglang» — aforizmlar tahlili.
   - «Parchani tikla» — she’riy misralarni to‘g‘ri yig‘ish.
   - «Kimligini top!» — ishoralarga qarab qahramonni aniqlash.
   - «Navoiy bilan duel» — bitta qurilmada sinfdoshlar bilan 2 kishilik musobaqa!
6. **Lug‘at xazinasi**:
   - Qidiruv, toifalar va saralanganlar.
   - Ovozli talaffuz (Web Speech API).
   - Flashcard (flesh-karta) orqali takrorlash mashqi.
7. **Ijodiy ustaxona**:
   - Qahramonga maktub, Navoiyga savol, mini-esse va hikoyalar yozish.
   - Brauzerda saqlash, nusxalash va tahrirlash.
8. **Bilimlar xaritasi va Yutuqlarim**:
   - 7 bosqichli ta’lim sayohati, XP ballar hisobi.
   - 7 ta faxriy nishon (badges) va chop etiladigan “Mening adabiy pasportim”.
9. **O‘qituvchi uchun kabinet & Print Lab**:
   - 45 daqiqalik dars ishlanmasi (Xronometraj: 5-10-15-10-5 daqiqa).
   - Baholash mezonlari (Rubrika: 100 ballik).
   - Tarqatma ish varaqlarini 1-bosishda chop etish (Print Lab).
   - Sinf uchun tezkor QR-kod.

---

## 🚀 O‘rnatish va mahalliy ishga tushirish

Loyihani kompyuteringizda ishga tushirish uchun quyidagi buyruqlarni ketma-ket bajaring:

```bash
# 1. Bog‘liqliklarni o‘rnatish
npm install

# 2. Rivojlantirish serverini ishga tushirish
npm run dev

# 3. Brauzerda ochish
# http://localhost:3000
```

---

## 🛠 Texnologik stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Dizayn & CSS**: Tailwind CSS v4, Lucide React ikonlari
- **Animatsiyalar**: Motion & Canvas Confetti
- **Saqlash**: Mahalliy `localStorage` (tashqi server yoki majburiy API kalitisiz 100% mustaqil ishlaydi)

---

## 📦 Vercel va GitHub’ga joylashtirish (Deployment)

1. **GitHub’ga yuklash**:
   ```bash
   git init
   git add .
   git commit -m "feat: Jozibali O'zbek Tili platformasi"
   git branch -M main
   git remote add origin <SIZNING_GITHUB_REPO_HAVOLANGIZ>
   git push -u origin main
   ```

2. **Vercel orqali deploy qilish**:
   - [vercel.com](https://vercel.com) saytiga kiring.
   - GitHub profilingiz orqali ushbu omborni (repository) import qiling.
   - Framework preset sifatida **Vite** ni tanlang.
   - Build command: `npm run build`
   - Output directory: `dist`
   - **Deploy** tugmasini bosing. Loyiha bir necha soniyada butun dunyo bo‘ylab jonli efirga chiqadi!

---

## 📄 Litsenziya

Apache-2.0 License. © 2026 Jozibali O‘zbek Tili.
