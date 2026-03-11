# Vivek N Shet — Portfolio (Vite React + Express)

A personal portfolio website converted from a plain HTML/Node.js app to a **Vite React** frontend with an **Express** backend.

---

## 📁 Project Structure

```
vivek-portfolio/
├── package.json              ← Root scripts
├── .gitignore
│
├── frontend/                 ← Vite + React app
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       └── components/
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Skills.jsx
│           ├── Projects.jsx
│           ├── Certifications.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
│
└── backend/                  ← Express server
    ├── server.js
    └── package.json
```

---

## 🚀 Step-by-Step Setup

### Step 1 — Prerequisites
- **Node.js** v18+ → https://nodejs.org

### Step 2 — Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### Step 3 — Run in Development Mode (two terminals)

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
# Runs at http://localhost:5000
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
# Runs at http://localhost:5173
```

### Step 4 — Build for Production

```bash
cd frontend && npm run build
cd ../backend && npm start
# Visit http://localhost:5000
```

---

## ☁️ Deploy on Vercel (Recommended — Frontend Only)

1. Push to GitHub
2. Go to https://vercel.com → Import Project
3. Set **Root Directory** to `frontend`
4. Build Command: `npm run build` | Output: `dist`
5. Deploy!

## ☁️ Deploy on Render (Full Stack)

1. Push to GitHub
2. New Web Service on https://render.com
3. Root Directory: `backend`
4. Build Command: `cd ../frontend && npm install && npm run build`
5. Start Command: `npm start`
6. Deploy!

---

Built by **Vivek N Shet** · viveknshet123@gmail.com · Bengaluru, India
