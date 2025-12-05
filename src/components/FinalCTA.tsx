import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="orcamento" className="py-20 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-accent text-accent-foreground font-semibold px-6 py-2 rounded-full text-sm mb-6 animate-pulse-glow">
            OFERTA ESPECIAL
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6">
            Transforme Sua Pintura Hoje Mesmo
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Não perca mais tempo e dinheiro com métodos ultrapassados. 
            Solicite agora seu orçamento e descubra como as máquinas Nauber 
            podem revolucionar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="xl" className="text-lg" asChild>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Solicitar Orçamento via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a
              href="tel:+5500000000000"
              className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl p-4 transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground">(00) 0000-0000</span>
            </a>
            <a
              href="mailto:contato@nauber.com.br"
              className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl p-4 transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground">contato@nauber.com.br</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-6">Garantias Nauber</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Garantia", value: "1 Ano" },
                { label: "Suporte", value: "Técnico Especializado" },
                { label: "Entrega", value: "Para Todo Brasil" },
                { label: "Pagamento", value: "Facilitado" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-2xl font-bold text-accent">{item.value}</p>
                  <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
