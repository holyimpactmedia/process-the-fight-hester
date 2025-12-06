import type { Metadata } from "next";
import { Inter, Bebas_Neue, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.processthefight.com"),
  title: "Don’t Fight The Process, Process The Fight | Apostle Marlon D. Hester Sr.",
  description: "Transform every struggle into a stepping stone. Discover powerful principles that will help you process through life’s greatest challenges and emerge victorious.",
  keywords: ["Process The Fight", "Apostle Marlon D. Hester Sr.", "Christian Book", "Faith", "Overcoming Challenges", "Spiritual Growth", "Self Help", "Ministry"],
  authors: [{ name: "Apostle Marlon D. Hester Sr." }],
  openGraph: {
    title: "Don’t Fight The Process, Process The Fight",
    description: "Transform every struggle into a stepping stone. Discover powerful principles that will help you process through life’s greatest challenges and emerge victorious.",
    siteName: "Process The Fight",
    images: [
      {
        url: "/images/layer-1.png",
        width: 1200,
        height: 630,
        alt: "Don't Fight The Process, Process The Fight Book Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Don’t Fight The Process, Process The Fight",
    description: "Principles to help you process through life's changes. Order the new book by Apostle Marlon D. Hester Sr.",
    images: ["/images/layer-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
