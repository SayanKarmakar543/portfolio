import { Download, FileText } from "lucide-react";
import { useState } from "react";

export const DownloadPortfolio = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // In a real implementation, you would generate or fetch the PDF here
      // For now, we'll just download the resume
      const link = document.createElement('a');
      link.href = '/Sayan-Resume.pdf';
      link.download = 'Sayan_Karmakar_Portfolio.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-primary/30 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDownloading ? (
        <>
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span>Preparing...</span>
        </>
      ) : (
        <>
          <FileText className="w-5 h-5" />
          <span>Download Portfolio PDF</span>
          <Download className="w-4 h-4" />
        </>
      )}
    </button>
  );
};
