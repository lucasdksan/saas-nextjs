import {z} from "zod";

export const envSchema = z.object({
    NEXT_PUBLIC_JSON_SERVER: z.string(),
    NEXT_PUBLIC_AUTH_TOKEN: z.string(),
});

export type EnvSchema = z.infer<typeof envSchema>;

export const _env = ()=> {
    const envProcess = process.env;
    const result = envSchema.safeParse(envProcess);

    if(!result.success) return {
        NEXT_PUBLIC_JSON_SERVER: "",
        NEXT_PUBLIC_AUTH_TOKEN: "",
    };

    return result.data;
}