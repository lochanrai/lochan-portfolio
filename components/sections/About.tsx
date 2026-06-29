export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          About Me
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400">
          I am a Business Intelligence Developer with over 5 years of
          experience building scalable cloud-based end to end analytics solutions.
          I specialize in Azure, Databricks, SQL, Python, Power BI and
          modern data engineering practices. My passion lies in transforming
          raw data into meaningful business insights using AI-powered analytics.
        </p>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center transition hover:border-cyan-400">
    <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
    <p className="mt-2 text-slate-300">Years Experience</p>
  </div>

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center transition hover:border-cyan-400">
    <h3 className="text-4xl font-bold text-cyan-400">Azure</h3>
    <p className="mt-2 text-slate-300">Cloud Platform</p>
  </div>

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center transition hover:border-cyan-400">
    <h3 className="text-4xl font-bold text-cyan-400">Databricks</h3>
    <p className="mt-2 text-slate-300">Data Engineering</p>
  </div>

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center transition hover:border-cyan-400">
    <h3 className="text-4xl font-bold text-cyan-400">Healthcare</h3>
    <p className="mt-2 text-slate-300">Domain Expertise</p>
  </div>

</div>
      </div>
    </section>
  );
}