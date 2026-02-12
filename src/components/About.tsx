import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0, 0, 0.58, 1] as const }
  })
};

const About = () => {
  return (
    <section id="sobre" className="relative overflow-hidden">
      {/* Background — disable fixed on mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${aboutBg})` }}
        role="img"
        aria-label="Material escolar e papelaria coloridos" />

      <div className="absolute inset-0 bg-background/92" />

      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-16 lg:py-24">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
            variants={fadeInUp}
            className="font-display sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 lg:text-6xl font-extrabold text-gray-950 text-5xl bg-[#eef2f6]/[0.66]">

            Sobre nós
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-12 sm:w-16 h-1 bg-accent mx-auto mb-8 sm:mb-12 rounded-full origin-center" />


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 bg-background/75 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 shadow-sm">

            <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Somos um atacado de material escolar, papelaria, artigos para escritório e bazar, oferecendo soluções completas para lojistas e empresas que buscam qualidade, variedade e confiança.
            </p>
            <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Nossa empresa nasceu em Cordilheira Alta – SC, no interior da cidade, em um pequeno município onde surgiu o sonho de construir um negócio próprio e buscar evolução profissional. Com dedicação, trabalho e visão de crescimento, transformamos essa ideia em realidade.
            </p>
            <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              Mais do que produtos, entregamos parceria. Trabalhamos com organização e agilidade, garantindo uma experiência de compra segura, prática e satisfatória — do pedido à entrega.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
            { icon: Target, title: "Missão", desc: "Oferecer produtos de material escolar, papelaria, escritório e bazar com qualidade, variedade e preços competitivos, garantindo eficiência, organização e confiança em cada negociação." },
            { icon: Eye, title: "Visão", desc: "Ser referência regional no segmento de atacado, reconhecida pela credibilidade, crescimento sustentável e excelência nos processos." },
            { icon: Heart, title: "Valores", desc: "Compromisso com clientes e parceiros, ética e transparência, organização e agilidade, qualidade nos produtos e serviços, respeito, responsabilidade e crescimento contínuo." }].
            map((item, i) =>
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow border border-border/50 last:sm:col-span-2 last:md:col-span-1 last:sm:max-w-sm last:sm:mx-auto last:md:max-w-none">

                <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 sm:mb-5">

                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </motion.div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-foreground leading-relaxed text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default About;