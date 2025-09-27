import { Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";

const skillCategories = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Developer Tools",
    items: ["VS Code", "Git", "Figma", "Postman", "Notion", "Trello"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title with reveal */}
        <Reveal type="fade-up">
          <h2 className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold text-sm md:text-base">
            <Sparkles size={16} className="shrink-0" />
            {"SKILLS"}
          </h2>
        </Reveal>

        {/* Cards with stagger reveal */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} type="fade-up" delay={i * 120}>
              <article
                className="
                  h-full min-h-[120px]
                  flex flex-col
                  rounded-2xl border-2 border-gray-200 bg-white p-6
                  hover:shadow-md transition
                "
              >
                <h3 className="font-semibold text-gray-900 mb-3">{cat.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {cat.items.join(", ")}
                </p>

                {/* กันช่องว่าง เพื่อให้ทุกใบสูงเท่ากันและด้านล่างเรียบเสมอ */}
                <div className="mt-auto" />
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
