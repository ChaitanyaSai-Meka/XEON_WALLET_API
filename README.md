# 🛠️ XEON Wallet – API Backend

This is the official **backend API** for [XEON Wallet](https://github.com/ChaitanyaSai-Meka/XEON_WALLET_APP) — a modern mobile wallet app built using **React Native**.

It handles user authentication, rate limiting, database operations, and background tasks with performance and security in mind.

---

## 🧪 Tech Stack

| Feature             | Tech Used                          |
|---------------------|------------------------------------|
| Runtime             | Node.js                            |
| Framework           | Express.js                         |
| Database            | PostgreSQL                         |
| Authentication      | Clerk                              |
| Rate Limiting       | Redis                              |
| Scheduling          | node-cron                          |
| Middleware & CORS   | Custom Express Middleware + CORS   |

---

## ✨ Features

- 🔐 Clerk-based secure authentication
- 💾 PostgreSQL database integration
- ⚡ Redis for rate limiting & caching
- 🕐 Scheduled jobs using Cron
- 🧼 Express middleware architecture
- 🌐 CORS-enabled backend for secure access

---

## 📁 Folder Structure

```plaintext

├── src/
│ ├── config/
│ │ ├── cron.js # Cron job setup
│ │ ├── db.js # PostgreSQL connection
│ │ └── upstash.js # Redis setup via Upstash
│ ├── controllers/
│ │ └── transactionsController.js # Logic for transactions
│ ├── middleware/
│ │ └── rateLimiter.js # Redis rate limiter middleware
│ ├── routes/
│ │ └── transactionsRoutes.js # API routes
│ └── server.js # Main server entry point
├── .env # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
