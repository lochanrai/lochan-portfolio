import Image from "next/image";
const certifications = [
  {
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    badge: "/badge/fabric-analytics-engineer.png",               
    verify: "https://learn.microsoft.com/api/credentials/share/en-us/LochanRai-7257/BD565EDE60D345EC?sharingId=BECFD3D3E7F28416",
    status: "Certified",
   
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    badge: "/badge/azure-fundamentals.png",
    verify: "https://learn.microsoft.com/api/credentials/share/en-us/LochanRai-7257/AB8B224E77FCD609?sharingId=BECFD3D3E7F28416",
    status: "Certified",
  },
  {
    title: "Company Achievement Awards",
    issuer: "Current Organization",
    badge: "/badge/rockstar.png", 
    verify: "#",
    status: "Multiple Awards",
  },
  {
    title: "Databricks Data Engineer Associate",
    issuer: "Databricks",
    badge: "/badge/databricks.png", 
    verify: "#",
    status: "Planned",
  },
];



export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Certifications
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Professional certifications and achievements demonstrating continuous learning and expertise.
        </p>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {certifications.map((cert) => (
          <a
            key={cert.title}
             href={cert.verify}
             target="_blank"
             rel="noopener noreferrer"
            >
            <div
              className="group flex min-h-320px flex-col rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
            >
                            
              <div className="flex h-20 items-center justify-center">
    <Image
        src={cert.badge}
        alt={cert.title}
        width={70}
        height={70}
        className="object-contain"
    />
</div>

              <h3 className="mt-4 h-16 text-lg font-semibold leading-6">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {cert.issuer}
              </p>

              <span
  className={`mt-auto inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
    cert.status === "Certified"
      ? "bg-green-500/20 text-green-400"
      : cert.status === "Planned"
      ? "bg-yellow-500/20 text-yellow-400"
      : "bg-cyan-500/20 text-cyan-400"
  }`}
>
  {cert.status}
</span>
            </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
