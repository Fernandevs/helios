import Link from "next/link";
import { BlackHole } from "@/core/presentation/components/BlackHole";
import { ParticlesBackground } from "@/core/presentation/components/ParticlesBackground";
import { Constellations } from "@/core/presentation/components/Constellations";
import { SpotlightEffect } from "@/core/presentation/components/SpotlightEffect";
import { buttonVariants } from "@/core/presentation/components/ui/button";
import { cn } from "@/core/application/lib/utils";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-on-background bg-star-map bg-noise overflow-hidden px-margin-mobile text-center">
      <ParticlesBackground />
      <Constellations />
      <SpotlightEffect />

      <div className="relative z-10 max-w-md w-full flex flex-col gap-8 items-center">
        {/* Animated Black Hole Graphic */}
        <BlackHole />

        {/* Text Details */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            404: Órbita Perdida
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
            Has cruzado el horizonte de sucesos. Las coordenadas que buscas no existen en este sector estelar.
          </p>
          <span className="text-[10px] font-mono text-muted-foreground/40 tracking-wider">
            COORDINATES DEVIATED TO GRAVITATIONAL SINGULARITY
          </span>
        </div>

        {/* Action Button */}
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "shadow-[0_0_15px_rgba(192,193,255,0.15)] border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
          )}
        >
          Volver a la Base
        </Link>
      </div>
    </div>
  );
}
