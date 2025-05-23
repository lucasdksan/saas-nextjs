import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Autenticação",
  description: "Página voltada para autenticação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} antialiased h-screen w-screen`}>
        {children}
      </body>
    </html>
  );
}