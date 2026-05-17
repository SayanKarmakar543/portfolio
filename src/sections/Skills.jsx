import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { useInView } from "@/components/useInView";
import { TechLogo } from "@/components/TechLogo";
import { TiltCard } from "@/components/TiltCard";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: "Intermediate", years: 4 },
      { name: "FastAPI", level: "Intermediate", years: 3 },
      { name: "Django", level: "Beginner", years: 2 },
      { name: "Django REST Framework", level: "Beginner", years: 2 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Expert", years: 4 },
      { name: "MySQL", level: "Expert", years: 4 },
      { name: "SQL", level: "Expert", years: 4 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: "Beginner", years: 1 },
      { name: "Docker", level: "Intermediate", years: 2.5 },
      { name: "Jenkins", level: "Beginner", years: 2.5 },
      { name: "Git", level: "Intermediate", years: 4 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "JWT", level: "Beginner", years: 2 },
      { name: "OAuth", level: "Beginner", years: 2 },
      { name: "Swagger", level: "Intermediate", years: 3 },
      { name: "Postman", level: "Intermediate", years: 3 },
      { name: "OpenAI Agent SDK", level: "Beginner", years: 1 },
      { name: "CrewAI", level: "Beginner", years: 1 },
    ],
  },
];

export const Skills = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  
  return (
    <section ref={sectionRef} id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Technical Expertise
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            Skills &{" "}
            <span className="font-serif italic font-normal text-white">
              technologies.
            </span>
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            A comprehensive toolkit for building robust, scalable backend systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <TiltCard
              key={idx}
              className={`glass p-6 rounded-2xl border border-border/30 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: sectionInView ? `${(idx + 1) * 100}ms` : '0ms' }}
              intensity={15}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-surface text-xs font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2">
                      <TechLogo name={skill.name} size="sm" />
                      <span>{skill.name}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
                      <span className={`px-1.5 py-0.5 rounded ${
                        skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                        skill.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>{skill.level}</span>
                      <span>{skill.years}+ yrs</span>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
