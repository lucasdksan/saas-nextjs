import { z } from "zod";

export const registerSchema = z
    .object({
        email: z.string().email("E-mail inválido"),
        fullName: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
        password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
        confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas não coincidem",
    });

export type RegisterSchema = z.infer<typeof registerSchema>;
