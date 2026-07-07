import { NextResponse } from "next/server";
import { loginSchema } from "@/features/auth/presentation/schemas/login.schema";
import { AuthDatasourceSupabase } from "@/features/auth/infrastructure/datasources/auth.datasource.supabase";
import { AuthRepositoryImpl } from "@/features/auth/infrastructure/repositories/auth.repository.impl";
import { LoginUseCase } from "@/features/auth/application/use-cases/login.use-case";
import { AppError } from "@/features/core/domain/errors";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate presentation layer input using Zod
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Datos de entrada inválidos",
          details: parsed.error.format()
        },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    // Instantiate Clean Architecture layers
    const datasource = new AuthDatasourceSupabase();
    const repository = new AuthRepositoryImpl(datasource);
    const useCase = new LoginUseCase(repository);

    // Execute usecase
    const user = await useCase.execute(email, password);

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof AppError) {
      let status = 400;
      if (error.code === "UNAUTHORIZED") {
        status = 401;
      } else if (error.code === "NOT_FOUND") {
        status = 404;
      }

      return NextResponse.json(
        { error: error.message, code: error.code, details: error.details },
        { status }
      );
    }

    const message = error instanceof Error ? error.message : "Error interno del servidor";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
