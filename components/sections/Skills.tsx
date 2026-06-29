export default function Skills() {
  
  
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "Git"],
    },
    {
      title: "Cloud & Data Platform",
      skills: [
        "Azure",
        "Azure Databricks",
        "Azure Data Factory",
        "Azure Blob Storage",
        "Azure SQL Database",
        "Unity Catalog",
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        "Apache Spark",
        "Delta Lake",
        "ETL Pipelines",
        "Data Warehousing",
        "Data Modeling",
        "Medallion Architecture",
      ],
    },
    {
      title: "Business Intelligence",
      skills: [
        "Power BI",
        "Tableau",
        "Excel",
        "DAX",
        "Microsoft Fabric",
        "Dashboard Design",
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Scikit-learn",
        "Machine Learning",
        "Predictive Analytics",
        "EDA",
        "Feature Engineering",
        "AI Copilots",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "VS Code",
        "GitHub",
        "Jupyter Notebook",
        "Linux",
        "REST APIs",
        "Agile",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">Technical Skills</h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-400">
          My technical toolkit for designing, building and deploying modern
          cloud-based analytics and AI solutions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20"
            >
              <h3 className="mb-4 text-xl font-bold text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}
