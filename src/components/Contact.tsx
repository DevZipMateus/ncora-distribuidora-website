import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import contactBg from "@/assets/contact-bg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0, 0, 0.58, 1] as const }
  })
};

const contactItems = [
{
  icon: MapPin,
  title: "Endereço",
  content:
  <p className="text-xs leading-relaxed text-gray-950 sm:text-base">
        Campina do Gregório<br />
        Cordilheira Alta – SC
      </p>

},
{
  icon: Phone,
  title: "Telefone",
  content:
  <a
    href="https://wa.me/5549999739747"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs transition-colors text-gray-950 sm:text-base">

        (49) 99973-9747
      </a>

},
{
  icon: Mail,
  title: "E-mail",
  content:
  <a
    href="mailto:comercialancoradistribuidora@gmail.com"
    className="text-xs transition-colors break-all text-gray-950 sm:text-base">

        comercialancoradistribuidora@gmail.com
      </a>

},
{
  icon: Clock,
  title: "Horário",
  content:
  <p className="text-xs leading-relaxed text-gray-950 sm:text-base">
        Segunda à sexta<br />
        08:00 às 12:00<br />
        13:30 às 18:00
      </p>

}];


const Contact = () => {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${contactBg})` }}
        role="img"
        aria-label="Prateleiras com artigos de papelaria e bazar" />

      <div className="absolute inset-0 bg-background/93" />

      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-16 lg:py-24">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
            variants={fadeInUp}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-primary-foreground">

            Entre em contato
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-12 sm:w-16 h-1 bg-accent mx-auto mb-8 sm:mb-12 rounded-full origin-center" />


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-5xl mx-auto">
            {contactItems.map((item, i) =>
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center bg-card/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-border/50 hover:shadow-lg transition-shadow">

                <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">

                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </motion.div>
                <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold text-primary mb-1 sm:mb-2">{item.title}</h3>
                {item.content}
              </motion.div>
            )}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="text-center mt-6 sm:mt-8">

            <p className="text-muted-foreground text-xs sm:text-sm">
              CNPJ: 63.738.093/0001-76
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default Contact;