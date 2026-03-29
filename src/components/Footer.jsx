import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Parliament Cafe</h3>
            <p className="font-body text-sm leading-relaxed opacity-70 max-w-xs">
              A sanctuary of craft and community, elevating downtown Ottawa's coffee culture one cup at a time.
            </p>
            <a
              href="https://instagram.com/parliament_cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-body opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Instagram size={18} />
              @parliament_cafe
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Explore</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'The Craft', path: '/the-craft' },
                { label: 'Menu', path: '/menu' },
                { label: 'Visit Us', path: '/visit' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm font-body opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Visit</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 opacity-70 shrink-0" />
                <p className="text-sm font-body opacity-70">
                  189 Sparks St.<br />Ottawa, ON K1P 5A4
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 opacity-70 shrink-0" />
                <div className="text-sm font-body opacity-70">
                  <p>Mon – Sat: 7:00 AM – 7:00 PM</p>
                  <p>Sunday: 7:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body opacity-40">
            © {new Date().getFullYear()} Parliament Cafe. All rights reserved.
          </p>
          <p className="text-xs font-body opacity-40">
            Website beautifully crafted by MHA Studios. Demonstrational Mockup.
          </p>
        </div>
      </div>
    </footer>
  );
}