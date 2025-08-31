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
<img width="263" height="497" alt="Screenshot 2025-08-31 at 10 06 17 PM" src="https://github.com/user-attachments/assets/92e94373-e7e8-4789-95e2-2b36cac40c82" />



✨ Built with ❤️ by Ritik Laxwani
