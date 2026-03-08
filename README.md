# Green Flag – Verdentix (RWP Platform)

Next.js + React + Tailwind CSS rebuild of the Verdentix Webflow template, integrated with Payload CMS and deployable to Vercel for the RWP platform.

## Stack

- **Next.js 15** (App Router)
- **React 18**
- **Tailwind CSS 4**
- **Payload CMS 3** (MongoDB)
- **Vercel** deployment

## Design Tokens (Verdentix)

Design tokens from the Webflow export are applied in `src/app/globals.css`:

- **Font**: Manrope
- **Brand primary**: `#2a8123`
- **Brand secondary**: `#f5f3f0`
- **Foreground**: `#1e1e1e`
- **Typography scale**: H1 4rem → H6 1.125rem
- **Spacing**: 8px → 80px scale
- **Radius**: 4px → 32px scale

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env` and set:

```bash
cp .env.example .env
```

- `PAYLOAD_SECRET` – Required. Use a strong random string in production.
- `DATABASE_URI` – MongoDB connection string (local or Atlas).
- `RESEND_API_KEY` – Required for the enquiry form. Get a key at [resend.com](https://resend.com). Enquiries are sent to **gerard@greenflag.tech**.

### 3. Run locally

```bash
npm run dev
```

- **Site**: [http://localhost:3000](http://localhost:3000)
- **Payload Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

Create the first user when you open `/admin`.

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public site
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (payload)/           # Payload admin & API
│   │   ├── admin/
│   │   ├── api/
│   │   └── layout.tsx
│   ├── globals.css
│   └── layout.tsx
├── collections/             # Payload collections
│   ├── Pages.ts
│   ├── CaseStudies.ts
│   ├── Services.ts
│   ├── Testimonials.ts
│   ├── Media.ts
│   └── Users.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Work.tsx
│       ├── Services.tsx
│       ├── Benefits.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
└── payload.config.ts
```

## Payload Collections (RWP-ready)

- **Pages** – Hero, content, slug
- **Case Studies** – Title, location, year, image, excerpt
- **Services** – Title, description, order
- **Testimonials** – Quote, author, role
- **Media** – Uploads (images)
- **Users** – Auth

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Add environment variables:
   - `PAYLOAD_SECRET`
   - `DATABASE_URI` (e.g. MongoDB Atlas)

For production, use MongoDB Atlas or another hosted MongoDB and set `DATABASE_URI` accordingly.

## Verdentix Template Note

The original Verdentix HTML template is referenced via macOS aliases (pointing to Google Drive). The design tokens and structure match the Verdant/Verdentix architecture template. To fully match the original export:

1. Copy the actual HTML and `*_files` folder from Webflow/Google Drive into the project.
2. Map each section to the existing React components and adjust layout/styling as needed.
