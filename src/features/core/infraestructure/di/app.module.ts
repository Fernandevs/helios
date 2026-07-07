// src/core/di/index.ts
import { container } from "./container";
import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { cache } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

let browserClient: ReturnType<typeof createBrowserClient> | null = null;

// Inicializamos el contenedor pasándole las fábricas desacopladas
container.init({
  supabaseBrowserFactory: () => {
    if (!browserClient) {
      browserClient = createBrowserClient(supabaseUrl, supabaseAnonKey);
    }
    return browserClient;
  },
  
  supabaseServerFactory: cache(async () => {
    const cookieStore = await cookies();
    return createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Ignorado en Server Components
          }
        },
      },
    });
  })
});

export { container };
