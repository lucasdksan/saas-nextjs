"use client"

import { authenticate } from "./action";
import { useForm } from "react-hook-form";
import { signInSchema, SignInSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormInput } from "@/ui/form-input-ui";
import { createButton } from "@/ui/button-ui";
import { startTransition, useActionState } from "react";

export default function Singin() {
    const [serverState, formAction] = useActionState(authenticate, null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
    });
    const FormInput = createFormInput("default");
    const Button = createButton("default");
    const onSubmit = async (data: SignInSchema) => {
        const formData = new FormData();

        formData.append('email', data.email);
        formData.append('password', data.password);

        startTransition(() => {
            formAction(formData);
        });
    };

    return (
        <div>
            <h1>SaaS Template</h1>
            <span>Acesse sua Conta</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <FormInput
                        htmlFor="email"
                        title="E-mail"
                        type="email"
                        placeholder="Email"
                        {...register('email')}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    <FormInput
                        htmlFor="password"
                        title="Senha"
                        type="password"
                        placeholder="Senha"
                        {...register('password')}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </fieldset>
                {serverState?.error && (
                    <p style={{ color: 'red', marginBottom: 5 }}>{serverState.error}</p>
                )}
                <Button type="submit">Entrar</Button>
            </form>
        </div>
    );
}