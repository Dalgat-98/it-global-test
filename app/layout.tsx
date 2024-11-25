import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const getInter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const getMontserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const getOpenSans = localFont({
  src: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "It Global - test",
  description: "It Global - test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getInter.variable} ${getMontserrat.variable} ${getOpenSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
