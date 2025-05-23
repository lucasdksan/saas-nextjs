import { z } from "zod";

export const forgotSchema = z.object({
    email: z.string().email("Email inválido"),
});

export type ForgotSchema = z.infer<typeof forgotSchema>;