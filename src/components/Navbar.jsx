import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'The Craft', path: '/the-craft' },
  { label: 'Menu', path: '/menu' },
  { label: 'Visit Us', path: '/visit' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="font-heading text-xl lg:text-2xl font-semibold tracking-tight text-foreground">
          Parliament Cafe
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-body font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg">
            <Link to="/visit">Reserve a Table</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block text-base font-body font-medium tracking-wide transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium tracking-wide mt-2">
              <Link to="/visit" onClick={() => setOpen(false)}>Reserve a Table</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}