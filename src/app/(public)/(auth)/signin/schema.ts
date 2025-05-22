import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string({ required_error: "Senha necessária" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;