import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Head from "next/head";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <ThemeModeScript mode="light" />
      </Head>
      <body className={inter.className}>
        <main className="flex justify-center flex-col items-center w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
