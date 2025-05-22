type TemplateProps = {
    children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
    return (
        <main>
            <div className="hidden"></div>
            <div>
                { children }
            </div>
        </main>
    );
}