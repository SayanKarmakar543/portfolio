import { Code2, GitBranch, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "./useInView";

const achievements = [
  {
    icon: Code2,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered projects",
  },
  {
    icon: GitBranch,
    value: 10000,
    suffix: "+",
    label: "Lines of Code",
    description: "Written and maintained",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Technologies Mastered",
    description: "Backend & DevOps tools",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Positive feedback rate",
  },
];

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [inView, end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Achievements = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Achievements
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            By the{" "}
            <span className="font-serif italic font-normal text-white">
              numbers.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`glass p-6 rounded-2xl text-center hover:border-primary/50 border border-transparent transition-all duration-700 group ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: sectionInView ? `${(idx + 1) * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={achievement.value} suffix={achievement.suffix} />
              </div>
              
              <div className="font-semibold mb-1">{achievement.label}</div>
              <div className="text-xs text-muted-foreground">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
