import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="space-y-6 max-w-lg">
        <Image
          src="/assets/images/online-page-animate.svg"
          alt="Site em desenvolvimento"
          width={400}
          height={300}
          className="mx-auto w-full max-w-sm"
        />

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl select-none">
          Site em desenvolvimento
        </h1>

        <p className="text-xl text-muted-foreground select-none">
          Estamos preparando algo incrível. Logo mais teremos atualizações!
        </p>
      </div>
    </main>
  );
}
