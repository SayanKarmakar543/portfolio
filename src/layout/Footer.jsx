import { Github, Linkedin, Heart } from "lucide-react";
import { DownloadPortfolio } from "@/components/DownloadPortfolio";

const socialLinks = [
  { icon: Github, href: "https://github.com/SayanKarmakar543", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sayan-karmakar-6469191b1/", label: "LinkedIn" },
];

const footerLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "education", label: "Education" },
  { href: "certifications", label: "Certifications" },
  { href: "contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Download Portfolio Section */}
        <div className="flex justify-center mb-12">
          <DownloadPortfolio />
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-bold tracking-tight cursor-pointer"
            >
              SK<span className="text-primary">.</span>
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Sayan Karmakar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
