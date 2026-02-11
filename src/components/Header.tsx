import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Vitrine", href: "/vitrine" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <a href="/" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); handleClick("#inicio"); }}>
          <img src={logo} alt="Logo Ancora Distribuidora" className="h-12 w-12 object-contain" />
          <span className="font-display text-lg font-bold text-primary hidden sm:block">
            Ancora Distribuidora
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-foreground/80 hover:text-accent font-medium transition-colors text-sm tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5549999739747"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left py-3 text-foreground/80 hover:text-accent font-medium transition-colors border-b border-border/50"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5549999739747"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
