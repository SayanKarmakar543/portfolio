import { X, Calendar, Clock, Video } from "lucide-react";
import { useEffect } from "react";

export const CalendarModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] glass-strong rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold">Schedule a Meeting</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Choose a convenient time to discuss opportunities
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-surface transition-all flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Meeting Options */}
        <div className="p-6 border-b border-border">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass p-4 rounded-xl">
              <Calendar className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-sm mb-1">15 Min Call</h3>
              <p className="text-xs text-muted-foreground">Quick introduction</p>
            </div>
            <div className="glass p-4 rounded-xl border border-primary/30">
              <Clock className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-sm mb-1">30 Min Call</h3>
              <p className="text-xs text-muted-foreground">Detailed discussion</p>
            </div>
            <div className="glass p-4 rounded-xl">
              <Video className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-sm mb-1">60 Min Call</h3>
              <p className="text-xs text-muted-foreground">Technical interview</p>
            </div>
          </div>
        </div>

        {/* Calendar Embed */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-280px)]">
          <div className="bg-surface rounded-xl overflow-hidden min-h-[500px] flex items-center justify-center">
            {/* Calendly Embed - Replace with your Calendly link */}
            <div className="text-center p-8">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                To enable calendar booking, add your Calendly or Cal.com embed code here.
              </p>
              
              {/* Instructions */}
              <div className="glass p-6 rounded-xl text-left max-w-lg mx-auto">
                <h4 className="font-semibold mb-3 text-sm">Setup Instructions:</h4>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Create a free account on Calendly.com or Cal.com</li>
                  <li>Set up your availability and meeting types</li>
                  <li>Get your embed code</li>
                  <li>Replace this placeholder with the iframe embed</li>
                </ol>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Example embed code:</p>
                  <code className="text-xs bg-background p-2 rounded block overflow-x-auto">
                    {`<iframe src="https://calendly.com/your-link" />`}
                  </code>
                </div>
              </div>
              
              {/* Temporary direct links */}
              <div className="mt-6 space-y-2">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all text-sm font-medium"
                >
                  <Calendar className="w-4 h-4" />
                  Create Calendly Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
