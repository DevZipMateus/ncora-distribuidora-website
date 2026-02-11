import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Depósito de materiais escolares e papelaria da Ancora Distribuidora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Ancora Distribuidora
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl text-primary-foreground/90 font-light max-w-3xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Atacado de material escolar, papelaria, escritório e bazar para lojistas e empresas da Região Sul
        </h2>
        <p className="text-primary-foreground/70 text-base md:text-lg italic mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Âncora. Onde os negócios se fortalecem.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="https://wa.me/5549999739747"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Solicite um orçamento
          </a>
          <button
            onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Conheça a empresa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
