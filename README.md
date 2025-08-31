Me-API Playground 

A full-stack project that stores and exposes my personal candidate profile via a small API and a minimal frontend.

Backend: Express + Node.js + MongoDB Atlas

Frontend: React (Vercel-hosted)

Database: MongoDB Atlas (with real data)

Hosting: Backend on Render, Frontend on Vercel

🔗 Live URLs

Frontend (React): (https://me-api-frontend-75ou7v5pv-riticulous-projects.vercel.app/)

Backend (API): (https://me-api-backend.onrender.com/)

Resume: https://drive.google.com/file/d/1en578isZ2NsE-YBEHntI4K1hgqQLwQJW/view?usp=sharing

Features

CRUD operations for candidate profile (/profile)

Query projects by skill (/profile/projects?skill=...)

Get top skills (/profile/skills/top)

Search across profile (/profile/search?q=...)

Health check (/profile/health)

Minimal React UI for profile, projects, search

search

📡 API Endpoints
Health Check
curl https://me-api-backend.onrender.com/profile/health
# → { "status": "OK" }

Get Profile
curl https://me-api-backend.onrender.com/profile

Update Profile
curl -X POST https://me-api-backend.onrender.com/profile \
   -H "Content-Type: application/json" \
   -d '{
     "name": "Ritik Laxwani",
     "email": "ritiklaxwani2004@gmail.com",
     "skills": ["JavaScript", "Node.js", "React"]
   }'

Get Projects by Skill
curl "https://me-api-backend.onrender.com/profile/projects?skill=React"

Get Top Skills
curl https://me-api-backend.onrender.com/profile/skills/top

Search
curl "https://me-api-backend.onrender.com/profile/search?q=MongoDB"

Architecture
me-api-playground/
│
├── backend/                  # Node.js + Express + MongoDB API
│   ├── server.js              # Entry point
│   ├── routes/                # Express route handlers
│   │   └── ProfileRoutes.js
│   ├── models/                # Mongoose schemas
│   │   └── Profile.js
│   ├── package.json
│   └── .env                   # (local only, excluded from git)
│
├── frontend/                 # React app (Vite or CRA)
│   ├── src/                   # React components
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── .env                   # REACT_APP_API_URL (points to backend)
│
├── README.md                  # Project overview & setup
└── schema.md                  # Documentation of Profile schema



✨ Built with ❤️ by Ritik Laxwani
