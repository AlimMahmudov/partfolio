import type { Metadata } from "next";
import { Inter, Shalimar } from "next/font/google";
import "./globals.scss";
import LayoutPage from "@/components/layout/LayoutPage";

const inter = Inter({ subsets: ["latin"] });
// const shalimar = Shalimar({ subsets: ["latin"] });

const shalimar = Shalimar({
  variable: "--font-shalimar", // Название переменной соответствует шрифту
  subsets: ["latin"],
  weight: ["400"], // Убедись, что Shalimar поддерживает эти толщины
});

export const metadata: Metadata = {
  title: "AlimMah | Frontend Developer",
  description:
    "I am an experienced front-end developer with deep knowledge and skills in HTML, CSS, JavaScript, TypeScript coding and programming, as well as working with libraries and frameworks such as React, Redux and Next.js.",
  keywords: "Frontend Developer,Alim Mahmudov,Alim, AlimMah, Alim Developer ",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${shalimar.className}`}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
