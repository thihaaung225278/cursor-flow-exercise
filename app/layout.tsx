import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, JetBrains_Mono } from "next/font/google";

import { LocaleProvider } from "@/components/providers/locale-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/*
export const metadata: Metadata = {
  title: "Cursor Meta-Prompt Generator",
  description:
    "Dark, developer-centric waitlist landing page for Cursor Meta-Prompt Generator.",
};
*/

export const metadata: Metadata = {
  title: "Cursor Meta-Prompt Generator",
  description:
    "Precision prompt infrastructure for modern engineering teams building with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
      */}
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/*
        <LocaleProvider>{children}</LocaleProvider>
        */}
        <ClerkProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
