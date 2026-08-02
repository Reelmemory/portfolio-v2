import { community } from "@/data/community";
import { Users, Trophy, BookOpen, Rocket } from "lucide-react";

const icons = [
  <Users key="users" className="h-6 w-6" />,
  <Users key="mod" className="h-6 w-6" />,
  <BookOpen key="book" className="h-6 w-6" />,
  <Rocket key="rocket" className="h-6 w-6" />,
];

export default function Community() {
  return (
    <section id="community">
      <div className="container">
        <div className="mb-12">
          <p className="font-medium text-violet-500">
            Community & Leadership
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Beyond Writing Code
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Building products is only part of what I do. I also contribute to
            communities, mentor builders and help grow the Web3 ecosystem.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {community.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-violet-500"
            >
              <div className="mb-5 text-violet-500">
                {icons[index]}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-1 text-violet-400">
                {item.role}
              </p>

              <p className="mt-4 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}