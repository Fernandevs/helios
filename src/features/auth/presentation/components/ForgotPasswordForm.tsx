"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, ForgotPasswordInput } from "../schemas/forgot-password.schema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/features/core/presentation/components/ui/card";
import { Input } from "@/features/core/presentation/components/ui/input";
import { Button } from "@/features/core/presentation/components/ui/button";
import { Field, FieldLabel, FieldError, FieldGroup } from "@/features/core/presentation/components/ui/field";

export function ForgotPasswordForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccess(true);
  };

  if (success) {
    return (
      <Card className="card-satellite bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/30 text-center p-8">
        <CardHeader className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold animate-pulse">✓</div>
          <CardTitle className="text-headline-md text-on-surface">Transmisión Exitosa</CardTitle>
          <CardDescription>Enlace de recuperación enviado. Por favor verifica tu bandeja de entrada.</CardDescription>
        </CardHeader>
        <CardContent className="mt-4 flex flex-col gap-3">
          <Link href="/login" className="text-sm font-mono text-primary hover:underline">
            Volver a iniciar sesión
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-satellite bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/30 p-6 md:p-8">
      <CardHeader className="mb-6">
        <CardTitle className="text-headline-md text-on-surface font-semibold">Recuperar Contraseña</CardTitle>
        <CardDescription>Ingresa tu correo para recibir un enlace de recuperación.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-6">
          <FieldGroup>
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="email" className="text-on-surface-variant font-mono text-xs uppercase tracking-wider">Email</FieldLabel>
              <Input id="email" type="email" placeholder="astronaut@helios.net" aria-invalid={!!errors.email} {...register("email")} className="bg-surface/50 border-outline-variant/30" />
              <FieldError errors={[errors.email]} />
            </Field>
          </FieldGroup>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-on-primary font-mono text-xs uppercase tracking-widest py-3 mt-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
            {isSubmitting ? "Enviando..." : "Enviar Enlace"}
          </Button>
          <div className="text-center mt-4">
            <Link href="/login" className="text-xs font-mono text-on-surface-variant hover:text-on-surface hover:underline">
              Volver a Iniciar Sesión
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
