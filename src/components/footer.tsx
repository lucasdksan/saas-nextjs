export default function Footer(){
    return(
        <footer className="w-full h-auto">
            <div className="w-full h-auto flex items-center justify-center py-2 px-4">
                <span className="font-roboto font-semibold not-italic text-white text-sm text-center">
                    © SaaS Template { new Date().getFullYear() }
                </span>
            </div>
        </footer>
    );
}