import { Instagram, Mail, HelpCircle } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "FAQ", href: "#", icon: HelpCircle },
    { label: "Contact", href: "#", icon: Mail },
    { label: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 container-padding rounded-[3rem] mx-4 mb-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo & Tagline */}
          <div>
            <span className="text-2xl md:text-3xl font-black tracking-tight block mb-2">
              FIRSTSTEP
            </span>
            <p className="text-secondary-foreground/60 text-sm">
              Premium Shoe Care Service
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                <link.icon size={16} />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <p className="text-md md:text-md font-bold text-secondary-foreground/40 text-center md:text-left">
            © 2026 First Step Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;