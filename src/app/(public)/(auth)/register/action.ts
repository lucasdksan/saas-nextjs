import { registerSchema } from "./schema";

export async function registerAction(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        fullName: formData.get("fullName"),
        confirmPassword: formData.get("confirmPassword"),
        password: formData.get("password"),
    };

    const result = registerSchema.safeParse(data);

    if (!result.success) return { error: "Dados inválidos no servidor" };

    const { email, password } = result.data;
    const isValid = email === "admin@example.com" && password === "123456";

    if (!isValid) {
        return { error: "Credenciais incorretas" };
    }
}