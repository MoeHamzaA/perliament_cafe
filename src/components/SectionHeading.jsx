export default function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}>
      {eyebrow && (
        <p className="font-body text-xs uppercase tracking-[0.25em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}