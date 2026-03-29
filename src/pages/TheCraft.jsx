import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Award, Quote, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const FOUNDERS_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/099e91086_generated_1c43ff94.png';
const LATTE_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/a25b97c5a_generated_5f5aabe1.png';

const values = [
  {
    number: '01',
    title: 'Sourced with Intention',
    description: 'We partner directly with farms in Ethiopia, Colombia, and Guatemala to bring you beans with provenance and integrity.',
  },
  {
    number: '02',
    title: 'Roasted for Character',
    description: 'Small-batch roasting allows us to unlock the unique tasting notes hidden in every origin — from bright citrus to deep chocolate.',
  },
  {
    number: '03',
    title: 'Served with Precision',
    description: 'Trained at the Canadian Barista Institute, our team pulls every shot with meticulous care and consistency.',
  },
];

export default function TheCraft() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-up">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-accent mb-4">Our Story</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
                Rooted in Tradition.<br />
                <span className="italic font-normal text-muted-foreground">Crafted with Passion.</span>
              </h1>
              <div className="mt-8 space-y-5">
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  Welcome to Parliament Cafe, a space where heritage meets the art of modern coffee. Nestled on historic Sparks Street, we believe that every cup tells a story.
                </p>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our founders trained meticulously with the <strong className="text-foreground">Canadian Barista Institute</strong> to bring an uncompromising standard of quality to downtown Ottawa.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border italic relative mt-6">
                  <Quote className="absolute -top-3 -left-3 text-accent/20 w-8 h-8" />
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    "I received the 2-day training with the Canadian Barista Institute and I loved it. Jamie was very knowledgeable and the class was very informative. I enjoyed every minute of the training."
                  </p>
                  <p className="mt-4 text-xs font-semibold not-italic uppercase tracking-widest text-accent">— Parliament Café Founder</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
              <img
                src={FOUNDERS_IMG}
                alt="Parliament Cafe Founders"
                className="w-full h-full object-cover aspect-[3/4] lg:aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Divider Image */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden aspect-[21/9] shadow-inner relative">
          <img
            src={LATTE_IMG}
            alt="Detailed latte art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* Values / Process Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            title="From Bean to Cup"
            description="Every step in our process is deliberate, ensuring that every sip delivers something extraordinary."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
            {values.map((v) => (
              <div key={v.number} className="group p-8 bg-card rounded-2xl border border-border/50 hover:shadow-md transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading text-4xl font-semibold text-accent/20 group-hover:text-accent transition-colors duration-500">
                    {v.number}
                  </span>
                  <div className="h-px flex-1 bg-border group-hover:bg-accent/30 transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-24 px-6 mb-12 rounded-3xl mx-6 max-w-7xl lg:mx-auto overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-background/5 rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold">Taste the Difference.</h2>
          <p className="font-body text-base md:text-lg opacity-80 mt-4 max-w-lg mx-auto leading-relaxed">
            Come in, slow down, and let us pour you something special in the heart of downtown Ottawa.
          </p>
          <Button asChild className="mt-8 bg-background text-primary hover:bg-background/90 rounded-full px-8 py-6 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Link to="/menu">
              View Our Menu <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}