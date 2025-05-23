import { forgotSchema } from "./schema";

export async function forgotAction(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
    };
    const result = forgotSchema.safeParse(data);

    if (!result.success) return { error: "Dados inválidos no servidor" };

    const { email } = result.data;
}