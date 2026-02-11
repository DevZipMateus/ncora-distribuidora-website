import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 px-4">
      <div className="container mx-auto text-center">
        <img src={logo} alt="Logo Ancora Distribuidora" className="h-14 w-14 object-contain mx-auto mb-4" />
        <p className="text-primary-foreground/70 text-sm mb-2">
          Ancora Distribuidora © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <p className="text-primary-foreground/50 text-xs">
          Campina do Gregório — Cordilheira Alta, SC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
