import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Assam University",
    period: "2018 - 2022",
    grade: "CGPA: 7.48 / 10",
    icon: GraduationCap,
  },
  {
    degree: "Class XII",
    institution: "West Bengal Board",
    period: "2016 - 2017",
    grade: "77.6%",
    icon: Award,
  },
  {
    degree: "Class X",
    institution: "West Bengal Board",
    period: "2014 - 2015",
    grade: "77.5%",
    icon: Award,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Academic{" "}
            <span className="font-serif italic font-normal text-white">
              background.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Building a strong foundation in computer science and engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-primary font-medium">{edu.period}</span>
                      <p className="text-sm text-muted-foreground mt-1">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
