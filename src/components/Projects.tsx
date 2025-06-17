import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { PiEye } from "react-icons/pi";

const projects = [
  {
    id: 1,
    name: "Supply Chain Management",
    description:
      "full supply chain management system that is built for suppplier,driver and customer integrated with ai\
      agent support to answer users question about the profitablity ",
    image: "supply_chain_project.png",
    category: "ai",
    codeLink: "https://github.com/ahmed123456787/hakathon_supply_chain",
  },
  {
    id: 2,
    name: "Text Editor",
    description:
      "online text editor with real time collaboration and sharing feature",
    image: "text_editor_project.png",
    category: "web",
    codeLink: "https://github.com/ahmed123456787/Text-Editor",
  },
  {
    id: 3,
    name: "Sadaka Backend",
    description:
      "This is backend for helping mosqsue stuff to manage thier ressource and for efficent donation and reach out the needed people",
    image: "sadaka_project.png",
    category: "web",
    codeLink: "https://github.com/ahmed123456787/kayrat_sadaka",
  },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "ai", label: "Ai" },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-8">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          My Projects
        </h2>
        <div className="flex justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-2 rounded-3xl border-1 hover:cursor-pointer ${
                activeTab === tab.id
                  ? "border-red-500 text-white"
                  : "border-slate-400 text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="mb-1 rounded-xl group-hover:opacity-75 transition-opacity duration-300 bg-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
                >
                  <FaCode className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600"
                >
                  <PiEye className="w-5 h-5" />
                </a>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold ml-4">
              {project.name}
            </h3>
            <p className="text-gray-400 ml-4">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Projects };
