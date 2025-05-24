import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Template",
  description: "Um template simples de SaaS com foco maior sobre o estudo do Nextjs",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased h-screen w-screen`}
    >
      {children}
    </div>
  );
}