const experiences = [
  {
    title: "AI and Data Intern",
    company: "Bastyon",
    duration: "December 2024 - March 2025",
    description:
      "Worked on AI-driven solutions and cloud infrastructure, contributing to the development of scalable and efficient systems. Gained hands-on experience with cloud platforms and machine learning tools.",
  },
  {
    title: "Software Developer Intern",
    company: "Mooc lab",
    duration: "June 2024 - August 2024",
    description:
      "Developed a websocket server using Node.js and express.js for real time communication with admin server to stream data of bus location and status. Worked on a project to create a web application for bus tracking using React.js and Firebase.",
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2025 - Present",
    description:
      "Designed and developed mobile applications for clients using React Native. Focused on creating user-friendly interfaces and ensuring optimal performance.",
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
            <p className="text-[var(--textcolor)] text-md font-medium">
              {experience.company}
            </p>
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
