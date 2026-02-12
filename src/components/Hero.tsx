import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax — disable fixed on mobile for performance */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Depósito de materiais escolares e papelaria da Ancora Distribuidora"
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Floating particles — hidden on small screens */}
      <div className="hidden sm:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 text-center pt-16 sm:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-bold text-primary-foreground mb-4 sm:mb-6 3xl:mb-8"
        >
          Ancora Distribuidora
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl text-primary-foreground/90 font-light max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl 3xl:max-w-5xl mx-auto mb-3 sm:mb-4 3xl:mb-6"
        >
          Atacado de material escolar, papelaria, escritório e bazar para lojistas e empresas da Região Sul
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-primary-foreground/70 text-sm sm:text-base md:text-lg 3xl:text-xl italic mb-8 sm:mb-10 3xl:mb-14"
        >
          Âncora. Onde os negócios se fortalecem.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/5549999739747"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-accent-foreground px-6 sm:px-8 3xl:px-10 py-3 sm:py-4 3xl:py-5 rounded-lg font-semibold text-base sm:text-lg 3xl:text-xl shadow-lg transition-shadow hover:shadow-xl text-center"
          >
            Solicite um orçamento
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto border-2 border-primary-foreground/40 text-primary-foreground px-6 sm:px-8 3xl:px-10 py-3 sm:py-4 3xl:py-5 rounded-lg font-semibold text-base sm:text-lg 3xl:text-xl hover:bg-primary-foreground/10 transition-colors"
          >
            Conheça a empresa
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
