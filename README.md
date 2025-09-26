# 🏠 ScapeSync - Authentication System

A full-stack authentication system built with **Node.js, Express, MongoDB, React, Axios, and TailwindCSS**.  
This project provides secure **user registration, email verification, login, and session management**.

---

## ✨ Features
- 🔐 User Registration with hashed passwords (bcryptjs)
- 📧 Email verification with **6-digit OTP** (Nodemailer + Gmail SMTP)
- 🔑 JWT authentication stored in **HTTP-only cookies**
- ✅ Resend verification code option
- 👨‍💻 User Login with session management
- 🚪 Logout & session validation
- 🎨 Frontend built with **React + TailwindCSS**
- ⚡ SweetAlert2 for beautiful alerts
- ⏳ Loading spinner during async requests

---

## 🛠️ Tech Stack
**Backend:**
- Node.js
- Express
- MongoDB (Atlas)
- bcryptjs
- Nodemailer
- JWT (jsonwebtoken)
- Cookie-parser

**Frontend:**
- React (Vite)
- Axios
- TailwindCSS
- SweetAlert2
- react-icons
- react-spinners

---

## 📂 Project Structure
```
/backend
  ├── server.js        # Express server
  ├── routes           # Auth routes (register, verify, login, logout, me)
  ├── .env             # Environment variables
/frontend
  ├── src
      ├── pages
          ├── Register.jsx   # User registration
          ├── Verification.jsx # Email OTP verification
          ├── Login.jsx
```

---

## ⚙️ Backend Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/manageflat.git
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
PORT=3000
DB_USER=your-mongodb-username
DB_PASS=your-mongodb-password
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

⚠️ For Gmail, enable **App Passwords** and use that instead of your real password.

### 4. Start the Server
```bash
npm run dev
```
Backend runs at: `https://backend-ecru-pi-97.vercel.app`

---

## ⚙️ Frontend Setup

### 1. Navigate to Frontend
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start React App
```bash
npm run dev
```
Frontend runs at: `http://localhost:5173`

---

## 🔑 API Endpoints

### Register User
`POST /register`
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```

### Verify Email
`POST /verify`
```json
{
  "email": "john@example.com",
  "code": "123456"
}
```

### Resend Verification Code
`POST /resend-code`
```json
{
  "email": "john@example.com"
}
```

### Login
`POST /login`
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Logout
`POST /logout`

### Check Session
`GET /me`

---

## 🎨 Frontend Screens
- **Register Page** → User fills form → Email OTP sent
- **Verification Page** → Enter OTP → Verify Email
- **Login Page** → Login only after verification
- **Loading Spinner** inside buttons until request completes

---

## 🚀 Deployment
- **Backend**: Deploy on **Vercel**
- **Frontend**: Deploy on **Vercel / Netlify**
- Update `CORS` and `origin` settings in `server.js` before deploying.

---

## 📧 Email Example
```
Hello John Doe,

Your verification code is: 123456

Please enter this code in the app to verify your account.
```

---

## 👨‍💻 Author
Developed by **[Your Name]** 🚀
