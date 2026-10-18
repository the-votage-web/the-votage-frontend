import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "@/components/Providers";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";

// Inter font for primary body typography
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Poppins font (self-hosted - avoids render-blocking external Google Fonts link)
const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

// Local Copperplate fonts
const copperplateBold = localFont({
  src: "../public/font/fonnts.com-Copperplate-Bol-.otf",
  variable: "--font-copperplate-bold",
});

const copperplateMedium = localFont({
  src: "../public/font/fonnts.com-Copperplate-Med-.otf",
  variable: "--font-copperplate-medium",
});

const copperplateLight = localFont({
  src: "../public/font/fonnts.com-Copperplate-Lig-.otf",
  variable: "--font-copperplate-light",
});

const copperplateCondensedMedium = localFont({
  src: "../public/font/fonnts.com-Copperplate-Con-Med-.otf",
  variable: "--font-copperplate-condensed-medium",
});

const copperplateCondensedBold = localFont({
  src: "../public/font/fonnts.com-Copperplate-Con-Bol-.otf",
  variable: "--font-copperplate-condensed-bold",
});

const copperplateCondensedLight = localFont({
  src: "../public/font/fonnts.com-Copperplate-Con-Lig-.otf",
  variable: "--font-copperplate-condensed-light",
});

export const metadata: Metadata = {
  title: "Welcome to The Votage",
  description: "We are the Voice of this age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className={`${inter.variable} ${poppins.variable} ${copperplateBold.variable} ${copperplateMedium.variable} ${copperplateLight.variable} ${copperplateCondensedMedium.variable} ${copperplateCondensedBold.variable} ${copperplateCondensedLight.variable} antialiased overflow-x-clip font-sans`}
      >
        <Providers>{children}</Providers>
        <ChatWidget />
      </body>
    </html>
  );
}
