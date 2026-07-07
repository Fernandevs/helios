import type { Metadata } from "next";
import { UpdatePasswordForm } from "@/features/auth/presentation/components/UpdatePasswordForm";

export const metadata: Metadata = {
  title: "Actualizar Contraseña | Helios",
  description: "Ingresa tu nueva contraseña para reconfigurar tu acceso.",
};

export default function UpdatePasswordPage() {
  return <UpdatePasswordForm />;
}
