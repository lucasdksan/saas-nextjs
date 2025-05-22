import Link from "next/link";

export default function Header() {
    return (
        <header className="container mx-auto w-full">
            <div className="w-full flex justify-between items-center py-2 px-3">
                <div>
                    <span className="font-roboto not-italic font-semibold text-2xl">Wallet</span>
                </div>
                <div>
                    <Link
                        href="/signin"
                        className="font-roboto not-italic text-sm text-center text-[#333333] bg-default-btn rounded-2xl px-2.5 py-1.5"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
}