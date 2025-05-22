type StrategiesValues = "default";
type TypeClassName = { 
    formClass: string; 
    labelClass: string; 
    inputClass: string; 
};
type FormInputProps = {
    title: string;
    htmlFor: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const styleStrategies = {
    default: (newClass?: TypeClassName) =>
        ({ 
            formClassName: `w-full border-none outline-0 ${ newClass?.formClass ?? "" }`,
            labelClassName: `font-roboto not-italic font-normal ${ newClass?.labelClass ?? "" }`,
            inputClassName: `w-full outline-0 font-roboto ${ newClass?.inputClass ?? "" }`,
        })
};

export function createFormInput(strategy: StrategiesValues = "default", newClass?: TypeClassName) {
    const getStyle = styleStrategies[strategy] || styleStrategies.default;

    return function({ htmlFor, title, ...props }: FormInputProps){
        return(
            <div className={getStyle(newClass).formClassName}>
                <label className={getStyle(newClass).labelClassName} htmlFor={htmlFor}>{title}</label>
                <input className={getStyle(newClass).inputClassName} id={htmlFor} {...props} />
            </div>
        );
    }
}  