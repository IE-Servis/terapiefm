import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { CookieConsent } from "../components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  title: "Psycholog FM",
  description: "Psychologické poradenství a krizová intervence. Profesionální a empatická péče.",
  icons: {
    icon: [
      {
        url: "/favicon_light_16x16.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon_light_32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon_light_64x64.png",
        sizes: "64x64",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon_light_128x128.png",
        sizes: "128x128",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon_dark_16x16.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/favicon_dark_32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/favicon_dark_64x64.png",
        sizes: "64x64",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/favicon_dark_128x128.png",
        sizes: "128x128",
        type: "image/png",
        media: "(prefers-color-scheme: dark)"
      }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ca50da76441d44e0bfea98786b9190c2"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
