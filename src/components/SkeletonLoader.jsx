export const SkeletonLoader = ({ className = "", variant = "default" }) => {
  const variants = {
    default: "h-4 w-full",
    text: "h-4 w-3/4",
    title: "h-8 w-1/2",
    circle: "h-12 w-12 rounded-full",
    card: "h-64 w-full rounded-2xl",
    image: "aspect-video w-full rounded-xl",
  };

  return (
    <div
      className={`bg-gradient-to-r from-surface via-muted to-surface bg-[length:200%_100%] animate-shimmer ${
        variants[variant]
      } ${className}`}
    />
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-fade-in">
      <SkeletonLoader variant="image" />
      <div className="p-6 space-y-4">
        <SkeletonLoader variant="title" />
        <SkeletonLoader variant="text" />
        <SkeletonLoader variant="text" className="w-1/2" />
        <div className="flex gap-2">
          <SkeletonLoader className="h-6 w-16 rounded-full" />
          <SkeletonLoader className="h-6 w-20 rounded-full" />
          <SkeletonLoader className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const SectionSkeleton = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SkeletonLoader variant="text" className="w-32 mx-auto" />
          <SkeletonLoader variant="title" className="w-2/3 mx-auto" />
          <SkeletonLoader variant="text" className="w-full mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    </div>
  );
};
