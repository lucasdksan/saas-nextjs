import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "SaaS Template",
  description: "Um template simples de SaaS com foco maior sobre o estudo do Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}