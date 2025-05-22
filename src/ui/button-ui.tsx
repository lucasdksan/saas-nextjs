type StrategiesValues = "default";

const styleStrategies = {
    default: (newClass?: string) =>
        ({ className: `cursor-pointer flex outline-0 border-none ${ newClass ?? "bg-transparent" }` }),
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