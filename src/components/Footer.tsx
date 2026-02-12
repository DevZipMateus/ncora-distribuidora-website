import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 sm:py-10 lg:py-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <img src={logo} alt="Logo Ancora Distribuidora" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain brightness-0 invert" />

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ancoradistribuidora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/ancoradistribuidora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-primary-foreground/80 text-xs sm:text-sm">
            <a href="tel:+5549999739747" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone size={16} className="shrink-0" />
              <span>(49) 99973-9747</span>
            </a>
            <a href="mailto:comercialancoradistribuidora@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail size={16} className="shrink-0" />
              <span className="break-all sm:break-normal">comercialancoradistribuidora@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0" />
              <span>Campina do Gregório — Cordilheira Alta, SC</span>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 w-full max-w-lg pt-4 text-center">
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              Ancora Distribuidora © {new Date().getFullYear()} — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
