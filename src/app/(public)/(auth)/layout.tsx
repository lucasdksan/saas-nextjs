import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticação",
  description: "Página voltada para autenticação",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-screen w-screen`}>
      {children}
    </div>
  );
}