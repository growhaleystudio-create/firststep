import { Instagram, Mail, HelpCircle, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "WhatsApp 1", href: "https://wa.me/6281313255076", icon: MessageCircle }, // Reused MessageCircle or imported it if available, but for now assuming Mail is what was there. Wait, I should check imports.
    { label: "WhatsApp 2", href: "https://wa.me/6281573499548", icon: MessageCircle },
    { label: "Instagram", href: "https://instagram.com/firststep.clean", icon: Instagram },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 container-padding rounded-[3rem] mx-4 mb-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo & Tagline */}
          <div>
            <img
              src="/FIRST STEP LOGO PNG.png"
              alt="First Step Logo"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-secondary-foreground/60 text-sm">
              Premium Shoe Care Service
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 md:gap-10">
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
            <div className="text-sm text-secondary-foreground/70">
              <p className="font-bold mb-2">Visit Us:</p>
              <p>Jl. Maleer 2 No. 3 (belakang Kampus Piksi Ganesha),</p>
              <p>Gatot Subroto, Kota Bandung</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <p className="text-md md:text-md font-bold text-secondary-foreground/40 text-center md:text-left">
            © 2026 First Step Inc. All rights reserved.
          </p>
          <p className="text-md md:text-md font-bold text-secondary-foreground/40 text-center md:text-left">
            Designed with ❤️ From <a href="https://growhaley.com">Growhaley</a> 🐋.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;