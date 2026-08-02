export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-5xl">
        <p className="text-violet-500 font-medium">About Me</p>

        <h2 className="mt-2 text-4xl font-bold">
          Building products from idea to deployment.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            I'm Reel Memory, a Full Stack Developer, Web3 Builder, and IT
            Support professional from Nigeria. I enjoy building products that
            solve real-world problems with clean code and thoughtful user
            experiences.
          </p>

          <p>
            My work spans modern web applications, blockchain infrastructure,
            AI-powered tools, Telegram bots, and smart contract integrations.
            I enjoy turning ideas into products people can actually use.
          </p>

          <p>
            Outside development, I contribute to Web3 communities, participate
            in hackathons, and continuously improve my skills through hands-on
            projects and industry certifications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-3xl font-bold text-violet-500">10+</h3>
            <p className="mt-2 text-zinc-400">Projects Built</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-3xl font-bold text-violet-500">3+</h3>
            <p className="mt-2 text-zinc-400">Years in IT & Web3</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-3xl font-bold text-violet-500">∞</h3>
            <p className="mt-2 text-zinc-400">Always Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}