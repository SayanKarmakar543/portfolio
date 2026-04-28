import { Code2, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    skills: ["Python", "Java", "FastAPI", "Django", "Django REST Framework"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Jenkins", "Git"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["JWT", "OAuth", "Swagger", "Postman", "OpenAI Agent SDK", "CrewAI"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills &{" "}
            <span className="font-serif italic font-normal text-white">
              technologies.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A comprehensive toolkit for building robust, scalable backend systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl hover:border-primary/50 border border-transparent transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
