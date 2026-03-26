import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
