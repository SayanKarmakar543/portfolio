import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsExpanded(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 z-40 animate-fade-in">
      {isExpanded ? (
        <div className="glass-strong rounded-2xl p-4 shadow-2xl border border-primary/30 min-w-[280px]">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-sm">Let's Work Together!</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Available for new opportunities
              </p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="w-6 h-6 rounded-full hover:bg-surface transition-all flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            <button
              onClick={scrollToContact}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-medium"
            >
              Send Message
            </button>
            <a
              href="mailto:sayankarmakar543@gmail.com"
              className="block w-full px-4 py-2 glass rounded-lg hover:bg-surface transition-all text-sm font-medium text-center"
            >
              Email Me
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="group relative w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Hire me"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
          
          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-surface rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Hire Me!
          </span>
        </button>
      )}
    </div>
  );
};
