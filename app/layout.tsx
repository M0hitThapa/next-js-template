import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marketing Template",
  description:
    "A marketing template for ai saas using the modern tech like next js , tailwind css and motion for react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased `}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
