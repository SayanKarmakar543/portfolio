import { GraduationCap, Award, Calendar, TrendingUp, BookOpen, MapPin } from "lucide-react";
import { useInView } from "@/components/useInView";
import { TiltCard } from "@/components/TiltCard";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Assam University",
    location: "Silchar, Assam",
    period: "2018 - 2022",
    grade: "CGPA: 7.48 / 10",
    icon: GraduationCap,
    color: "primary",
    highlights: [
      "Specialized in Backend Development & Database Systems",
      "Completed projects in Python, Java, and Web Technologies",
      "Active member of Coding Club",
    ],
  },
  {
    degree: "Class XII (Higher Secondary)",
    institution: "West Bengal Board",
    location: "West Bengal",
    period: "2016 - 2017",
    grade: "77.6%",
    icon: BookOpen,
    color: "highlight",
    highlights: [
      "Science Stream (Physics, Chemistry, Mathematics)",
      "Strong foundation in Mathematics & Computer Science",
    ],
  },
  {
    degree: "Class X (Secondary)",
    institution: "West Bengal Board",
    location: "West Bengal",
    period: "2014 - 2015",
    grade: "77.5%",
    icon: Award,
    color: "primary",
    highlights: [
      "All-round academic performance",
      "Foundation in core subjects",
    ],
  },
];

export const Education = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  
  return (
    <section ref={sectionRef} id="education" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Education
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            Academic{" "}
            <span className="font-serif italic font-normal text-white">
              background.
            </span>
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            Building a strong foundation in computer science and engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-highlight to-primary opacity-20" />
            
            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`relative transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: sectionInView ? `${(idx + 1) * 150}ms` : '0ms' }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10" />
                  
                  {/* Content Card */}
                  <div className={`md:grid md:grid-cols-2 md:gap-8 ${idx % 2 === 0 ? '' : 'md:grid-flow-dense'}` }>
                    {/* Left/Right Content */}
                    <div className={idx % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                      <TiltCard intensity={3}>
                        <div className="glass p-6 md:p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-14 h-14 rounded-xl bg-${edu.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <edu.icon className={`w-7 h-7 text-${edu.color}`} />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                                {edu.degree}
                              </h3>
                              <p className="text-muted-foreground font-medium">
                                {edu.institution}
                              </p>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">{edu.location}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">{edu.period}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span className="font-semibold text-primary">{edu.grade}</span>
                            </div>
                          </div>

                          {/* Highlights */}
                          {edu.highlights && (
                            <div className="pt-4 border-t border-border">
                              <ul className="space-y-2">
                                {edu.highlights.map((highlight, hIdx) => (
                                  <li key={hIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </TiltCard>
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
