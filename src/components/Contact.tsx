import { MapPin, Phone, Mail, Clock } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section id="contato" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="Prateleiras com artigos de papelaria e bazar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/93" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Entre em contato
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Endereço</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Campina do Gregório<br />
                Cordilheira Alta – SC
              </p>
            </div>

            <div className="text-center bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Telefone</h3>
              <a
                href="https://wa.me/5549999739747"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-accent transition-colors"
              >
                (49) 99973-9747
              </a>
            </div>

            <div className="text-center bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">E-mail</h3>
              <a
                href="mailto:comercialancoradistribuidora@gmail.com"
                className="text-muted-foreground text-sm hover:text-accent transition-colors break-all"
              >
                comercialancoradistribuidora@gmail.com
              </a>
            </div>

            <div className="text-center bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Horário</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Segunda à sexta<br />
                08:00 às 12:00<br />
                13:30 às 18:00
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              CNPJ: 63.738.093/0001-76
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
