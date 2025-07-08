# 💻 KeshavSoft Bootstrap Task 2

A modern, responsive website built using **Bootstrap 5**, integrated with **Vite**, and deployed on **Vercel**. This project includes clean routing, Gulp-based image optimization, and follows JAMStack principles for fast and secure delivery.

---

## 🌐 Live Demo

🔗 [View Website](https://keshavsoft-bootstrap-task-2.vercel.app/)

---

## 📂 Project Structure

```
keshavsoft-bootstrap-vite/
│
├── public/
│   ├── index.html
│   ├── about.html
│   └── contact.html
│
├── src/
│   └── images/           # Unoptimized test images
│
├── dist/
│   └── images/           # Gulp optimized images
│
├── gulpfile.mjs
├── vercel.json
├── package.json
└── README.md
```

---

## 🚀 Features

- ✅ Fully responsive Bootstrap layout
- ⚡ Fast builds and reloads with Vite
- ✨ Clean and minimal UI
- 🧰 Gulp image optimization support
- 🌐 Deployed with Vercel
- 📄 HTML routing with `vercel.json`

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3 + Bootstrap 5**
- **JavaScript (Vite)**
- **Gulp (for image optimization)**
- **Vercel (deployment)**

---

## 📦 How to Use Locally

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/keshavsoft-bootstrap-task-2.git
cd keshavsoft-bootstrap-task-2

# Install dependencies
npm install

# Run local server
npm run dev
```

---

## 📷 Image Optimization with Gulp

Install:

```bash
npm install --save-dev gulp gulp-imagemin
```

Use this command to optimize all images from `src/images` to `dist/images`:

```bash
npx gulp optimizeImages
```

**Gulpfile (gulpfile.mjs):**

```js
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export const optimizeImages = () => {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
};

export default gulp.series(optimizeImages);
```

---

## 📁 Routing Setup (vercel.json)

```json
{
  "rewrites": [
    { "source": "/about", "destination": "/about.html" },
    { "source": "/contact", "destination": "/contact.html" }
  ]
}
```

Place this in your root so Vercel can serve `/about` and `/contact` properly.

---

## 🟢 Deployment on Vercel

1. Push project to GitHub
2. Visit [https://vercel.com](https://vercel.com) and import your repo
3. Configure:
   - Framework: **Other**
   - Output directory: `public`
   - Build command: leave **empty**
4. Add `vercel.json` for clean routing

---

## 📫 Contact

📧 Email: [keshav@example.com](mailto:keshav@example.com)

---

## 🔖 License

MIT – free to use and modify.