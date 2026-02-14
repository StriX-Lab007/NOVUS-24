import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOVUS'24 | Build the Future in 24 Hours",
  description:
    "NOVUS'24 is a 24-hour hackathon at Malla Reddy University, Hyderabad. Join 500+ developers for an immersive cyber-journey of building, mentorship, and innovation. March 7, 2026.",
  keywords: ["hackathon", "NOVUS", "coding", "Hyderabad", "2026", "tech event"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} font-[family-name:var(--font-space-grotesk)] antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
