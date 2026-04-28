const experiences = [
  {
    period: "Aug 2022 — Present",
    role: "Product Development Engineer",
    company: "ADP",
    startDate: new Date(2022, 7), // August 2022 (month is 0-indexed)
    description: [
      "Developed enterprise HR workflows and data pipelines for an internal ADP platform, implementing complex business rules, validations, and role-based access across multiple modules.",
      "Designed and managed relational data models for HR-related entities, ensuring data integrity, efficient querying, and seamless integration across internal services.",
      "Worked with containerized development environments and CI workflows to maintain consistency across development, testing, and deployment stages.",
      "Collaborated closely with product managers, QA engineers, and business stakeholders to translate functional requirements into scalable backend features.",
      "Actively contributed to debugging, enhancement, and optimization of existing modules to improve reliability and performance of internal systems.",
    ],
    technologies: ["Python", "FastAPI", "Django", "PostgreSQL", "AWS", "Docker"],
    current: true,
  },
];

const calculateDuration = (startDate) => {
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  const totalMonths = years * 12 + months;
  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  
  if (totalYears === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${totalYears} year${totalYears !== 1 ? 's' : ''}`;
  } else {
    return `${totalYears}.${Math.floor(remainingMonths / 12 * 10)}+ years`;
  }
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-20 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[1.875rem] top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      {exp.current && exp.startDate && (
                        <span className="text-xs text-muted-foreground bg-surface px-3 py-1 rounded-full">
                          {calculateDuration(exp.startDate)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    
                    <ul className="mt-4 space-y-3">
                      {exp.description.map((point, pointIdx) => (
                        <li key={pointIdx} className="text-sm text-muted-foreground flex gap-3">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
