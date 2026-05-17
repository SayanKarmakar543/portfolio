import { ExternalLink, Calendar, Clock } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { useInView } from "./useInView";

const articles = [
  {
    title: "Building Scalable REST APIs with FastAPI",
    description: "A comprehensive guide to building production-ready REST APIs using FastAPI, including best practices for authentication, database integration, and deployment.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    date: "2024-01-15",
    readTime: "8 min read",
    link: "#",
    tags: ["FastAPI", "Python", "API Design"],
  },
  {
    title: "Microservices Architecture with Python",
    description: "Exploring microservices patterns and implementing them using Python, Docker, and Kubernetes for scalable backend systems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    date: "2024-02-20",
    readTime: "12 min read",
    link: "#",
    tags: ["Microservices", "Docker", "Python"],
  },
  {
    title: "Database Optimization Techniques",
    description: "Advanced PostgreSQL optimization strategies including indexing, query optimization, and connection pooling for high-performance applications.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    date: "2024-03-10",
    readTime: "10 min read",
    link: "#",
    tags: ["PostgreSQL", "Database", "Performance"],
  },
];

export const BlogArticles = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="blog" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Blog & Articles
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            Sharing{" "}
            <span className="font-serif italic font-normal text-white">
              knowledge.
            </span>
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            Technical articles and insights on backend development, architecture, and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass rounded-2xl overflow-hidden hover:border-primary/50 border border-transparent transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: sectionInView ? `${(idx + 1) * 100}ms` : '0ms' }}
            >
              <div className="relative overflow-hidden aspect-video">
                <LazyImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Read Article
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-primary/30 hover:border-primary"
          >
            View All Articles
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
