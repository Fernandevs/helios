"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "../schemas/login.schema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/features/core/presentation/components/ui/card";
import { Input } from "@/features/core/presentation/components/ui/input";
import { Button } from "@/features/core/presentation/components/ui/button";
import { Field, FieldLabel, FieldError, FieldGroup } from "@/features/core/presentation/components/ui/field";

export function LoginForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
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
          <CardTitle className="text-headline-md text-on-surface">Acceso Nominal</CardTitle>
          <CardDescription>Estableciendo conexión segura con el panel principal...</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <Link href="/" className="text-sm font-mono text-primary hover:underline">
            Volver al Inicio -&gt;
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-satellite bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/30 p-6 md:p-8">
      <CardHeader className="mb-6">
        <CardTitle className="text-headline-md text-on-surface font-semibold">Acceso al Sistema</CardTitle>
        <CardDescription>Ingresa tus credenciales para acceder a la cabina de control.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-6">
          <FieldGroup>
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="email" className="text-on-surface-variant font-mono text-xs uppercase tracking-wider">Email</FieldLabel>
              <Input id="email" type="email" placeholder="astronaut@helios.net" aria-invalid={!!errors.email} {...register("email")} className="bg-surface/50 border-outline-variant/30" />
              <FieldError errors={[errors.email]} />
            </Field>
            <Field data-invalid={!!errors.password}>
              <div className="flex justify-between items-center w-full">
                <FieldLabel htmlFor="password" className="text-on-surface-variant font-mono text-xs uppercase tracking-wider">Contraseña</FieldLabel>
                <Link href="/forgot-password" className="text-[11px] font-mono text-primary hover:underline leading-none">¿La olvidaste?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" aria-invalid={!!errors.password} {...register("password")} className="bg-surface/50 border-outline-variant/30" />
              <FieldError errors={[errors.password]} />
            </Field>
          </FieldGroup>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-on-primary font-mono text-xs uppercase tracking-widest py-3 mt-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
            {isSubmitting ? "Autenticando..." : "Iniciar Sesión"}
          </Button>
          <div className="text-center mt-4">
            <Link href="/" className="text-xs font-mono text-on-surface-variant hover:text-on-surface hover:underline">
              Volver al Universo
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
