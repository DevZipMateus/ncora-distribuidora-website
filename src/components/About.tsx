import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Sobre nós
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

        {/* History */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Somos um atacado de material escolar, papelaria, artigos para escritório e bazar, oferecendo soluções completas para lojistas e empresas que buscam qualidade, variedade e confiança.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Nossa empresa nasceu em Cordilheira Alta – SC, no interior da cidade, em um pequeno município onde surgiu o sonho de construir um negócio próprio e buscar evolução profissional. Com dedicação, trabalho e visão de crescimento, transformamos essa ideia em realidade.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mais do que produtos, entregamos parceria. Trabalhamos com organização e agilidade, garantindo uma experiência de compra segura, prática e satisfatória — do pedido à entrega.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">Missão</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Oferecer produtos de material escolar, papelaria, escritório e bazar com qualidade, variedade e preços competitivos, garantindo eficiência, organização e confiança em cada negociação.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">Visão</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Ser referência regional no segmento de atacado, reconhecida pela credibilidade, crescimento sustentável e excelência nos processos.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">Valores</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Compromisso com clientes e parceiros, ética e transparência, organização e agilidade, qualidade nos produtos e serviços, respeito, responsabilidade e crescimento contínuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
