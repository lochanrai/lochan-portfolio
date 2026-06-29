const experiences = [
  {
    year: "2024 - Present",
    title: "Data Analyst",
    company: "Veltris",
    description:
      "Designing scalable Azure-based analytics solutions using Databricks, PySpark, SQL and Power BI. Building ETL pipelines and delivering business intelligence solutions for healthcare and enterprise clients.",
  },

  {
    year: "2022 - 2024",
    title: "Business Intelligence Developer",
    company: "Provana",
    description:
      "Designing scalable Azure-based analytics solutions using Databricks, PySpark, SQL and Power BI. Building ETL pipelines and delivering business intelligence solutions for healthcare and enterprise clients.",
  },


  {
    year: "2019",
    title: "Post Graduate diploma in Marketing Management",
    company: "Madras university",
    description:
      "Completed certification in Marketing Management with focus on business strategy and analytics.",
  },

 {
    year: "2013 - 2015",
    title: "Associate Technical Consultant",
    company: "Trident Information Systems, New Delhi",
    description:
      "Designed business strategy, requirement gathering,solutioning and analytics based on microsoft and IBM tools.",
  },


  {
    year: "2007 - 2011",
    title: "Bachelor's in Technology",
    company: "Uttar Pradesh Technical University",
    description:
      "Built strong foundations in programming, databases, software/electronic engineering and data structures.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Experience
        </h2>

        <div className="mt-20 relative">

          <div className="absolute left-5 top-0 h-full w-1 bg-cyan-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-16 pl-16"
            >
              <div className="absolute left-1 top-2 h-8 w-8 rounded-full border-4 border-cyan-400 bg-slate-950"></div>

              <p className="text-cyan-400 font-semibold">
                {exp.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {exp.title}
              </h3>

              <p className="mt-1 text-slate-400">
                {exp.company}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {exp.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}