import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="newspaper-container py-12">
      <div className="newspaper-border p-6 md:p-10">
        <h1 className="font-heading text-3xl md:text-5xl font-black leading-tight mb-4">
          ABHAY KUMAR: Backend Developer & Coder
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-3xl border-l-2 border-newspaper-black dark:border-newspaper-white pl-4 italic">
          Problem-solving full-stack developer with a strong foundation in
          competitive programming, data structures, algorithms, and scalable
          database management using MySQL and MongoDB.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="group">
            <a href="#projects" className="flex items-center">
              View My Work
            </a>
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>
          <Button variant="outline">
            <a href="#contact" className="flex items-center">
              Get In Touch
            </a>
      </Button>
        </div>
      </div>
    </section>
  );
}
