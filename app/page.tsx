import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-9rem)] items-center justify-center bg-zinc-50 px-6 py-16">
      <section className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white px-8 py-16 text-center shadow-sm sm:px-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Welcome to NoteTech
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Your partner in learning and growth
        </p>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            Explore Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
