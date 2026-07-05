<!-- BEGIN:nextjs-agent-rules -->
# Agent Instructions & Project Architecture Guardrails

Este documento define las reglas estrictas de arquitectura, diseño y desarrollo para este proyecto Fullstack en Next.js. Cualquier agente de IA que trabaje en este repositorio debe leer, comprender y adherirse estrictamente a estas directrices. **No se permiten excepciones.**

---

## 1. Filosofía del Proyecto y Arquitectura

El proyecto utiliza una aproximación de **Feature-First Clean Architecture** con influencias de Domain-Driven Design (DDD) adaptado al ecosistema de Next.js. El código se organiza por características funcionales (features), y cada feature se divide internamente en capas independientes para garantizar desacoplamiento, robustez ante cambios, testabilidad y escalabilidad.

### Estructura de Directorios Mandatoria

src/
├── app/                          # Capa de Ruteo y Entrega (Next.js App Router)
│   ├── layout.tsx                # Layout global de la aplicación
│   ├── page.tsx                  # Home Page (Compuesta mediante importaciones de features)
│   └── api/                      # Route Handlers (Para endpoints internos tradicionales)
├── core/                         # Capa Transversal Compartida (Shared Kernel)
│   ├── adapters/                 # Wrappers y adaptadores globales de infraestructura
│   └── theme/                    # Estilos globales, tokens de UI y configuración visual
└── features/                     # Características del dominio (Vertical Slices)
    ├── [feature-name]/           # Ejemplo: projects, experience, profile, blog
    │   ├── domain/               # Capa de Dominio (Reglas de negocio puras, Interfaces, Tipos)
    │   │   ├── entities/         # Modelos de datos puros (Tipos o Interfaces de TypeScript)
    │   │   └── repositories/     # Contratos/Interfaces abstractas para la obtención de datos
    │   ├── infrastructure/       # Capa de Infraestructura (Implementaciones técnicas concretas)
    │   │   ├── adapters/         # Clientes/Wrappers específicos para esta característica
    │   │   └── repositories/     # Implementación real de los repositorios (fetch, CMS, SDKs)
    │   └── presentation/         # Capa de Presentación (Componentes visuales puros)
    │       ├── components/       # Componentes atómicos y específicos de la feature
    │       └── containers/       # Componentes de composición (unión de piezas visuales)

---

## 2. Reglas de la Capa de Presentación (Componentes Visuales "Tontos")

* **Lógica Cero:** Los componentes visuales ubicados en `presentation/` deben ser completamente abstractos y "tontos". Su única responsabilidad es renderizar datos a través de `props` y emitir eventos mediante callbacks tradicionales (`onClick`, `onChange`, `onSubmit`).
* **Prohibido el Data Fetching Directo:** Ningún componente visual dentro de `presentation/components` o `presentation/containers` puede realizar llamadas `fetch`, Axios, GraphQL, ni invocar directamente hooks de mutación o query de librerías de terceros.
* **Límite de Líneas Estricto e Inquebrantable:**
  * Ningún componente o archivo de renderizado visual puede superar las **100 líneas de código**.
  * Bajo condiciones excepcionales justificables (como renderizado gráfico muy complejo o manipulación pesada de SVGs/Canvas), el límite absoluto es de **150 líneas**.
  * Si un componente supera las 100 líneas en su desarrollo, **es obligatorio** fragmentarlo mediante componibilidad, abstrayendo secciones lógicas en subcomponentes más pequeños.
* **Composición sobre Monolitos:** Las páginas dentro del directorio `src/app/` no deben albergar marcado HTML/JSX extenso. Su función debe limitarse a invocar estructuradamente a los *Containers* o *Components* de las features pertinentes.

---

## 3. Restricciones Técnicas y Buenas Prácticas de Next.js

### Prohibición Absoluta de Server Actions
* **Queda estrictamente prohibido el uso de Next.js Server Actions (`"use server"` a nivel de función o de archivo para mutaciones/peticiones directas).**
* Para el data fetching del lado del servidor (SSR), se deben aprovechar las capacidades nativas del App Router directamente en los Server Components de la capa `app/`, invocando los repositorios abstractos de la capa de infraestructura.
* Para mutaciones o interacciones complejas desde el cliente, se deben emplear Route Handlers estándar de Next.js (`src/app/api/`) para intermediar con servicios externos de manera segura.

