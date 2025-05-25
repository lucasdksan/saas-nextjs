import type { Metadata } from "next";
import { AppProvider } from "@toolpad/core/AppProvider";

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
            <AppProvider>
                {children}
            </AppProvider>
        </div>
    );
}