import Image from "next/image";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <p className="font-medium text-violet-500">Projects</p>

        <h2 className="mt-2 text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          A selection of projects I've built across AI, Web3 and modern web
          development.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-violet-500"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "Active"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      GitHub
                    </Button>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}