import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle, Shield, Truck, CreditCard, Headphones } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="orcamento" className="py-12 md:py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            OFERTA ESPECIAL
          </span>
          
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Transforme Sua Pintura Hoje Mesmo
          </h2>
          
          <p className="text-lg text-primary-foreground/75 mb-8 max-w-2xl mx-auto leading-relaxed">
            Não perca mais tempo e dinheiro com métodos ultrapassados. 
            Solicite agora seu orçamento e descubra como as máquinas Nauber 
            podem revolucionar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button variant="ctaWhite" size="lg" className="text-base" asChild>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto mb-10">
            <a href="tel:+5500000000000" className="flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 rounded-xl p-4 transition-all hover:-translate-y-1">
              <Phone className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground font-medium text-sm">(00) 0000-0000</span>
            </a>
            <a href="mailto:contato@nauber.com.br" className="flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 rounded-xl p-4 transition-all hover:-translate-y-1">
              <Mail className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground font-medium text-sm">contato@nauber.com.br</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-xs mb-6 uppercase tracking-wider">Garantias Nauber</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Garantia", value: "1 Ano" },
                { icon: Headphones, label: "Suporte", value: "Especializado" },
                { icon: Truck, label: "Entrega", value: "Todo Brasil" },
                { icon: CreditCard, label: "Pagamento", value: "Facilitado" }
              ].map((item, index) => (
                <div key={index} className="text-center p-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
                  <item.icon className="w-6 h-6 text-primary-foreground/80 mx-auto mb-2" />
                  <p className="font-display text-lg font-bold text-primary-foreground">{item.value}</p>
                  <p className="text-primary-foreground/60 text-xs">{item.label}</p>
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