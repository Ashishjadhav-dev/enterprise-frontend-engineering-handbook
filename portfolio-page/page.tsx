import Link from "next/link";

const topics = [
  "Application Architecture", "Design Systems", "Frontend Security",
  "API & State Management", "Performance Engineering", "Testing Strategy",
  "Accessibility", "CI/CD & Observability"
];

export default function FrontendHandbookPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Architecture Case Study</p>
        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">Enterprise Frontend Engineering Handbook</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A practical blueprint for building secure, scalable, performant and maintainable Next.js applications.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500" href="/downloads/enterprise-frontend-engineering-handbook.pdf">Download PDF</Link>
          <a className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:border-slate-500" href="YOUR_GITHUB_REPOSITORY_URL" target="_blank">View on GitHub</a>
        </div>
      </section>
      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-4">
          {topics.map((topic) => <article key={topic} className="rounded-xl border border-slate-800 bg-slate-950 p-5"><h2 className="font-semibold">{topic}</h2></article>)}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div><h2 className="text-3xl font-bold">Why I created it</h2><p className="mt-5 leading-8 text-slate-300">I created this handbook to document how I approach frontend systems that must scale across product complexity, users, engineers and releases. It focuses on decisions, trade-offs, measurable standards and practical implementation.</p></div>
        <div><h2 className="text-3xl font-bold">What it demonstrates</h2><p className="mt-5 leading-8 text-slate-300">Architecture ownership, security awareness, design-system thinking, performance engineering, test strategy, accessibility, operational reliability and the ability to modernise large applications without disruptive rewrites.</p></div>
      </section>
    </main>
  );
}
