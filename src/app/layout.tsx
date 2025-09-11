import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIDIGI - AI Platform for Public Administration",
  description: "AIDIGI leverages advanced AI technologies to digitize and automate public administrative procedures. Transform your government services with responsible AI.",
  keywords: "AI, Public Administration, Government Technology, Vietnam, Digital Transformation, Administrative Automation",
  authors: [{ name: "AIDIGI Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
