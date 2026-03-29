export default function MenuCategory({ title, subtitle, items }) {
  return (
    <div>
      <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">{title}</h3>
      {subtitle && (
        <p className="font-body text-sm text-muted-foreground mb-8">{subtitle}</p>
      )}
      <div className="space-y-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="group flex items-start justify-between gap-4 py-5 border-b border-border/60 last:border-0 hover:bg-muted/30 -mx-4 px-4 rounded-lg transition-colors duration-300"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-body text-base font-medium text-foreground">{item.name}</h4>
                {item.featured && (
                  <span className="text-[10px] uppercase tracking-wider font-body font-semibold bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                    Signature
                  </span>
                )}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
            </div>
            <span className="font-body text-sm font-medium text-foreground whitespace-nowrap mt-0.5">
              {item.price !== 'Varies' ? `$${item.price}` : item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}