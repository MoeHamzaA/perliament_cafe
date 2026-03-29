import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Leaf, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const HERO_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/a1757e9b5_generated_d448163f.png';
const LATTE_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/a25b97c5a_generated_5f5aabe1.png';
const PASTRY_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/01438b77f_generated_7b1f4926.png';
const POUROVER_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/cc2211990_generated_51a7ddbb.png';

const features = [
  {
    icon: Coffee,
    title: 'Specialty Espresso',
    description: 'Meticulously pulled shots from single-origin beans, roasted to perfection.',
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    description: 'Direct-trade partnerships with farmers who share our values of quality and sustainability.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'More than coffee — a gathering place for neighbours, friends, and creatives alike.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Warm, atmospheric Parliament Cafe interior with soft golden lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-background/70 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Est. 2025 — Ottawa, Canada
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-background leading-[1.1] opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Elevating Downtown's<br />Coffee Culture.
          </h1>
          <p
            className="font-body text-lg md:text-xl text-background/80 mt-6 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            A sanctuary of craft and community on Sparks Street.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105">
              <Link to="/menu">
                Explore the Menu <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 text-sm font-medium tracking-wide bg-transparent border-background/50 text-background hover:bg-background/15 hover:text-background hover:border-background transition-all duration-300">
              <Link to="/visit">Find Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why Parliament"
            title="Crafted for Those Who Care"
            description="Every detail in our space — from the beans we source to the cups we serve — reflects our commitment to excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group text-center p-8 lg:p-10 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Preview */}
      <section className="px-6 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={LATTE_IMG}
                alt="Barista crafting latte art with steamed milk"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={PASTRY_IMG}
                alt="Artisanal pastries and fresh croissants"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={POUROVER_IMG}
                alt="Pour over coffee preparation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Your Table Awaits on Sparks Street.
          </h2>
          <p className="font-body text-base md:text-lg opacity-80 mt-4 max-w-lg mx-auto leading-relaxed">
            Come experience the warmth, the craft, and the community. We can't wait to welcome you.
          </p>
          <Button asChild variant="outline" className="mt-8 rounded-full px-8 py-6 text-sm font-medium tracking-wide bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground hover:border-primary-foreground transition-all duration-300 hover:scale-105">
            <Link to="/visit">
              Plan Your Visit <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}