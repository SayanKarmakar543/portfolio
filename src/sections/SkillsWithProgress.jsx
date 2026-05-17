import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { useInView } from "@/components/useInView";
import { SkillCategory } from "@/components/SkillProgressBar";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 88 },
      { name: "Django REST Framework", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 92 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Jenkins", level: 75 },
      { name: "Git", level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "JWT & OAuth", level: 88 },
      { name: "Swagger/OpenAPI", level: 85 },
      { name: "Postman", level: 90 },
      { name: "OpenAI Agent SDK", level: 80 },
      { name: "CrewAI", level: 75 },
    ],
  },
];

export const SkillsWithProgress = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${
              sectionInView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Technical Expertise
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${
              sectionInView ? "animate-fade-in animation-delay-100" : "opacity-0"
            }`}
          >
            Skills &{" "}
            <span className="font-serif italic font-normal text-white">
              technologies.
            </span>
          </h2>
          <p
            className={`text-muted-foreground transition-all duration-700 ${
              sectionInView ? "animate-fade-in animation-delay-200" : "opacity-0"
            }`}
          >
            A comprehensive toolkit for building robust, scalable backend
            systems with measurable proficiency levels.
          </p>
        </div>

        {/* Skills Grid with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <SkillCategory
              key={idx}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={(idx + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
