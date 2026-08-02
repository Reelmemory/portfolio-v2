export default function Contact() {
  const contacts = [
    {
      name: "Email",
      value: "your@email.com",
      href: "mailto:your@email.com",
    },
    {
      name: "GitHub",
      value: "github.com/Reelmemory",
      href: "https://github.com/Reelmemory",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/your-profile",
      href: "#",
    },
    {
      name: "X",
      value: "@yourhandle",
      href: "#",
    },
    {
      name: "Telegram",
      value: "@yourusername",
      href: "#",
    },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="mb-12">
          <p className="font-medium text-violet-500">Contact</p>

          <h2 className="mt-2 text-4xl font-bold">
            Let's Build Something Together
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Have an idea, collaboration, or opportunity? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-violet-500"
            >
              <h3 className="text-xl font-semibold">{contact.name}</h3>

              <p className="mt-2 text-zinc-400">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}