const icons = [
  { src: "numpy-icon.svg", alt: "NumPy" },
  { src: "python-icon.svg", alt: "Python" },
  { src: "react.svg", alt: "React" },
  { src: "typescript-icon.svg", alt: "TypeScript" },
  { src: "tailwindcss-icon.svg", alt: "Tailwind CSS" },
  { src: "nodejs-icon.svg", alt: "Node.js" },
  { src: "express-icon.svg", alt: "Express.js" },
  { src: "djangorest.svg", alt: "Django REST Framework" },
  { src: "postgres-icon.svg", alt: "PostgreSQL" },
  { src: "git-icon.svg", alt: "Git" },
  { src: "django.png", alt: "Django" },
  { src: "langchain.png", alt: "LangChain" },
  { src: "js-icon.svg", alt: "JavaScript" },
  { src: "sklearn-icon.svg", alt: "Scikit-learn" },
  { src: "pandas-icon.svg", alt: "Pandas" },
  { src: "pytorch-icon.svg", alt: "PyTorch" },
];
const Skills = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-12">
      <h2 className="text-white text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-8 gap-6">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-12 h-12 sm:w-16 sm:h-16 m-2 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
            />
            <p className="text-white text-sm sm:text-md mt-2 text-center">
              {icon.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
