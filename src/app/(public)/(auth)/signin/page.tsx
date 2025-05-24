"use client"

import { authenticate } from "./action";
import { startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { signInSchema, SignInSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormInput } from "@/ui/form-input-ui";
import { createButton } from "@/ui/button-ui";
import Link from "next/link";

export default function Singin() {
    const [serverState, formAction] = useActionState(authenticate, null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
    });
    const FormInput = createFormInput("form", { labelClass: "text-white", formClass: "", inputClass: "text-white" });
    const Button = createButton("form", "mt-4 mb-2");
    const onSubmit = async (data: SignInSchema) => {
        const formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password);

        startTransition(() => {
            formAction(formData);
        });
    };

    return (
        <div className="p-8 h-full w-full flex flex-col gap-5">
            <h1 className="text-3xl font-roboto font-bold text-gray-200">SaaS Template</h1>
            <span className="font-roboto text-xl font-bold text-gray-200">Acesse sua Conta</span>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-auto">
                <fieldset className="w-full h-auto flex flex-col gap-6">
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
                </fieldset>
                {serverState?.error && (
                    <p className="text-sm text-danger-base" style={{ marginBottom: 5 }}>{serverState.error}</p>
                )}
                <Button type="submit">Entrar</Button>
                <Link href="/forgot" className="text-sm font-medium text-[#F8D57E] transition">Esqueci minha senha</Link>
                <div className="mb-6 mt-16 h-[2px] w-full bg-gray-200 max-md:mt-12" />
            </form>
            <div className="flex flex-col w-full gap-1 rounded-md border border-[#121212] bg-[#121212] px-6 py-4 transition hover:brightness-125">
                <span className="text-gray-200">Não tem uma conta?</span>
                <Link className="text-[#F8D57E] font-bold" href="/register">Crie sua conta grátis</Link>
            </div>
        </div>
    );
}