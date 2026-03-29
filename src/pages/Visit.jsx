import { MapPin, Clock, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '../components/SectionHeading';

const STOREFRONT_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/a3c7a139c_generated_a5633a43.png';

const details = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['189 Sparks St.', 'Ottawa, ON K1P 5A4'],
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Mon – Sat: 7:00 AM – 7:00 PM', 'Sun: 7:00 AM – 6:00 PM'],
  },
  {
    icon: Phone,
    title: 'Contact',
    lines: ['hello@parliamentcafe.ca', '(613) 555-0189'],
  },
  {
    icon: Instagram,
    title: 'Social',
    lines: ['@parliament_cafe'],
  },
];

export default function Visit() {
  return (
    <div className="bg-background">
      {/* Hero Image - Refined with elegant bottom-aligned typography */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden flex items-end">
        <img
          src={STOREFRONT_IMG}
          alt="Parliament Cafe elegant storefront exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="relative z-10 w-full pb-12 lg:pb-20 px-6">
          <div className="max-w-7xl mx-auto animate-fade-up">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-4">Come Say Hello</p>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold text-foreground leading-tight">
              Visit Us
            </h1>
          </div>
        </div>
      </section>

      {/* Details Grid - Polished into modern cards */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {details.map((detail, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-card border border-border/50 hover:shadow-md transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <detail.icon size={20} className="group-hover:text-current text-primary" />
                </div>
                <h3 className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{detail.title}</h3>
                <div className="space-y-1">
                  {detail.lines.map((line, j) => (
                    <p key={j} className="font-body text-base font-medium text-foreground leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Fixed with real Google Maps data */}
      <section className="px-6 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-muted relative">
            <div className="aspect-[16/8] lg:aspect-[21/9] relative">
              <iframe
                title="Parliament Cafe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2743958994784!2d-75.7008544!3d45.4216345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05ab1c13d963%3A0xc069cc8768786498!2s189%20Sparks%20St.%2C%20Ottawa%2C%20ON%20K1P%205A4!5e0!3m2!1sen!2sca!4v1711200000000!5m2!1sen!2sca"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=189+Sparks+St+Ottawa+ON+K1P+5A4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <ArrowUpRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Warm and inviting closing */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center py-20 rounded-[3rem] bg-card border border-border/40 shadow-sm">
          <SectionHeading
            title="We Can't Wait to Welcome You."
            description="Whether it's your first cortado or your hundredth flat white, every visit to Parliament Cafe is a moment worth savoring."
          />
          <div className="mt-10">
             <Button variant="outline" asChild className="rounded-full px-8 py-6 border-primary/20 hover:bg-primary/5 text-primary">
                <a href="https://instagram.com/parliament_cafe" target="_blank" rel="noopener noreferrer">
                  Follow @parliament_cafe
                </a>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}