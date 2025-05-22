type SectionProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Section(props: SectionProps){
    return(
        <section className={`container mx-auto w-full h-auto ${props.className}`}>
            { props.children }
        </section>
    );
}