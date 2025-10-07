# Task Management App

A full-stack **Task Management** application built with **MERN stack** (MongoDB, Express, React, Node.js).  
Backend is deployed on **Render**, and frontend is deployed on **Vercel**.

---

## Features

- User authentication with JWT and refresh tokens
- Role-based access control
- Task CRUD operations with pagination and sorting
- User management (block/unblock)
- Email notifications for account credentials
- Responsive frontend with light and dark themes
- Production-ready setup with CORS, cookies, and secure token handling

---

## Tech Stack

- **Frontend:** React, Vite, Axios, Tailwind CSS  
- **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, Nodemailer  
- **Deployment:** Vercel (frontend), Render (backend)  
- **Database:** MongoDB Atlas

---

## Live Demo

- Frontend: [https://task.rafan.tech](https://task.rafan.tech)  
- Backend API: [https://task-management-m8vm.onrender.com](https://task-management-m8vm.onrender.com)

---

## Prerequisites

- Node.js >= 18
- npm >= 9
- MongoDB Atlas account
- Google Cloud / Gmail API credentials (for email notifications)

---

## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/task-management.git
cd task-management

```

---

### 2. Install Dependencies

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd frontend
npm install
```

---

### 3. Set Environment Variables

#### Backend:

Create a `.env` file inside the `backend` directory and include all required variables (MongoDB URI, JWT secret, email credentials, client origin, etc.).

#### Frontend:

Create a `.env` file inside the `frontend` directory:

```env
VITE_SERVER_ORIGIN=http://localhost:4000
```

> `VITE_SERVER_ORIGIN` points to your local backend for API requests.

---

### 4. Run the Application Locally

#### Backend:

```bash
cd backend
npm run dev
```

* Backend runs at `http://localhost:4000`

#### Frontend:

```bash
cd frontend
npm run dev
```

* Frontend runs at `http://localhost:5173`
* Connects to backend via `VITE_SERVER_ORIGIN`

---

### 5. Access the Application

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:4000](http://localhost:4000)

---

## Hosting (Deployment)

Follow these steps to deploy backend and frontend in production.

### Backend Deployment (Render)

1. Push your backend code to GitHub.
2. Go to [Render](https://render.com/) → **New Web Service** → Connect GitHub repo.
3. Set **Build Command**:

```bash
npm install
npm run build
npm start
```

4. Add **environment variables** in Render dashboard (same as your local `.env`).
5. Deploy → Render provides a backend URL (e.g., `https://task-management-m8vm.onrender.com`).

---

### Frontend Deployment (Vercel)

1. Push your frontend code to GitHub.
2. Go to [Vercel](https://vercel.com/) → **Import Project** → Connect GitHub repo.
3. Set environment variable:

```
VITE_SERVER_ORIGIN=https://<your-backend-render-url>
```

4. Deploy → Vercel provides the frontend URL (e.g., `https://task.rafan.tech`).
5. Frontend now communicates with your deployed backend automatically.

---

### Notes

* Ensure CORS and cookies are configured correctly for production (`credentials: true`, `sameSite: none`, `secure: true` for cookies).
* Use a transactional email service (SendGrid, Gmail API, etc.) for email sending in production.
* Always test API endpoints after deployment to confirm frontend-backend connectivity.

```
