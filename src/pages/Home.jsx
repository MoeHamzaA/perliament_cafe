import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Leaf, Heart } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
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

const galleryImages = [
  { src: LATTE_IMG, alt: "Barista crafting latte art" },
  { src: HERO_IMG, alt: "Parliament Cafe interior" },
  { src: PASTRY_IMG, alt: "Artisanal pastries" },
  { src: POUROVER_IMG, alt: "Pour over preparation" },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Cafe Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-background/70 mb-6 animate-fade-up">Est. 2025 — Ottawa</p>
          <h1 className="font-heading text-4xl md:text-7xl font-semibold text-background leading-[1.1] animate-fade-up">
            Elevating Downtown's<br />Coffee Culture.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up">
            <Button asChild className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:scale-105 transition-transform">
              <Link to="/menu">Explore Menu <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-background/50 text-background hover:bg-background/10">
              <Link to="/visit">Find Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Parliament - Quick Highlights */}
      <section className="py-20 lg:py-28 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Why Parliament" title="Crafted for Those Who Care" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((f, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-background border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <f.icon size={20} />
                </div>
                <h3 className="font-heading text-xl mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src={POUROVER_IMG} alt="The Craft" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-card border border-border rounded-full hidden md:flex items-center justify-center p-6 text-center shadow-xl">
                <p className="font-heading text-primary italic text-sm italic">"Uncompromising standard of quality."</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight">
                Rooted in Tradition. <br />
                <span className="text-muted-foreground italic font-light">Crafted with Passion.</span>
              </h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                <p>Welcome to Parliament Cafe, where heritage meets the art of modern coffee on historic Sparks Street.</p>
                <p>Founders Plarent and Enkelejda Kokalari trained with the <span className="text-foreground font-semibold border-b border-accent/40">Canadian Barista Institute</span> to ensure every pour is a masterpiece.</p>
              </div>
              <Button asChild className="rounded-full px-8 py-6">
                <Link to="/the-craft">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Swipeable Gallery */}
      <section className="pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {galleryImages.map((img, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-1/3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-sm group">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
}