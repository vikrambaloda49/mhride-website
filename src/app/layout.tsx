import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MHride",
  description: "MHride | Affordable Rideshare in Medicine Hat & Area",
  icons: {
    icon: "/assets/logo/icon.svg", // your logo path in /public
    shortcut: "/assets/logo/icon.svg",
    apple: "/assets/logo/icon.svg",
  },
  openGraph: {
    title: "MHride | Affordable Rideshare in Medicine Hat & Area",
    description:
      "Ride safely and affordably with MHride — Medicine Hat’s local rideshare service. Rides start at just $2.50.",
    url: "https://mhride.ca",
    siteName: "MHride",
    images: [
      {
        url: "/assets/logo/logo.svg",
        width: 512,
        height: 512,
        alt: "MHride Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MHride | Affordable Rideshare in Medicine Hat & Area",
    description:
      "Affordable rideshare in Medicine Hat, Redcliff, and Dunmore. Rides starting at just $2.50.",
    images: ["/assets/logo/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
