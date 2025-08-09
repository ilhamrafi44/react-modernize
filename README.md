# 🚀 Laravel 12 + Inertia.js + React + Modernize Admin Template

This repository is a **Laravel 12** application integrated with **Inertia.js**, **React**, and the **Modernize MUI Admin Template**.
It provides a ready-to-use scaffold for building modern dashboards and admin panels with Laravel as the backend and React (Material UI) as the frontend.

---

## 📦 Features
- Laravel 12 backend with authentication
- Inertia.js for Laravel + React integration
- Modernize MUI React template (Material UI v5)
- Authentication pages (Login, Register, Forgot Password)
- Dashboard layout and widgets
- Multi-language (i18next) support
- Fully customizable theme and components

---

## 🛠 Prerequisites

Before starting, ensure you have installed:
- **PHP** ≥ 8.2
- **Composer** ≥ 2.x
- **Node.js** ≥ 18.x & **npm** ≥ 9.x
- **MySQL** ≥ 8.x (or MariaDB equivalent)
- **Git**

---

## 📥 Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2️⃣ **Install PHP dependencies**
```bash
composer install
```

3️⃣ **Install JavaScript dependencies**
```bash
npm install
```

4️⃣ **Copy `.env` file and configure**
```bash
cp .env.example .env
```
Edit `.env` and set:
```env
APP_NAME="Modernize Dashboard"
APP_URL=http://localhost
APP_ENV=local
APP_DEBUG=true

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=modernize
DB_USERNAME=root
DB_PASSWORD=

# Inertia asset versioning
VITE_APP_NAME="${APP_NAME}"
```

---

## ⚙️ Database Setup

1. **Create database** in MySQL:
```sql
CREATE DATABASE modernize;
```

2. **Run migrations**:
```bash
php artisan migrate
```

3. (Optional) **Seed default data**:
```bash
php artisan db:seed
```

---

## ▶ Running the Project

Open two terminal tabs/windows:

**Terminal 1 – Laravel server:**
```bash
php artisan serve
```
Laravel will run at **http://127.0.0.1:8000**

**Terminal 2 – Vite dev server:**
```bash
npm run dev
```
Vite will run at **http://127.0.0.1:5173**

---

## 🔑 Authentication

- Visit **`/login`** to log in
- Visit **`/register`** to create a new account
- Protected routes (e.g., `/dashboard`) require login

---

## 📂 Folder Structure Highlights

```
resources/
  js/
    Layouts/        → Main React layouts (Modernize)
    Pages/          → Inertia pages (Login, Dashboard, etc.)
    modernize/      → Modernize template assets & components
routes/
  web.php           → Laravel routes
```

---

## 🛠 Build for Production

```bash
npm run build
```
This will generate optimized frontend assets in the `public/build` directory.

---

## 🐛 Troubleshooting

- If **JS imports break after renaming files**, run:
```bash
php artisan optimize:clear
npm run dev
```
- Ensure `.env` values match your local setup
- If assets are not loading, check Vite configuration in `vite.config.js`

---

## 📜 License

This project is licensed under the **MIT License**.
Laravel is a trademark of Taylor Otwell.
