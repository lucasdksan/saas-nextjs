"use client"

import { startTransition, useActionState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgotSchema, ForgotSchema } from "./schema";
import { forgotAction } from "./action";
import { createFormInput } from "@/ui/form-input-ui";
import { createButton } from "@/ui/button-ui";
import Link from "next/link";

export default function Forgot() {
    const [serverState, formAction] = useActionState(forgotAction, null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotSchema>({
        resolver: zodResolver(forgotSchema),
    });
    const FormInput = createFormInput("form", { labelClass: "text-white", formClass: "", inputClass: "text-white" });
    const Button = createButton("form", "mt-4 mb-2");
    const onSubmit = async (data: ForgotSchema) => {
        const formData = new FormData();

        formData.append("email", data.email);

        startTransition(() => {
            formAction(formData);
        });
    };

    return (
        <div className="p-8 h-full w-full flex flex-col gap-5">
            <h1 className="text-3xl font-roboto font-bold text-gray-200">SaaS Template</h1>
            <span className="font-roboto text-xl font-bold text-gray-200">Esqueci minha senha</span>
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
                </fieldset>
                {serverState?.error && (
                    <p className="text-sm text-danger-base" style={{ marginBottom: 5 }}>{serverState.error}</p>
                )}
                <Button type="submit">Recuperar minha senha</Button>
                <Link href="/signin" className="text-sm font-medium text-[#F8D57E] transition">Voltar para o login</Link>
            </form>
        </div>
    );
}