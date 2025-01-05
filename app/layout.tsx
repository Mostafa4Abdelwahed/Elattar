import type { Metadata } from "next";
import { Tajawal as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/assets/css/style.css";
import "./globals.css";
import { Main } from "@/components/craft";
import { cn } from "@/lib/utils";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/navbar";
import Script from "next/script";

const fontSans = FontSans({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "دكتور احمد العطار استشاري جراحة العظام",
  description: "دكتور العطار استشاري العظام و العمود الفقري",
};

// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <Navbar />
        <Main>{children}</Main>
        <Footer />
        {/* </ThemeProvider> */}
        <Script src="../assets/js/vendor/bootstrap.bundle.min.js" />
        <Script src="../assets/js/vendor/jquery.min.js" />
        <Script src="../assets/js/vendor/swiper-bundle.min.js" />
        <Script src="../assets/js/script.js" />
        <Script src="../assets/js/swiper-script.js" />
        <Script src="../assets/js/submit-form.js" />
        <Script src="../assets/js/vendor/isotope.pkgd.min.js" />
        <Script src="../assets/js/vendor/fslightbox.js" />
        <Script src="../assets/js/masonry.js" />

        <Analytics />
      </body>
    </html>
  );
}
