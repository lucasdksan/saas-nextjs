type TemplateProps = {
    children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
    return (
        <main className="w-full h-full flex flex-col">
            <div className="hidden"></div>
            <div className="w-full h-full">
                { children }
            </div>
        </main>
    );
}