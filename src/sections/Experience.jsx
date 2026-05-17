import { useInView } from "@/components/useInView";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { TechLogo } from "@/components/TechLogo";

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
    return `${totalYears} year${totalYears !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  }
};

export const Experience = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  
  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className={`text-secondary-foreground text-sm
           font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            Career Journey
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold
           mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className={`text-muted-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <InteractiveTimeline items={experiences.map(exp => ({
          ...exp,
          duration: exp.current && exp.startDate ? calculateDuration(exp.startDate) : null
        }))} />
      </div>
    </section>
  );
};
