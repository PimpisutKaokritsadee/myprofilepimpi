// src/sections/Education.tsx
import { Sparkles, GraduationCap, Calendar } from "lucide-react";
import Reveal from "../components/Reveal"; 

export default function Education() {
  return (
    <section id="education" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title pill */}
        <Reveal type="fade-up">
          <h2 className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold text-sm md:text-base">
            <Sparkles size={16} className="shrink-0" />
            {"EDUCATION"}
          </h2>
        </Reveal>

        {/* Content */}
        <Reveal type="fade-up" delay={0.2}>
          <article className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-wrap items-center gap-3">
              <GraduationCap size={22} className="text-indigo-600" />
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
                Bachelor of Science in Computer Science
              </h3>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <span className="mx-2">•</span>
              <span>Faculty of Informatics, Burapha University</span>
              <Calendar size={16} />
              <span>2022 — Present</span>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The Computer Science program focuses on algorithm design and
              applying algorithms in programming. The curriculum emphasizes
              advanced programming, computational processes, and applied
              mathematics — ideal for students who want to be software engineers
              or algorithm developers.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
