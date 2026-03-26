import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section className="w-full">
          <iframe
            src="https://ancoradistribuidora.egestor.com.br/vitrine/"
            title="Vitrine Âncora Distribuidora"
            className="w-full border-none"
            style={{ height: "clamp(600px, 85vw, 1400px)" }}
          />
        </section>
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
