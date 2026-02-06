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
    icon: "/favicon.svg"
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
