import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/features/auth/presentation/components/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Recuperar Contraseña | Helios",
  description: "Ingresa tu correo para recibir un enlace de recuperación.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
