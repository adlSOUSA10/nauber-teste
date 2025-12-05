const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl text-background">NAUBER</span>
            </div>
            <p className="text-background/60 max-w-sm">
              Máquinas de pintura profissional que transformam a produtividade 
              e os resultados de pintores e construtoras em todo o Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#dx3" className="text-background/60 hover:text-accent transition-colors">
                  DX-3
                </a>
              </li>
              <li>
                <a href="#nb100" className="text-background/60 hover:text-accent transition-colors">
                  NB-100
                </a>
              </li>
              <li>
                <a href="#comparativo" className="text-background/60 hover:text-accent transition-colors">
                  Comparativo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+5500000000000" className="text-background/60 hover:text-accent transition-colors">
                  (00) 0000-0000
                </a>
              </li>
              <li>
                <a href="mailto:contato@nauber.com.br" className="text-background/60 hover:text-accent transition-colors">
                  contato@nauber.com.br
                </a>
              </li>
              <li>
                <a href="#orcamento" className="text-background/60 hover:text-accent transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Nauber. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
