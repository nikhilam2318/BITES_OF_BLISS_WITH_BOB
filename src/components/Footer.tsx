import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8 px-4 md:px-8 border-t border-white/10">
      <div className="container-narrow mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            {/* Logo Image Replaces Text */}
            <div className="mb-2">
              <img 
                src="/images/logo.png" 
                alt="Bites of Bliss" 
                className="h-16 w-auto rounded-full" 
              />
            </div>
            
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Bringing the vibrant energy of Indian street food fused with English classics to your neighborhood.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/bob_bitesofbliss?igsh=MWl0bTk1cHFjcXIz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1EyUhirxEN/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>119 Gosford Street, Coventry, CV1 5DL</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>577 Stoney Stanton Rd, Coventry, CV6 5ED</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+447350739707" className="hover:text-accent transition-colors">+44 7350 739707</a>
                  <a href="tel:+447825229301" className="hover:text-accent transition-colors">+44 7825 229301</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:bitesofblissbob@gmail.com" className="hover:text-accent transition-colors">
                  bitesofblissbob@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 w-full mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Bites of Bliss with BOB. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;