import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#materials", label: "Materials" },
  { href: "#locations", label: "Location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md py-3 px-5 md:px-8 lg:px-12 shadow-sm"
        : "bg-transparent py-4 md:py-6 px-5 md:px-8 lg:px-12"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-6">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/FIRST STEP LOGO PNG.png"
            alt="First Step Logo"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-12 md:h-16" : "h-20 md:h-32"
              }`}
          />
        </a>

        {/* Desktop Navigation Links - Right Aligned & Pill Shaped */}
        <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar py-2">
          <div className={`flex items-center transition-all duration-300 rounded-full ${isScrolled ? "" : "bg-white/50 backdrop-blur-md border border-black/5 shadow-md p-1"
            }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(link.href.substring(1));
                }}
                className={`px-6 py-2.5 text-sm font-heading tracking-tight rounded-full transition-all duration-300 whitespace-nowrap ${activeSection === link.href.substring(1)
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
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(link.href.substring(1));
              }}
              className="text-lg font-heading tracking-tight text-foreground py-2 border-b border-border/50 last:border-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#services"
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