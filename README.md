# DawatDesk — Marketing & Sales Platform

> **"Your Entire Restaurant. One Smart Control Desk."**  
> *Run Your Restaurant. Not Behind It.*

Official marketing, product presentation, and conversion platform for **DawatDesk** — an integrated restaurant POS and operations management SaaS.

---

## 🍽️ About DawatDesk

DawatDesk connects every operational node in a dining establishment into a unified, live-synchronized platform:
- **Floor & Table POS:** Real-time table status grid, floor layout, and instant waiter order punching.
- **Kitchen Display System (KDS):** Paperless kitchen ticket queues with urgency timers and item availability toggling.
- **Billing & Cashier Counter:** 3-click checkout, UPI QR, cash/card tracking, split billing, and GST-ready PDF invoices.
- **Multi-Role Administration:** Compartmentalized permissions for Super Admin, Restaurant Manager, Waiter, Chef, and Cashier.
- **Multi-Branch Command:** Centralized oversight for multi-outlet restaurant chains and franchises.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Lucide Icons
- **Database:** MongoDB Atlas (for demo bookings & contact leads capture)
- **Deployment:** Vercel

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd dawatdesk-marketing
```

### 2. Environment Setup

Create a `.env.local` file from the provided template:

```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:

```env
# MongoDB Atlas Connection URI
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.isrpd3z.mongodb.net/?appName=Cluster0

# MongoDB Database Name
MONGODB_DB=dawatdesk_marketing

# Official Live Application URLs
NEXT_PUBLIC_APP_URL=https://dawatdesk.vercel.app
NEXT_PUBLIC_SITE_URL=https://dawatdesk-marketing.vercel.app
```

> **Security Note:** `.env.local` contains sensitive credentials and is ignored by git. Never commit `.env.local` or any secrets to source control.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the marketing platform.

### 5. Production Build

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
├── public/
│   ├── images/
│   │   ├── brand/           # High-resolution logos & favicons
│   │   └── screenshots/     # Authentic DawatDesk application screenshots
├── src/
│   ├── app/
│   │   ├── api/             # API routes (demo & contact lead capture)
│   │   ├── features/        # Deep-dive module landing pages
│   │   ├── solutions/       # Industry-specific solutions (Cafes, QSR, Fine Dining)
│   │   ├── roles/           # Role-based feature breakdowns
│   │   ├── demo/            # Interactive demo booking flow
│   │   ├── contact/         # Contact & enterprise inquiry flow
│   │   ├── layout.tsx       # Root layout with Navbar & Footer
│   │   └── page.tsx         # High-converting homepage
│   ├── components/          # Reusable UI components (Navbar, Footer, Forms, Logo)
│   └── lib/                 # Utility functions and MongoDB Atlas connection
├── .env.example             # Clean environment variable template
├── .gitignore               # Strict git ignore (excludes secrets & dependencies)
└── package.json
```

---

## 🔒 Security & Privacy

This repository contains only public marketing assets, presentation components, and safe configuration templates. No API secrets, database passwords, or private customer records are stored or tracked in this repository.

---

## 📄 License

Proprietary © DawatDesk. All rights reserved.
