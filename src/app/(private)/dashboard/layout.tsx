import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Model dashboard example.",
};

export default function DashboardLayout({
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