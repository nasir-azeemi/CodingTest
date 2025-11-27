# Full-Stack Coding Challenge – React + TypeScript + Node.js

Thank you for participating in our coding challenge!  
Your goal is to build a small full-stack application using **React + TypeScript** on the frontend and **Node.js + Express** on the backend.

Please follow all requirements and submission instructions below.
---
## Project Overview
You will build:
- A **backend API proxy** that fetches users from a public API
- A **frontend interface** that displays, filters, and interacts with those users
---
# Backend Requirements (Node.js + Express)
Create a simple backend server that exposes a single proxy endpoint.
### **Base URL**
```
http://localhost:3000
```
### **Endpoint: `GET /api/users`**
This endpoint must:
1. Fetch users from `https://jsonplaceholder.typicode.com/users`
2. Include basic error handling
3. Return the JSON data to your frontend
---
# Frontend Requirements (React + TypeScript)
The frontend must fetch data **only from your backend**:
```
GET http://localhost:3000/api/users
```
---
## 1. User List With Search & Debounce
Display all users showing:
- Name
- Email
- Company name

Add a search box that:
- Filters by name
- Uses a 300ms debounce
- Updates client-side

Add a **“Favorites Only”** toggle.
---
## 2. User Detail Side Panel
When a user is clicked, show their details on the right side:
- Name
- Email
- Phone

---
## 3. Favorite a User (⭐)
- Clicking ⭐ toggles favorite status
- Must not trigger the details panel
- Favorites stored only in React state
---
# Repository Structure
```
/backend    → Express server
/frontend   → React + TypeScript
```
---
# Running Locally
### Backend
```
cd backend
npm install
npm run dev
```
### Frontend
```
cd frontend
npm install
npm run dev
```
---
# Deployment Instructions
1. Push code to GitHub  
2. Deploy via Vercel  
3. Ensure auto‑deploy on push  
4. Submit:
   - GitHub repo link  
   - Live Vercel link  
---
Good luck! 
