"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, Download } from "lucide-react";
import { Navbar } from "@/components/navbar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeSparkles } from "@/components/ui/ThemeSparkles";

export default function Page() {
  const [showMoreCerts, setShowMoreCerts] = useState(false);
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [visibleCertCount, setVisibleCertCount] = useState(8);

  const projects = [
    {
      title: "Text Editor",
      description:
        "online text editor with real time collaboration and sharing feature",
      content:
        "A web-based text editor that allows multiple users to collaborate in real-time, with features like syntax highlighting and document sharing",
      link: "https://github.com/ahmed123456787/Text-Editor",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "Prettier", icon: "/icons/prettier-svgrepo-com.svg" },
        { name: "Django", icon: "/icons/django.png" },
        { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" },
        { name: "Django Channels", icon: "/icons/channels.png" },
        { name: "redis", icon: "/icons/redis.svg" },
        { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
      ],
    },
    {
      title: "Supply Chain Management",
      description:
        "full supply chain management system integrated with ai agent support to answer users question about the profitablity",
      content:
        "A comprehensive supply chain management system that includes modules for suppliers, drivers, and customers, with AI agent support for profitability analysis and decision-making",
      link: "https://github.com/ahmed123456787/hakathon_supply_chain",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" },
        { name: "Django Channels", icon: "/icons/channels.png" },
        { name: "React", icon: "/icons/react-svgrepo-com.svg" },
        { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
        { name: "langchain", icon: "/icons/langchain.png" },
        { name: "langgraph", icon: "/icons/langgraph.svg" },
      ],
    },
    {
      title: "Sadaka Backend",
      description:
        "This is backend for helping mosqsue stuff to manage thier ressource and for efficent donation and reach out the needed people",
      content:
        "A backend system designed to assist mosques in managing their resources efficiently, facilitating donations, and reaching out to those in need",
      link: "https://github.com/ahmed123456787/kayrat_sadaka",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" },
        { name: "Django Channels", icon: "/icons/channels.png" },
        {
          name: "Django Rest Framework",
          icon: "/icons/Django REST.svg",
        },
        { name: "Django Channels", icon: "/icons/channels.png" },
      ],
    },
  ];

  const handleShowMoreProjects = () => {
    if (visibleProjectCount >= projects.length) {
      setVisibleProjectCount(6); // Reset to initial count of 6
    } else {
      setVisibleProjectCount((prev) => Math.min(prev + 3, projects.length));
    }
  };

  const showingAllProjects = visibleProjectCount >= projects.length;

  const handleShowMoreCerts = () => {
    if (visibleCertCount >= 12) {
      // Total number of certificates
      setVisibleCertCount(4); // Reset to initial count
    } else {
      setVisibleCertCount((prev) => Math.min(prev + 4, 12));
    }
  };

  const showingAllCerts = visibleCertCount >= 12;

  const handleContact = (platform: string) => {
    switch (platform) {
      case "gmail":
        window.location.href = "mailto:zaterahmed62@gmail.com";
        break;
      case "whatsapp":
        window.location.href = "https://wa.me/213783282501";
        break;
      case "linkedin":
        window.location.href = "https://www.linkedin.com/in/zaterahmed/";
        break;
    }
  };

  return (
    <div className="relative min-h-screen">
      <ThemeSparkles />
      <div className="relative min-h-screen bg-transparent">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <section id="about" className="mb-24 text-center">
            <h1 className="text-[42px] font-bold mb-4 gradient-text animate-fade-in">
              zater ahmed
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
              software engineer student with skills in full stack developement
              using modern technologies like Reactjs,Nodejs,Django and more,
              passionate about ai agents and generative ai.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    Contact Me!
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>Get in touch</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleContact("gmail")}>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleContact("whatsapp")}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>WhatsApp</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleContact("linkedin")}>
                      <Github className="mr-2 h-4 w-4" />
                      <span>LinkedIn</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="default"
                className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
                asChild
              >
                <a
                  href="https://github.com/ahmed123456787"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="default"
                className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  My Blog Site
                </a>
              </Button>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Skills && Technologies
            </h2>
            <div className="card-spotify rounded-lg p-4">
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4">
                {/* Column 1 - Programming Languages */}
                <div className="animate-slide-in delay-100">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        name: "JavaScript",
                        icon: "/icons/javascript-svgrepo-com.svg",
                      },
                      {
                        name: "TypeScript",
                        icon: "/icons/typescript-svgrepo-com.svg",
                      },
                      { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
                      { name: "Java", icon: "/icons/java-svgrepo-com.svg" },
                      { name: "C", icon: "/icons/c.svg" },
                      { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
                      { name: "CSS", icon: "/icons/css-svgrepo-com.svg" },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Column 2 - Frontend Frameworks */}
                <div className="animate-slide-in delay-200">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "React", icon: "/icons/react-svgrepo-com.svg" },
                      {
                        name: "Next.js",
                        icon: "/icons/nextjs-icon-svgrepo-com.svg",
                      },
                      {
                        name: "Tailwind",
                        icon: "/icons/tailwind-svgrepo-com.svg",
                      },
                      { name: "NPM", icon: "/icons/npm-svgrepo-com.svg" },
                      { name: "Node.js", icon: "/icons/node-svgrepo-com.svg" },
                      {
                        name: "Express",
                        icon: "/icons/express-svgrepo-com.svg",
                      },
                      {
                        name: "PostgreSQL",
                        icon: "/icons/postgresql-svgrepo-com.svg",
                      },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Column 3 - Backend & Databases */}
                <div className="animate-slide-in delay-300">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        name: "MongoDB",
                        icon: "/icons/mongodb-svgrepo-com.svg",
                      },
                      {
                        name: "Firebase",
                        icon: "/icons/firebase-svgrepo-com.svg",
                      },
                      {
                        name: "Django",
                        icon: "/icons/django.png",
                      },
                      {
                        name: "SQL",
                        icon: "/icons/sql-database-generic-svgrepo-com.svg",
                      },
                      {
                        name: "Docker",
                        icon: "/icons/docker-svgrepo-com(1).svg",
                      },
                      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Column 4 - DevOps & Cloud */}
                <div className="animate-slide-in delay-400">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "Pandas", icon: "/icons/Pandas.svg" },
                      { name: "Sklearn", icon: "/icons/sklearn.svg" },
                      { name: "Tensorflow", icon: "/icons/TensorFlow.svg" },
                      { name: "Langchain", icon: "/icons/langchain.png" },
                      { name: "AWS", icon: "/icons/aws-svgrepo-com.svg" },
                      { name: "Azure", icon: "/icons/azure-svgrepo-com.svg" },
                      { name: "Nginx", icon: "/icons/nginx-svgrepo-com.svg" },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Development Endeavors
            </h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .slice(0, visibleProjectCount)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className={`hover-lift flex flex-col ${
                        !project.link ? "opacity-75" : ""
                      }`}
                    >
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-[0.75em]">
                          {project.content}
                        </p>
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="flex gap-2 mt-4">
                              {project.technologies.map((tech, techIndex) => (
                                <div key={techIndex} className="relative group">
                                  <Image
                                    src={tech.icon}
                                    alt={`${tech.name} icon`}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                  />
                                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {tech.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                      </CardContent>
                      <CardFooter className="mt-auto">
                        {project.link ? (
                          <div className="flex flex-row w-full space-x-2">
                            <Button
                              asChild
                              variant="outline"
                              className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View on GitHub{" "}
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            {project.title === "Devlogz Blog App" && (
                              <Button
                                asChild
                                variant="outline"
                                className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                              >
                                <a
                                  href="https://github.com/fernand3z/my-webview-app/releases/download/v1.0.0/devlogzv1.0.0.apk"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Download className="h-[18px] w-[18px]" />
                                </a>
                              </Button>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground inline-flex items-center space-x-1">
                            {project.status} →
                          </span>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
              </div>

              {/* Show More/Less Projects Button */}
              {visibleProjectCount < projects.length ? (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Professional Background
            </h2>
            <div className="space-y-8">
              {/* NUMBER PLATE CLINIC Experience */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a
                        href="https://www.linkedin.com/company/number-plate-clinic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image
                          src="/maystero.png"
                          alt="maystero Logo"
                          width={90}
                          height={52}
                          className="w-full h-full object-contain p-1"
                        />
                      </a>
                    </div>
                    <div className="flex-grow">
                      <a
                        href="https://www.linkedin.com/company/number-plate-clinic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>Maystro Delivery</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">
                          Part-time
                        </span>
                        <span className="block text-sm text-muted-foreground/60">
                          Algiers-Algeria · Hybrid
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* System Administrator Role */}
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-foreground">
                      Agentic Ai Internship
                    </h4>
                    <p className="text-sm text-muted-foreground/60 mb-4">
                      Jul 2025 - Present
                    </p>
                    <p className="text-muted-foreground mb-4 text-[0.75em]">
                      Engaged in an internship focused on developing agentic ai
                      system solutions in one of the sectors of supply chain
                      management, HR and customer service
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "Langchain",
                          icon: "/icons/langchain.png",
                        },
                        {
                          name: "Docker",
                          icon: "/icons/docker-svgrepo-com(1).svg",
                        },

                        {
                          name: "Python",
                          icon: "/icons/python-svgrepo-com.svg",
                        },
                        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                        {
                          name: "GitHub",
                          icon: "/icons/github-svgrepo-com.svg",
                        },
                        {
                          name: "PostgreSQL",
                          icon: "/icons/postgresql-svgrepo-com.svg",
                        },
                        { name: "Nginx", icon: "/icons/nginx-svgrepo-com.svg" },
                        { name: "AWS", icon: "/icons/aws-svgrepo-com.svg" },
                      ].map((tech, techIndex) => (
                        <div key={techIndex} className="relative group">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bastyonai experience */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <Image
                        src="/favicon.png"
                        alt="bastyonai Logo"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-grow">
                      <CardTitle>Bastyon Ai</CardTitle>
                      <CardDescription>
                        <span className="block text-muted-foreground">
                          part time · 6 mos
                        </span>
                        <span className="block text-sm text-muted-foreground/60">
                          Remote
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-foreground">
                      Ai and Cloud Developer internship
                    </h4>
                    <p className="text-sm text-muted-foreground/60 mb-4">
                      Dec 2024 - Mar 2025 · 4 mos
                    </p>
                    <p className="text-muted-foreground mb-4 text-[0.75em]">
                      Optimized ETL pipelines using Airbyte to ensure real-time
                      data delivery, improving data accuracy by 30%. Created
                      performance dashboards to monitor system metrics and user
                      engagement. Deployed data-driven applications via CI/CD
                      pipelines on OVH Cloud, reducing deployment time by 25%.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        {
                          name: "OVH",
                          icon: "/icons/ovh.png",
                        },
                        {
                          name: "Python",
                          icon: "/icons/python-svgrepo-com.svg",
                        },
                        {
                          name: "Airbyte",
                          icon: "/icons/airbyte.svg",
                        },
                        {
                          name: "Docker",
                          icon: "/icons/docker-svgrepo-com(1).svg",
                        },
                      ].map((tech, techIndex) => (
                        <div key={techIndex} className="relative group">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={82}
                            height={24}
                            className="w-5 h-5"
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mooc Lab Experience */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a
                        href="https://mooc.univ-constantine2.dz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image
                          src="/icons/mooc.png"
                          alt="Adventa Logo"
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1 rounded-full"
                        />
                      </a>
                    </div>
                    <div className="flex-grow">
                      <a
                        href="https://mooc.univ-constantine2.dz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>Mooc Lab</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">
                          Full-time · 2 mo
                        </span>
                        <span className="block text-sm text-muted-foreground/60">
                          Constantine - Algeria · Hybrid
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-foreground">
                      Web Developer
                    </h4>
                    <p className="text-sm text-muted-foreground/60 mb-4">
                      Jui 2024 - Jul 2024 · 2 mo
                    </p>
                    <p className="text-muted-foreground mb-4 text-[0.75em]">
                      Developed a websocket server using Node.js and express.js
                      for real time communication with admin server to stream
                      data of bus location and status.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "JavaScript",
                          icon: "/icons/javascript-svgrepo-com.svg",
                        },
                        { name: "Nodejs", icon: "/icons/node-svgrepo-com.svg" },
                        {
                          name: "Express",
                          icon: "/icons/express-svgrepo-com.svg",
                        },
                        {
                          name: "Socket.io",
                          icon: "/icons/socketio.png",
                        },
                      ].map((tech, techIndex) => (
                        <div key={techIndex} className="relative group">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Knowledge Acquisition
            </h2>
            <div className="space-y-6">
              {/* Associate's Degree */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a
                        href="https://www.linkedin.com/school/vtasrilanka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image
                          src="/icons/univ.png"
                          alt="Vocational Training Authority Logo"
                          width={60}
                          height={60}
                          className="w-full h-full object-contain p-1 rounded-full"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/school/vtasrilanka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>
                          Engineer's degree: Software Engineering
                        </CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">
                          University constantine 2
                        </span>
                        <span className="block text-sm text-muted-foreground/60">
                          Sep 2022 - Juin 2027
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* License & Certifications Section */}
          <section id="certifications" className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              License && Certifications
            </h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First 4 certificates are always visible */}
                {/* Additional certificates are shown based on visibleCertCount */}
                {[
                  {
                    title: "Data analyst associate",
                    type: "Professional Certificate",
                    issuer: "Datacamp",
                    date: "2025",
                    link: "https://www.datacamp.com/certificate/DAA0010680901417",
                  },
                  {
                    title: "Build Backend with Django Advanced",
                    type: "Course Certificate",
                    issuer: "Udemy",
                    date: "2025",
                    link: "https://www.udemy.com/certificate/UC-4d45af95-b2cc-4219-ae4d-36e1157d9a80/",
                  },
                  {
                    title: "AWS cloud practitioner",
                    type: "Professional Certificate",
                    issuer: "AWS",
                    date: "2025",
                    link: "https:",
                  },

                  {
                    title: "Docker Foundations",
                    type: "Professional Certificate",
                    issuer: "Datacamp",
                    date: "2024",
                    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/1a46836f615bdf2155dd48b1106863424b05a370?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink",
                  },

                  {
                    title:
                      "Generative AI for Customer Service with Microsoft 365 Copilot",
                    type: "Professional Certificate",
                    issuer: "Microsoft",
                    date: "2024",
                    link: "https://www.linkedin.com/learning/certificates/6cac185f1b410c460a9dea686cd5da12e45da8c5106707297ba2662ebbf49e6d",
                    providers: [
                      {
                        name: "Microsoft",
                        url: "https://microsoft.com",
                        icon: "/microsoft-logo.png",
                      },
                    ],
                  },
                ]
                  .slice(0, visibleCertCount)
                  .map((cert, index) => (
                    <div
                      key={index}
                      className={`card-spotify p-4 rounded-lg hover-lift animate-scale-in delay-${
                        ((index % 4) + 1) * 100
                      } flex flex-col`}
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-muted-foreground text-[0.6em]">
                            {cert.type}
                          </p>
                          <span className="text-muted-foreground text-[0.6em]">
                            •
                          </span>
                          <p className="text-muted-foreground text-[0.6em]">
                            {cert.issuer}
                          </p>
                          <span className="text-muted-foreground text-[0.6em]">
                            •
                          </span>
                          <p className="text-muted-foreground text-[0.6em]">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 flex justify-between items-center">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-1 transition-colors group text-[0.75em]"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            View Certificate
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Show More/Less Certificates Button */}
              {visibleCertCount < 12 && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              )}

              {/* Show Less Button - only visible when all certificates are shown */}
              {showingAllCerts && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
