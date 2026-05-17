import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useMemo, useState } from "react";
import { LazyImage } from "@/components/LazyImage";
import { useInView } from "@/components/useInView";
import { ParallaxBackground } from "@/components/ParallaxElement";
import { ResumeModal } from "@/components/ResumeModal";
import { TiltCard } from "@/components/TiltCard";

const calculateYearsOfExperience = () => {
  const startDate = new Date(2022, 7); // August 2022
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  const totalMonths = years * 12 + months;
  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  
  if (totalYears === 0) {
    return `${remainingMonths}mo`;
  } else if (remainingMonths === 0) {
    return `${totalYears}yr`;
  } else {
    return `${totalYears}yr ${remainingMonths}mo`;
  }
};

export const Hero = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ threshold: 0.2 });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  
  const dots = useMemo(() => [
    { left: 10, top: 20, duration: 20, delay: 0 },
    { left: 30, top: 40, duration: 25, delay: 1 },
    { left: 50, top: 60, duration: 18, delay: 2 },
    { left: 70, top: 80, duration: 22, delay: 3 },
    { left: 90, top: 10, duration: 19, delay: 4 },
    { left: 15, top: 70, duration: 21, delay: 0.5 },
    { left: 35, top: 90, duration: 23, delay: 1.5 },
    { left: 55, top: 30, duration: 17, delay: 2.5 },
    { left: 75, top: 50, duration: 24, delay: 3.5 },
    { left: 5, top: 85, duration: 20, delay: 4.5 },
    { left: 25, top: 15, duration: 18, delay: 0.8 },
    { left: 45, top: 75, duration: 22, delay: 1.8 },
    { left: 65, top: 5, duration: 19, delay: 2.8 },
    { left: 85, top: 65, duration: 21, delay: 3.8 },
    { left: 12, top: 45, duration: 23, delay: 0.3 },
    { left: 32, top: 25, duration: 17, delay: 1.3 },
    { left: 52, top: 95, duration: 24, delay: 2.3 },
    { left: 72, top: 35, duration: 20, delay: 3.3 },
    { left: 92, top: 55, duration: 18, delay: 4.3 },
    { left: 8, top: 78, duration: 22, delay: 0.6 },
    { left: 28, top: 8, duration: 19, delay: 1.6 },
    { left: 48, top: 88, duration: 21, delay: 2.6 },
    { left: 68, top: 18, duration: 23, delay: 3.6 },
    { left: 88, top: 68, duration: 17, delay: 4.6 },
    { left: 18, top: 38, duration: 24, delay: 0.9 },
    { left: 38, top: 58, duration: 20, delay: 1.9 },
    { left: 58, top: 28, duration: 18, delay: 2.9 },
    { left: 78, top: 48, duration: 22, delay: 3.9 },
    { left: 98, top: 78, duration: 19, delay: 4.9 },
    { left: 6, top: 12, duration: 21, delay: 0.2 },
  ], []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <ParallaxBackground className="absolute inset-0">
        <LazyImage
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
          placeholderClassName="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </ParallaxBackground>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className={`transition-all duration-700 ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Actively Looking • Python Backend / GenAI / Agentic AI Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${heroInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
                Hi, I'm <span className="text-primary glow-text">Sayan Karmakar</span>
              </h1>
              <p className={`text-2xl md:text-3xl text-muted-foreground transition-all duration-700 ${heroInView ? 'animate-fade-in animation-delay-150' : 'opacity-0'}`}>
                Backend Engineer specializing in Python & FastAPI
              </p>
              <p className={`text-lg text-muted-foreground max-w-lg transition-all duration-700 ${heroInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
                I build scalable, performant backend systems that power enterprise applications with {calculateYearsOfExperience()} years of experience in product development.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 transition-all duration-700 ${heroInView ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton onClick={() => setIsResumeModalOpen(true)}>
                <Download className="w-5 h-5" />
                View Resume
              </AnimatedBorderButton>
              <a href="/Sayan-Resume.pdf" download="Sayan_Karmakar_Resume.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className={`flex items-center gap-4 transition-all duration-700 ${heroInView ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/SayanKarmakar543" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sayan-karmakar-6469191b1/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div ref={imageRef} className={`relative transition-all duration-700 ${imageInView ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <TiltCard intensity={8}>
                <div className="relative glass rounded-3xl p-2 glow-border group">
                  <LazyImage
                    src="/sayan-portfolio-photo.jpg"
                    alt="Sayan Karmakar"
                    className="w-full aspect-[4/5] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">
                        Available for work
                      </span>
                    </div>
                  </div>
                  {/* Stats Badge */}
                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                    <div className="text-2xl font-bold text-primary">{calculateYearsOfExperience()}</div>
                    <div className="text-xs text-muted-foreground">
                      Years Exp.
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
      
      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  );
};
