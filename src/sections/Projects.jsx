import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { LazyImage } from "@/components/LazyImage";
import { useInView } from "@/components/useInView";
import { TiltCard } from "@/components/TiltCard";
import { ProjectFilter, useProjectFilter } from "@/components/ProjectFilter";
import { TechStack } from "@/components/TechLogo";
const projects = [
  {
    title: "Recipe Management REST API",
    description:
      "Built a production-ready backend API using Django REST Framework for recipe and ingredient management. Implemented JWT authentication, role-based access, and interactive API documentation via Swagger. Integrated image upload and storage functionality, enabling users to attach media to recipes and improving engagement.",
    image: "/projects/project1.png",
    tags: ["Django REST Framework", "PostgreSQL", "JWT", "Swagger"],
    link: "https://codemydream.in/recipe-api-app/api/docs/",
    github: "https://github.com/SayanKarmakar543",
    liveDemo: "https://codemydream.in/recipe-api-app/api/docs/",
  },
  {
    title: "Tunify – Music Streaming Backend Application",
    description:
      "Developed a scalable music streaming backend using FastAPI, PostgreSQL, and Async SQLAlchemy with JWT based authentication and role-based access control. Implemented core features including user management, artists, albums, tracks, and playlist creation using clean service–repository architecture. Designed a modular, production-ready system with API versioning, Alembic migrations, centralized error handling, and Dockerized deployment.",
    image: "/projects/project2.png",
    tags: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "Docker"],
    link: "https://github.com/SayanKarmakar543",
    github: "https://github.com/SayanKarmakar543",
    liveDemo: null,
  },
  {
    title: "Persona-Bot",
    description:
      "An AI-powered chatbot that adapts its personality and responses based on user interactions. Built with advanced NLP techniques to provide personalized conversational experiences.",
    image: "/projects/project3.png",
    tags: ["Python", "OpenAI", "NLP", "Hugging Face"],
    link: "https://huggingface.co/spaces/Sayan-Karmakar/Persona-Bot",
    github: "https://github.com/SayanKarmakar543",
    liveDemo: "https://huggingface.co/spaces/Sayan-Karmakar/Persona-Bot",
  },
];

export const Projects = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const { filteredProjects, handleFilterChange } = useProjectFilter(projects);
  
  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Featured Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 transition-all duration-700 text-secondary-foreground ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Project Filters */}
        <ProjectFilter projects={projects} onFilterChange={handleFilterChange} />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <TiltCard
              key={idx}
              className={`group glass rounded-2xl overflow-hidden md:row-span-1 transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: sectionInView ? `${(idx + 1) * 100}ms` : '0ms' }}
              intensity={5}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      title="View Live Demo"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    title="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                {/* Technology Stack with Logos */}
                <TechStack technologies={project.tags} size="sm" showLabels={true} />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
