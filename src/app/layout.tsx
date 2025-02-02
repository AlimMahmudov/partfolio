import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.scss";
import LayoutPage from "@/components/layout/LayoutPage";

const inter = Inter({ subsets: ["latin"] });
// const shalimar = Shalimar({ subsets: ["latin"] });

const manrope = Manrope({
  variable: "--font-manrope", // Добавляем переменную для использования в CSS
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Выбираем нужные толщины (можно изменить)
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
      <body className={`${inter.className} ${manrope.className}`}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
