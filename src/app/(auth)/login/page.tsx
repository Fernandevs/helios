import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/presentation/components/LoginForm";

export const metadata: Metadata = {
  title: "Acceso al Sistema | Helios",
  description: "Ingresa tus credenciales para acceder a la cabina de control.",
};

export default function LoginPage() {
  return <LoginForm />;
}
