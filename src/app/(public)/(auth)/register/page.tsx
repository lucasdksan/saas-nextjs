"use client"

import Link from "next/link";
import { startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAction } from "./action";
import { RegisterSchema, registerSchema } from "./schema";
import { createFormInput } from "@/ui/form-input-ui";
import { createButton } from "@/ui/button-ui";

export default function Register() {
    const [serverState, formAction] = useActionState(registerAction, null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
    });
    const FormInput = createFormInput("form");
    const Button = createButton("form", "mt-4 mb-2");
    const onSubmit = async (data: RegisterSchema) => {
        const formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("fullName", data.fullName);
        formData.append("confirmPassword", data.confirmPassword);

        startTransition(() => {
            formAction(formData);
        });
    };

    return (
        <div className="p-8 h-full w-full flex flex-col gap-5">
            <h1 className="text-3xl font-roboto font-bold text-gray-200">SaaS Template</h1>
            <span className="font-roboto text-xl font-bold text-gray-200">Cadastre-se gratuitamente</span>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-auto">
                <fieldset className="w-full h-auto flex flex-col gap-6">
                    <FormInput
                        htmlFor="fullName"
                        title="Nome Completo"
                        type="text"
                        placeholder="Nome Completo"
                        {...register("fullName")}
                    />
                    {errors.fullName && <p className="text-sm text-danger-base">{errors.fullName.message}</p>}
                    <FormInput
                        htmlFor="email"
                        title="E-mail"
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-sm text-danger-base">{errors.email.message}</p>}
                    <FormInput
                        htmlFor="password"
                        title="Senha"
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                    />
                    {errors.password && <p className="text-sm text-danger-base">{errors.password.message}</p>}
                    <FormInput
                        htmlFor="confirmPassword"
                        title="Confirme sua senha"
                        type="password"
                        placeholder="Confirme sua senha"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && <p className="text-sm text-danger-base">{errors.confirmPassword.message}</p>}
                </fieldset>
                {serverState?.error && (
                    <p className="text-sm text-danger-base" style={{ marginBottom: 5 }}>{serverState.error}</p>
                )}
                <Button type="submit">Cadastrar-se gratuitamente</Button>
                <div className="mb-6 mt-16 h-[2px] w-full bg-gray-200 max-md:mt-12" />
            </form>
            <div className="flex flex-col w-full gap-1 rounded-md border border-[#121212] bg-[#121212] px-6 py-4 transition hover:brightness-125">
                <span className="text-gray-200">Já possui uma conta?</span>
                <Link className="text-[#F8D57E] font-bold" href="/signin">Entre na plataforma</Link>
            </div>
        </div>
    );
}