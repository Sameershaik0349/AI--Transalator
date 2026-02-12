# 🌍 AI Translator

A full-stack AI-powered language translation web application built using **React (Frontend)** and **FastAPI (Backend)**.

---

## 🚀 Features

- 🌐 Translate text between multiple languages
- ⚡ FastAPI backend for high-speed API responses
- 🎨 Clean and responsive React UI
- 🔄 Real-time translation results
- 🔒 CORS enabled for frontend-backend communication

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- HTML5
- CSS3

### Backend
- FastAPI
- Python
- Deep Translator
- Uvicorn

---

## 📁 Project Structure

AI-Translator/
│
├── backend/      # FastAPI backend
├── frontend/     # React frontend
└── .gitignore

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sameershaik0349/AI--Transalator.git
cd AI--Transalator
```

---

### 2️⃣ Setup Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:
http://127.0.0.1:8000

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
http://localhost:3000

---

## 🔄 API Endpoint

POST /translate

Example Request:

```json
{
  "text": "Hello",
  "target_language": "fr"
}
```

---

## 👨‍💻 Author

**Sameer Shaik**  
Full Stack Developer | AI Enthusiast  

GitHub: https://github.com/Sameershaik0349

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
