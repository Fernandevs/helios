"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePasswordSchema, UpdatePasswordInput } from "../schemas/update-password.schema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/features/core/presentation/components/ui/card";
import { Input } from "@/features/core/presentation/components/ui/input";
import { Button } from "@/features/core/presentation/components/ui/button";
import { Field, FieldLabel, FieldError, FieldGroup } from "@/features/core/presentation/components/ui/field";

export function UpdatePasswordForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdatePasswordInput>({
    resolver: zodResolver(updatePasswordSchema),
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
          <CardTitle className="text-headline-md text-on-surface">Contraseña Actualizada</CardTitle>
          <CardDescription>Tu acceso ha sido reconfigurado con éxito. Ya puedes iniciar sesión.</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <Link href="/login" className="text-sm font-mono text-primary hover:underline">
            Iniciar Sesión -&gt;
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-satellite bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/30 p-6 md:p-8">
      <CardHeader className="mb-6">
        <CardTitle className="text-headline-md text-on-surface font-semibold">Actualizar Contraseña</CardTitle>
        <CardDescription>Ingresa tu nueva contraseña para reconfigurar tu acceso.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-6">
          <FieldGroup>
            <Field data-invalid={!!errors.password}>
              <FieldLabel htmlFor="password" className="text-on-surface-variant font-mono text-xs uppercase tracking-wider">Nueva Contraseña</FieldLabel>
              <Input id="password" type="password" placeholder="••••••••" aria-invalid={!!errors.password} {...register("password")} className="bg-surface/50 border-outline-variant/30" />
              <FieldError errors={[errors.password]} />
            </Field>
            <Field data-invalid={!!errors.confirmPassword}>
              <FieldLabel htmlFor="confirmPassword" className="text-on-surface-variant font-mono text-xs uppercase tracking-wider">Confirmar Contraseña</FieldLabel>
              <Input id="confirmPassword" type="password" placeholder="••••••••" aria-invalid={!!errors.confirmPassword} {...register("confirmPassword")} className="bg-surface/50 border-outline-variant/30" />
              <FieldError errors={[errors.confirmPassword]} />
            </Field>
          </FieldGroup>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-on-primary font-mono text-xs uppercase tracking-widest py-3 mt-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
            {isSubmitting ? "Guardando..." : "Guardar Cambios"}
          </Button>
          <div className="text-center mt-4">
            <Link href="/login" className="text-xs font-mono text-on-surface-variant hover:text-on-surface hover:underline">
              Cancelar
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
