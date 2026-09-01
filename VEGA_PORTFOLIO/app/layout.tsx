import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "April Justine Vega | Software Developer",
  description: "Portfolio of April Justine C. Vega — Backend Developer and Integration Consultant."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}