### Limpieza de Importaciones (Zero Waste Imports)
* Está estrictamente prohibido dejar importaciones huérfanas, duplicadas o no utilizadas en ningún archivo del proyecto.
* Cada vez que un agente genere o modifique código, debe realizar una depuración exhaustiva de los `imports`.
* Se debe priorizar de manera obligatoria el uso de rutas absolutas mediante el alias configurado `@/*`.

### Priorización de SSR y SEO
* Dado que el proyecto corresponde a un portafolio profesional de desarrollo, la velocidad de carga (Core Web Vitals) y el posicionamiento SEO son la máxima prioridad.
* Por defecto, todos los componentes generados en `src/app/` deben ser **Server Components (SSR)**.
* La directiva `"use client"` solo está permitida en las hojas finales del árbol de componentes (donde ocurra interactividad obligatoria del navegador como eventos de click directos, hooks de estado de UI local o animaciones complejas que requieran hooks de cliente).
* Es obligatorio configurar y poblar el objeto de metadatos de Next.js (`Metadata` y `Viewport`) tanto estática como dinámicamente en los layouts y páginas correspondientes.

---

## 4. Gestión de Dependencias de Terceros (Aislamiento de Infraestructura)

Para blindar la aplicación contra dependencias maliciosas (Supply Chain Attacks), facilitar el mantenimiento a largo plazo y evitar refactorizaciones masivas en caso de sustitución tecnológica:

* **Regla de Envoltura Estricta:** Cualquier librería externa de utilidades, clientes HTTP, parseadores de Markdown, formateadores de fechas o SDKs de servicios **debe ser envuelta de manera obligatoria dentro de un adaptador propio** ubicado en `core/adapters/` o en `features/[feature-name]/infrastructure/adapters/`.
* **Excepción de Diseño:** Quedan totalmente exentas de esta regla las librerías puramente de estilos, UI visual o animación (ej. Tailwind CSS, Framer Motion, Radix Primitives). Estas se pueden consumir directamente en la capa de presentación.
* **Consumo Indirecto:** El resto del código de la aplicación (especialmente las capas de presentación y dominio) jamás importará de forma directa una librería externa restringida. Toda comunicación se realizará consumiendo la interfaz expuesta por el adaptador local.

*Ejemplo de Adaptador de Infraestructura:*

// src/core/adapters/http-client.adapter.ts
// Encapsula el cliente HTTP aislando la herramienta externa elegida

export interface HttpClient {
  get<T>(url: string, options?: object): Promise<T>;
}

export const httpClient: HttpClient = {
  get: async <T>(url: string, options?: object): Promise<T> => {
    // Implementación interna protegida utilizando la API de fetch nativa o SDK externo
    const response = await fetch(url, { ...options });
    if (!response.ok) {
      throw new Error(`[HttpClient Error]: Status ${response.status}`);
    }
    return response.json() as Promise<T>;
  }
};

---

## 5. Checklist para el Agente antes de Entregar Código

Antes de dar por completada cualquier tarea o responder al usuario, el agente debe validar los siguientes puntos:
1. [ ] ¿El componente creado se mantiene por bajo del límite estricto de las 100 líneas (máximo absoluto 150)?
2. [ ] ¿Se eliminaron la totalidad de los `imports` innecesarios o residuales?
3. [ ] ¿Se evitó por completo la declaración o uso de Server Actions?
4. [ ] Si se integró una nueva dependencia técnica o cliente de terceros, ¿se encapsuló correctamente tras un adaptador/wrapper?
5. [ ] ¿Se preservó la naturaleza Server Component (SSR) para no comprometer el SEO y rendimiento de la plataforma?
6. [ ] ¿Los componentes visuales carecen en su totalidad de lógica de negocio o fetching directo de datos?
<!-- END:nextjs-agent-rules -->
