import { X, Download, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { trackResumeDownload } from "./analytics";

export const ResumeModal = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl font-bold">Resume Preview</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Sayan Karmakar - Backend Engineer
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/Sayan-Resume.pdf"
              download="Sayan_Karmakar_Resume.pdf"
              onClick={trackResumeDownload}
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center gap-2 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-surface transition-all flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          <div className="bg-surface rounded-xl overflow-hidden">
            <iframe
              src="/Sayan-Resume.pdf"
              className="w-full h-[600px] border-0"
              title="Resume Preview"
            />
          </div>
          
          {/* Fallback message */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Can't see the preview?</p>
            <a
              href="/Sayan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1 mt-2"
            >
              Open in new tab
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
