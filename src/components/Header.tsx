import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-xl">N</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">NAUBER</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#dx3" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              DX-3
            </a>
            <a href="#nb100" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              NB-100
            </a>
            <a href="#comparativo" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Comparativo
            </a>
            <a href="#para-quem" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Para Quem
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#orcamento">Solicitar Orçamento</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#dx3" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                DX-3
              </a>
              <a href="#nb100" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                NB-100
              </a>
              <a href="#comparativo" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Comparativo
              </a>
              <a href="#para-quem" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Para Quem
              </a>
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href="#orcamento">Solicitar Orçamento</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
