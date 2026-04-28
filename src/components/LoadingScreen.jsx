import { useEffect, useState } from "react";

export const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Name */}
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            SK<span className="text-primary glow-text">.</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Backend Engineer
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto animate-fade-in animation-delay-200">
          <div className="glass rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Loading... {progress}%
          </p>
        </div>

        {/* Animated pulse circle */}
        <div className="flex justify-center animate-fade-in animation-delay-400">
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
            <div className="relative bg-primary rounded-full w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
