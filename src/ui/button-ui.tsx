type StrategiesValues = "default" | "form";

const styleStrategies = {
    default: (newClass?: string) =>
        ({ className: `cursor-pointer flex outline-0 border-none ${ newClass ?? "bg-transparent" }` }),
    form: (newClass?: string) =>
        ({ className: `cursor-pointer flex outline-0 border-none w-full bg-default-btn p-2 rounded-sm font-roboto not-italic text-base text-center text-[#333333] flex items-center justify-center ${ newClass ?? "" }` }),
};

export function createButton(strategy: StrategiesValues = "default", newClass?: string) {
    const getStyle = styleStrategies[strategy] || styleStrategies.default;

    return function(props: React.ButtonHTMLAttributes<HTMLButtonElement>){
        return(
            <button {...getStyle(newClass)} {...props}>
                { props.children }
            </button>
        );
    }
}  