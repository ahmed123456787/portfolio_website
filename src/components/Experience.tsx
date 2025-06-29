const experiences = [
  {
    title: "Agentic  Ai Intern",
    company: "Maystro Delivery",
    duration: " June 2025 - present",
    description:
      "Develop an ai agent to help in stock management (details will be added later)",
    logo: "/maystro.png",
  },
  {
    title: "AI and Data Intern",
    company: "Bastyon",
    duration: "December 2024 - March 2025",
    description:
      "Optimized ETL pipelines using Airbyte to ensure real-time data delivery, improving data accuracy by 30%. Created performance dashboards to monitor system metrics and user engagement. Deployed data-driven applications via CI/CD pipelines on OVH Cloud, reducing deployment time by 25%.",
  },
  {
    title: "Software Developer Intern",
    company: "Mooc lab",
    duration: "June 2024 - August 2024",
    logo: "/logo-mooc.png",
    description:
      "Developed a websocket server using Node.js and express.js for real time communication with admin server to stream data of bus location and status. Worked on a project to create a web application for bus tracking using React.js and Firebase.",
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2025 - Present",
    description:
      "Designed and developed web applications for clients using React and django. Focused on creating user-friendly interfaces and ensuring optimal performance.",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center mt-12 px-4 sm:px-8 md:px-12">
      <h2 className="text-[var(--textcolor)] text-2xl font-bold mb-6">
        Experience
      </h2>
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-[var(--bgimage)] bg-opacity-80 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-[var(--redcolor)] text-xl font-semibold">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-[var(--textcolor)] text-md font-medium">
                {experience.company}
              </p>
              {experience.logo && (
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-16 h-8 mt-2 mb-4 rounded-full"
                />
              )}
            </div>
            <p className="text-slate-400 text-sm">{experience.duration}</p>
            <p className="text-[var(--textcolor)] mt-4 leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
