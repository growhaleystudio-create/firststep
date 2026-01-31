import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#cleaning", label: "Cleaning" },
  { href: "#repair", label: "Repair" },
  { href: "#repaint", label: "Repaint" },
  { href: "#promo", label: "Promo" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-background py-6 px-5 md:px-8 lg:px-12 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-6">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
            FIRSTSTEP
          </span>
        </a>

        {/* Desktop Navigation Links - Right Aligned & Pill Shaped */}
        <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar py-2">
          <div className="flex items-center bg-white/50 backdrop-blur-md border border-black/5 shadow-md p-1 rounded-full">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-6 py-2.5 text-sm rounded-full transition-all duration-300 whitespace-nowrap ${index === 0
                  ? "bg-primary text-primary-foreground font-bold shadow-md"
                  : "text-foreground/70 font-medium hover:text-foreground hover:bg-black/5"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-2xl p-6 md:hidden flex flex-col gap-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#promo"
            className="mt-2 w-full btn-pill-primary justify-center py-3"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;