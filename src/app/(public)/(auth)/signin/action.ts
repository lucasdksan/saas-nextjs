import { redirect } from "next/navigation";
import { signInSchema } from "./schema";

export async function authenticate(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const result = signInSchema.safeParse(data);

    if (!result.success) return { error: "Dados inválidos no servidor" };

    const { email, password } = result.data;
    const isValid = email === "admin@example.com" && password === "123456";

    if (!isValid) {
        return { error: "Credenciais incorretas" };
    }

    redirect("/dashboard");
}
