import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-4"
    >
      <div className="max-w-4xl text-center">
        <Reveal type="fade-up">
          <p className="text-sm uppercase tracking-wider text-indigo-400">
            Frontend Developer
          </p>
        </Reveal>

        <Reveal type="fade-up" delay={120}>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            Pimpisut Kaokritsadee
          </h1>
        </Reveal>

        <Reveal type="fade-up" delay={220}>
          <p className="mt-3 text-xl">Personal portfolio Website</p>
        </Reveal>

        <Reveal type="fade-up" delay={320}>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              ดูโปรเจกต์ <ArrowRight size={18} />
            </button>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
