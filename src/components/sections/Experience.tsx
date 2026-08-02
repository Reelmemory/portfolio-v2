import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="text-violet-500 font-medium">Experience</p>

        <h2 className="mt-2 text-4xl font-bold">
          My Journey
        </h2>

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-violet-600 pl-6"
            >
              <p className="text-sm text-zinc-500">
                {item.period}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-violet-400">
                {item.company}
              </p>

              <p className="mt-3 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}