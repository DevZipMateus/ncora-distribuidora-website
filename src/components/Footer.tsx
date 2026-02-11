import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-6 sm:py-8 lg:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <img src={logo} alt="Logo Ancora Distribuidora" className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain mx-auto mb-3 sm:mb-4 brightness-0 invert" />
        <p className="text-primary-foreground/70 text-xs sm:text-sm mb-1 sm:mb-2">
          Ancora Distribuidora © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <p className="text-primary-foreground/50 text-xs">
          Campina do Gregório — Cordilheira Alta, SC
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
