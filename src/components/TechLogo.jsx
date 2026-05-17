export const TechLogo = ({ name, size = "md" }) => {
  const sizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  // Tech logo mapping with CDN URLs
  const techLogos = {
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "Django REST Framework": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    JWT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
    OAuth: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",
    Swagger: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    SQLAlchemy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  };

  const logoUrl = techLogos[name];

  if (!logoUrl) {
    // Fallback to text if logo not found
    return (
      <span className="text-xs font-medium text-muted-foreground">{name}</span>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={name}
      className={`${sizes[size]} object-contain`}
      title={name}
      loading="lazy"
    />
  );
};

export const TechStack = ({ technologies, size = "md", showLabels = true }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {technologies.map((tech, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface hover:bg-surface/80 transition-all border border-border/50 hover:border-primary/50 group"
        >
          <TechLogo name={tech} size={size} />
          {showLabels && (
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              {tech}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
