import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import contactBg from "@/assets/contact-bg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0, 0, 0.58, 1] as const },
  }),
};

const contactItems = [
  {
    icon: MapPin,
    title: "Endereço",
    content: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Campina do Gregório<br />
        Cordilheira Alta – SC
      </p>
    ),
  },
  {
    icon: Phone,
    title: "Telefone",
    content: (
      <a
        href="https://wa.me/5549999739747"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground text-sm hover:text-accent transition-colors"
      >
        (49) 99973-9747
      </a>
    ),
  },
  {
    icon: Mail,
    title: "E-mail",
    content: (
      <a
        href="mailto:comercialancoradistribuidora@gmail.com"
        className="text-muted-foreground text-sm hover:text-accent transition-colors break-all"
      >
        comercialancoradistribuidora@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Horário",
    content: (
      <p className="text-muted-foreground text-sm leading-relaxed">
        Segunda à sexta<br />
        08:00 às 12:00<br />
        13:30 às 18:00
      </p>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${contactBg})` }}
        role="img"
        aria-label="Prateleiras com artigos de papelaria e bazar"
      />
      <div className="absolute inset-0 bg-background/93" />

      <div className="relative z-10 section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-primary-foreground"
          >
            Entre em contato
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full origin-center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                {item.content}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm">
              CNPJ: 63.738.093/0001-76
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
