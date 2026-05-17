import { useState } from "react";
import { useInView } from "./useInView";
import { TechLogo } from "./TechLogo";

export const InteractiveTimeline = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={sectionRef} className="relative">
      {/* Timeline line with glow */}
      <div className="timeline-glow absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative pl-20 transition-all duration-700 ${
              sectionInView ? "animate-fade-in" : "opacity-0"
            }`}
            style={{
              animationDelay: sectionInView ? `${(idx + 1) * 150}ms` : "0ms",
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-[1.875rem] top-0 w-3 h-3 rounded-full -translate-x-1/2 ring-4 ring-background z-10 transition-all duration-300 ${
                hoveredIndex === idx
                  ? "bg-primary scale-150 shadow-[0_0_20px_rgba(32,178,166,0.8)]"
                  : "bg-primary"
              }`}
            >
              {item.current && (
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              )}
            </div>

            {/* Content Card */}
            <div
              className={`glass p-6 rounded-2xl border transition-all duration-500 ${
                hoveredIndex === idx
                  ? "border-primary/50 shadow-[0_0_30px_rgba(32,178,166,0.2)] scale-[1.02]"
                  : "border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm text-primary font-medium">
                  {item.period}
                </span>
                {item.duration && (
                  <span className="text-xs text-muted-foreground bg-surface px-3 py-1 rounded-full">
                    {item.duration}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mt-2">{item.role}</h3>
              <p className="text-muted-foreground">{item.company}</p>

              {/* Description - Show more on hover */}
              <ul
                className={`mt-4 space-y-3 transition-all duration-500 ${
                  hoveredIndex === idx ? "max-h-[1000px]" : "max-h-[200px]"
                } overflow-hidden`}
              >
                {item.description.map((point, pointIdx) => (
                  <li
                    key={pointIdx}
                    className="text-sm text-muted-foreground flex gap-3"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className={`flex items-center gap-2 px-3 py-1.5 bg-surface text-xs rounded-full transition-all duration-300 ${
                      hoveredIndex === idx
                        ? "text-primary border border-primary/30"
                        : "text-muted-foreground"
                    }`}
                  >
                    <TechLogo name={tech} size="sm" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Hover indicator */}
              {hoveredIndex === idx && (
                <div className="mt-4 text-xs text-primary flex items-center gap-2 animate-fade-in">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Viewing details
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
