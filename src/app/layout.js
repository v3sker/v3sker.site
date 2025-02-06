'use client';

import "./globals.css";
import { useEffect } from "react";
import { inter, geistMono } from "@/lib/fonts";


export default function RootLayout({ children }) {
  useEffect(() => {
    document.title = "v3sker";
  }, []);

  return (
    <html lang="en">
      <body
        className={`min-h-screen ${inter.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
