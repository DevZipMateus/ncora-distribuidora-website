import { BookOpen, Pen, Briefcase, Gift } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Material escolar",
    description: "Cadernos, mochilas, lápis, borrachas, réguas e tudo para a volta às aulas.",
  },
  {
    icon: Pen,
    title: "Papelaria",
    description: "Papéis, envelopes, cartolinas, adesivos, fitas e materiais criativos.",
  },
  {
    icon: Briefcase,
    title: "Artigos para escritório",
    description: "Canetas, grampeadores, pastas, organizadores e suprimentos profissionais.",
  },
  {
    icon: Gift,
    title: "Bazar",
    description: "Itens variados para o dia a dia, presentes e utilidades domésticas.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-primary">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
          Nossos produtos
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
        <p className="text-primary-foreground/70 text-center max-w-2xl mx-auto mb-12 text-lg">
          Trabalhamos com as melhores marcas do mercado, oferecendo variedade e preços competitivos para o seu negócio.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/30 transition-colors">
                <cat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
                {cat.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5549999739747?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Ancora%20Distribuidora."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Solicite nosso catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
