import { Code2, Briefcase, Rocket, Award } from "lucide-react";
import { useInView } from "./useInView";
import { useEffect, useState } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, once: true });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const startCount = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const metrics = [
  {
    icon: Briefcase,
    label: "Years Experience",
    value: 2.5,
    suffix: "+",
    color: "from-primary to-primary/70",
  },
  {
    icon: Code2,
    label: "Projects Completed",
    value: 15,
    suffix: "+",
    color: "from-highlight to-highlight/70",
  },
  {
    icon: Rocket,
    label: "APIs Built",
    value: 25,
    suffix: "+",
    color: "from-primary to-primary/70",
  },
  {
    icon: Award,
    label: "Technologies",
    value: 12,
    suffix: "+",
    color: "from-highlight to-highlight/70",
  },
];

export const MetricsDashboard = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`glass p-6 rounded-2xl text-center hover:border-primary/50 border border-transparent transition-all duration-700 hover:scale-105 ${
                sectionInView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <metric.icon className="w-7 h-7 text-primary" />
              </div>
              
              <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                <CountUp end={metric.value} suffix={metric.suffix} />
              </div>
              
              <div className="text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
