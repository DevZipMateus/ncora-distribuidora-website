import { BookOpen, Pen, Briefcase, Gift } from "lucide-react";
import { motion } from "framer-motion";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0, 0, 0.58, 1] as const },
  }),
};

const Products = () => {
  return (
    <section id="produtos" className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-16 lg:py-24 3xl:px-24 3xl:py-32 bg-primary">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={fadeInUp}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-primary-foreground text-center mb-3 sm:mb-4"
        >
          Nossos produtos
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 sm:w-16 h-1 bg-accent mx-auto mb-4 sm:mb-6 rounded-full origin-center"
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={1}
          variants={fadeInUp}
          className="text-primary-foreground/70 text-center max-w-xs sm:max-w-lg md:max-w-2xl 3xl:max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg 3xl:text-xl"
        >
          Trabalhamos com as melhores marcas do mercado, oferecendo variedade e preços competitivos para o seu negócio.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 3xl:gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 3xl:p-10 text-center hover:bg-primary-foreground/15 transition-colors group"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-5 group-hover:bg-accent/30 transition-colors"
              >
                <cat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-accent" />
              </motion.div>
              <h3 className="font-display text-sm sm:text-base lg:text-lg 3xl:text-xl font-bold text-primary-foreground mb-1 sm:mb-2 lg:mb-3">
                {cat.title}
              </h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm 3xl:text-base leading-relaxed hidden sm:block">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/5549999739747?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Ancora%20Distribuidora."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-6 sm:px-8 3xl:px-10 py-3 sm:py-4 3xl:py-5 rounded-lg font-semibold text-base sm:text-lg 3xl:text-xl shadow-lg transition-shadow hover:shadow-xl"
          >
            Solicite nosso catálogo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
