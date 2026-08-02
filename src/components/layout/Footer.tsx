export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} Reel Memory. All rights reserved.</p>

        <p>
          Built with Next.js, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}