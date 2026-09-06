import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "DevPulse — AI-Powered Developer Productivity Suite",
  description:
    "DevPulse helps developers automate coding workflows with AI-powered optimization, regex and cron generation, JSON tooling, and Git command assistance.",
  keywords: [
    "DevPulse",
    "developer tools",
    "AI developer tools",
    "code optimizer",
    "regex generator",
    "cron generator",
    "JSON formatter",
    "Git helper"
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "DevPulse — AI-Powered Developer Productivity Suite",
    description:
      "Supercharge your developer workflow with practical AI automation tools.",
    url: siteUrl,
    siteName: "DevPulse",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
