# Zashub — Discover Your City. Connect Locally.

![Zashub Platform](https://zashub.vercel.app/og-image.png)

> **Zashub** is a modern local community platform where people can discover places, events, businesses, services, jobs, local updates, and connect with their hometown community through a beautiful and fast experience.
>
> ⚡ **Powered by Zashly**

---

## ⚡ Primary Brand & Tagline

- **Application Name:** Zashub
- **Brand Name:** Zashub
- **Tagline:** *Discover Your City. Connect Locally.*
- **Footer Badge:** `⚡ Powered by Zashly`
- **Official Domain:** [zashub.com](https://zashub.vercel.app)

---

## 🚀 Features

- 📍 **Hyperlocal Places & Directories:** Discover neighborhood businesses, places, jobs, and local service providers.
- 📅 **Events & Gatherings:** Stay updated on neighborhood events, cultural festivals, sports, and meetups.
- 🤝 **Community Feed & Groups:** Join public or private local communities, share updates, and interact with neighbors.
- 💬 **Real-Time Messaging:** Socket.IO powered 1-on-1 direct messages and community group chats.
- 🗺️ **3D Interactive Heatmap & Globe:** Visual representation of thriving local communities around the world.
- 🔐 **Enterprise Authentication:** Dual authentication with JWT stateless tokens (HTTP-Only Refresh Tokens) and Google OAuth SSO.
- ⚡ **SEO & Accessibility Optimized:** Dynamic sitemaps, structured JSON-LD schemas (`WebSite`, `WebApplication`, `Organization`, `SoftwareApplication`), canonical URLs, preconnect hints, 100-target Lighthouse standards.

---

## 🛠️ Technology Stack

- **Frontend:** Next.js 15 (App Router), TypeScript, React 19, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend:** Node.js, Express.js, Socket.IO, TypeScript, Mongoose ODM
- **Database:** MongoDB Atlas Cloud Database (`zashub`)
- **Storage:** Cloudinary CDN (`folder: zashub`)
- **Deployment:** Vercel (Client Layer) & Dedicated Server (Realtime Socket.IO Layer)

---

## 📁 Repository Structure

```
.
├── app/                  # Next.js App Router (Layouts, Marketing, Dashboard, Auth, API Routes)
│   ├── (auth)/           # Login, Register, Forgot Password pages
│   ├── (dashboard)/      # Feed, Communities, Events, Messages, Notifications, Settings
│   ├── (marketing)/      # Landing Page & About Page (/about)
│   ├── layout.tsx        # Root layout with SEO Metadata & JSON-LD Schemas
│   ├── sitemap.ts        # Dynamic XML Sitemap generator
│   ├── robots.ts         # Robots.txt generator
│   └── manifest.ts       # PWA Web Application Manifest
├── components/           # UI Components, Global Layouts, SEO Helpers
│   ├── seo/              # JsonLdSchema structured data components
│   ├── layout/           # GlobalSearch component
│   └── ui/               # Reusable design components
├── server/               # Express REST API & WebSocket server
│   ├── src/config/       # MongoDB, Cloudinary, Passport, JWT Configs
│   ├── src/controllers/  # API Controllers (Auth, User, Community, Post, Event, Upload)
│   └── src/models/       # Mongoose Schemas (User, Community, Post, Event, Message)
└── public/               # Static assets & icons
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js >= 18
- npm or yarn
- MongoDB Atlas cluster connection string

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server && npm install && cd ..
```

### 3. Environment Variables
Create `.env.local` in root:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

Create `server/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://zashub_db_user:<password>@cluster0.xxxx.mongodb.net/zashub?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
REFRESH_TOKEN_SECRET=your_refresh_token_secret_key
FRONTEND_URL=http://localhost:3000
```

### 4. Run Locally
```bash
npm run dev
```

---

## 🛡️ License & Branding

© 2026 **Zashub**. All rights reserved.

⚡ **Powered by Zashly** — [https://zashly.com](https://zashly.com)
