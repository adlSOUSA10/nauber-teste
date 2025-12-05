import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-2xl">N</span>
              </div>
              <span className="font-display font-bold text-2xl text-background">NAUBER</span>
            </div>
            <p className="text-background/60 max-w-sm leading-relaxed">
              Máquinas de pintura profissional que transformam a produtividade 
              e os resultados de pintores e construtoras em todo o Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-background mb-6">Produtos</h4>
            <ul className="space-y-4">
              {[
                { href: "#dx3", label: "DX-3" },
                { href: "#nb100", label: "NB-100" },
                { href: "#comparativo", label: "Comparativo" },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-background/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-background mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5500000000000" className="text-background/60 hover:text-primary transition-colors">
                  (00) 0000-0000
                </a>
              </li>
              <li>
                <a href="mailto:contato@nauber.com.br" className="text-background/60 hover:text-primary transition-colors">
                  contato@nauber.com.br
                </a>
              </li>
              <li>
                <a href="#orcamento" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Solicitar Orçamento →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Nauber. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-sm">
            Desenvolvido com excelência para profissionais de pintura.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;