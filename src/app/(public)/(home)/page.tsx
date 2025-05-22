import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Section from "@/components/section";
import Footer from "@/components/footer";
import { _cards } from "@/utils/_cards";
import { _company } from "@/utils/_company";

export default function Home() {
    return(
        <>
            <Header />
            <main className="mt-8">
                <Section>
                    <div className="flex flex-col py-2 px-3 gap-6">
                        <div className="flex flex-col items-center gap-4">
                            <h1 className="font-roboto not-italic font-semibold text-3xl text-center text-white">SaaS template to study about Nextjs</h1>
                            <p className="font-roboto not-italic text-lg text-center text-white">This is a SaaS template, Here you have a fully structured model system</p>
                            <Link href="/" className="font-roboto not-italic text-base text-center text-[#333333] bg-default-btn rounded-2xl px-4 py-2">Github Link</Link>
                        </div>
                        <div className="w-full h-auto">
                            <Image
                                className="h-auto w-full object-cover"
                                src="/meetingTeam.jpg"
                                alt="Main banner"
                                width={300}
                                height={168}
                            />
                        </div>
                    </div>
                </Section>
                <Section className="mt-8">
                    <div className="w-full h-auto border-1 border-x-0 border-y-white py-6 px-3 flex justify-center flex-wrap gap-2">
                        { _company.map((company, index) => (
                            <div key={index} className="bg-default-btn rounded-2xl px-4 py-2 flex items-center justify-center">
                                <span className="font-roboto not-italic text-base font-bold text-center text-[#333333]">{company.name}</span>
                            </div>
                        )) }
                    </div>
                </Section>
                <Section className="mt-8">
                    <div className="w-full h-auto">
                        <Image 
                            className="h-auto w-full object-cover"
                            src="/dashboardImage.png"
                            alt="Banner dashboard"
                            width={335}
                            height={180}
                        />
                    </div>
                </Section>
                <Section className="mt-10">
                    <div className="w-full h-auto py-6 px-3 flex flex-col items-center justify-center gap-8">
                        { _cards.map((card, index) => (
                            <div className="flex flex-col items-center justify-center gap-3" key={index}>
                                <Image
                                    src={`/${card.url}`}
                                    alt={`Icon by ${card.title}`}
                                    width={70}
                                    height={70}
                                />
                                <span className="font-roboto not-italic font-semibold text-xl text-center text-white">{card.title}</span>
                                <p className="font-roboto not-italic text-lg text-white text-center max-w-52">{card.description}</p>
                            </div>
                        )) }
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}