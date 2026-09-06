# DevPulse

Ready-to-deploy Next.js + Tailwind CSS landing page for DevPulse.

## Requirements

- Node.js 18.17+ (Node 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Deploy with the default Next.js settings.
4. Add `NEXT_PUBLIC_SITE_URL` in Vercel environment variables using your final public domain.
5. Redeploy.

The project includes:
- SEO metadata
- `/sitemap.xml`
- `/robots.txt`
- Responsive mobile navigation
- Tailwind CSS
- Lucide icons
- DevPulse tools/pricing/founder/contact sections

## Google indexing

After deployment, submit your sitemap in Google Search Console and request indexing for the homepage. Hosting the site and appearing in Google Search are separate steps; indexing can take time and is not guaranteed immediately.

## Customize

Main landing page:
`app/page.jsx`

Global styling:
`app/globals.css`

SEO:
`app/layout.jsx`

Site URL:
Set `NEXT_PUBLIC_SITE_URL` in your deployment environment.
