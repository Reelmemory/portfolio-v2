import { Check } from "lucide-react";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="mb-12">
          <p className="font-medium text-violet-500">Tech Stack</p>

          <h2 className="mt-2 text-4xl font-bold">
            Technologies I Use
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            The tools and technologies I use to build scalable web
            applications, AI products and blockchain solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl">{group.icon}</span>

                <div>
                  <h3 className="text-2xl font-bold">
                    {group.title}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {group.skills.length} Technologies
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <Check className="h-4 w-4 text-violet-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}