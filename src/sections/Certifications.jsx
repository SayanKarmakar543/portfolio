import { Award, ExternalLink } from "lucide-react";
import { useInView } from "@/components/useInView";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-XXXXX",
    link: "#",
    logo: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2022",
    credentialId: "IBM-XXXXX",
    link: "#",
    logo: "https://images.credly.com/size/340x340/images/84ac9eff-b8a2-4683-846b-f59887a73801/Python_101_Data_Science.png",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2023",
    credentialId: "DOCKER-XXXXX",
    link: "#",
    logo: "https://images.credly.com/size/340x340/images/4f5c7c91-9b1e-4e5e-8e5e-7c5c5c5c5c5c/docker.png",
  },
];

export const Certifications = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  
  return (
    <section ref={sectionRef} id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Certifications
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            Continuous{" "}
            <span className="font-serif italic font-normal text-white">
              learning.
            </span>
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            Professional certifications that validate my expertise in backend technologies and cloud platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`glass p-6 rounded-2xl hover:border-primary/50 border border-transparent transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: sectionInView ? `${(idx + 1) * 100}ms` : '0ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-xl bg-surface flex items-center justify-center overflow-hidden">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <a
                  href={cert.link}
                  className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
              <p className="text-xs text-primary font-mono">{cert.credentialId}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
