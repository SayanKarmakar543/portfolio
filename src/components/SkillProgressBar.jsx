import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export const SkillProgressBar = ({ skill, percentage, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, once: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-primary font-semibold">
          {inView ? progress : 0}%
        </span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

export const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.3, once: true });

  return (
    <div
      ref={ref}
      className={`glass p-6 rounded-2xl hover:border-primary/50 border border-transparent transition-all duration-700 ${
        inView ? "animate-fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <SkillProgressBar
            key={idx}
            skill={skill.name}
            percentage={skill.level}
            delay={delay + idx * 100}
          />
        ))}
      </div>
    </div>
  );
};
