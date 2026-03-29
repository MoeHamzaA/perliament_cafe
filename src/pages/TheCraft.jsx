import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-accent mb-4">Our Story</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
                Rooted in Tradition.<br />
                <span className="italic font-normal">Crafted with Passion.</span>
              </h1>
              <div className="mt-8 space-y-5">
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  Welcome to Parliament Cafe, a space where heritage meets the art of modern coffee. Nestled on historic Sparks Street, we believe that every cup tells a story.
                </p>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our founders, <strong className="text-foreground">Plarent and Enkelejda Kokalari</strong>, trained meticulously with the Canadian Barista Institute to bring an uncompromising standard of quality to downtown Ottawa.
                </p>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  From our carefully pulled espressos to our warm, inviting atmosphere, we've created a space for those who appreciate the craft.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={FOUNDERS_IMG}
                alt="Plarent and Enkelejda Kokalari, founders of Parliament Cafe"
                className="w-full h-full object-cover aspect-[3/2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider Image */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden aspect-[21/8]">
          <img
            src={LATTE_IMG}
            alt="Detailed latte art in a ceramic cup"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values / Process */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            title="From Bean to Cup"
            description="Every step in our process is deliberate, ensuring that every sip delivers something extraordinary."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((v) => (
              <div key={v.number} className="group">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-heading text-4xl font-semibold text-accent/40 group-hover:text-accent transition-colors duration-500">
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

      {/* CTA */}
      <section className="bg-muted py-20 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Taste the Difference.</h2>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Come in, slow down, and let us pour you something special.
          </p>
          <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Link to="/menu">
              View Our Menu <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}