import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Train Tracker Website",
      description:
        "Implemented real-time train tracking using live location APIs, a feedback form, and mock interfaces for PNR status and coach layout. Designed full frontend/backend flow for future API integration.",
      imageUrl: "/train-tracker2.png",
      tags: ["JavaScript", "TypeScript", "NodeJS", "React"],
      codeUrl:
        "https://github.com/BismarckSVBP/Train-Running-Status-and-PNR-Checker-FullStack-Project-in-MERN",
      demoUrl: "https://train-tracker-ashy.vercel.app/",
    },
    {
      id: 2,
      title: "Authentication through OTP Verification",
      description:
        "Secure signup and login system with email OTP verification, password reset functionality, and protected routes. Includes a responsive contact form with backend integration.",
      imageUrl: "/authentication3.png",
      tags: ["JavaScript", "NodeJS", "React", "MongoDB"],
      codeUrl:
        "https://github.com/BismarckSVBP/Authentication-and-contactUs-template-MERN-project",
      demoUrl: "https://authentication-frontend-khaki-eta.vercel.app/login",
    },
    {
      id: 3,
      title: "Abhay's Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and achievements. Built with modern web technologies and responsive design for an engaging user experience.",
      imageUrl: "/portfolio3.png",
      tags: ["React", "TailwindCSS", "TypeScript", "NodeJS"],
      codeUrl: "https://github.com/BismarckSVBP/Portfolio-website",
      demoUrl: "https://portfolio-website-frontend-phi.vercel.app/",
    },
    {
      id: 4,
      title: "URL Shortener Website",
      description:
        "Developed a secure URL shortener using JWT, short-id for unique links, and MongoDB for storage. Tracked analytics like click events and dynamically rendered data using EJS.",
      imageUrl:
        "/url-shortner.png",
      tags: ["JavaScript", "EJS", "NodeJS", "MongoDB"],
      codeUrl:
        "https://github.com/BismarckSVBP/Url-shortner-Project-with-auth",
      demoUrl: "", // No demo link
    },
  ];

  return (
    <section id="projects" className="newspaper-container py-12 min-h-screen">
      <h2 className="section-title">FEATURED PROJECTS</h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`newspaper-border p-4 md:p-6 flex flex-col md:flex-row gap-6 ${
              index % 2 === 0 ? "" : "bg-muted"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={project.imageUrl}
                alt={`${project.title} Screenshot`}
                className="rounded-md shadow-md border w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="article-title">{project.title}</h3>
                <p className="article-lead mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-newspaper-lightgray dark:bg-newspaper-gray/30 text-sm rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="group">
                    <Github size={16} className="mr-2" />
                    Code
                    <ArrowRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </Button>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="group">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                      <ArrowRight
                        size={14}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                      />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
