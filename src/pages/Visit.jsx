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
    lines: ['Monday – Saturday: 7:00 AM – 7:00 PM', 'Sunday: 7:00 AM – 6:00 PM'],
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
    <div>
      {/* Hero Image */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={STOREFRONT_IMG}
          alt="Parliament Cafe elegant storefront exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-background/70 mb-2">Come Say Hello</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-background">Visit Us</h1>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {details.map((detail, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <detail.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{detail.title}</h3>
                <div className="space-y-1">
                  {detail.lines.map((line, j) => (
                    <p key={j} className="font-body text-base text-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-muted">
            <div className="aspect-[16/7] relative">
              <iframe
                title="Parliament Cafe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4730063069376!2d-75.6980896!3d45.4236474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff68a1a03d%3A0x5bb85a18b07f4f4d!2s189%20Sparks%20St%2C%20Ottawa%2C%20ON%20K1P%205A4!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105">
              <a
                href="https://maps.google.com/?q=189+Sparks+St+Ottawa+ON+K1P+5A4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <ArrowUpRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="We Can't Wait to Welcome You."
            description="Whether it's your first cortado or your hundredth flat white, every visit to Parliament Cafe is a moment worth savoring."
          />
        </div>
      </section>
    </div>
  );
}