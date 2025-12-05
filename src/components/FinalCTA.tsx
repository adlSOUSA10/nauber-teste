import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle, Shield, Truck, CreditCard, Headphones } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="orcamento" className="py-20 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold px-6 py-2.5 rounded-full text-sm mb-8 shadow-lg">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            OFERTA ESPECIAL
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Transforme Sua Pintura Hoje Mesmo
          </h2>
          
          <p className="text-xl text-primary-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Não perca mais tempo e dinheiro com métodos ultrapassados. 
            Solicite agora seu orçamento e descubra como as máquinas Nauber 
            podem revolucionar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="ctaWhite" size="xl" className="text-lg" asChild>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Solicitar Orçamento via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-16">
            <a
              href="tel:+5500000000000"
              className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 rounded-2xl p-5 transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-medium">(00) 0000-0000</span>
            </a>
            <a
              href="mailto:contato@nauber.com.br"
              className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 rounded-2xl p-5 transition-all hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-medium">contato@nauber.com.br</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-12 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-8 uppercase tracking-wider">Garantias Nauber</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: "Garantia", value: "1 Ano" },
                { icon: Headphones, label: "Suporte", value: "Especializado" },
                { icon: Truck, label: "Entrega", value: "Todo Brasil" },
                { icon: CreditCard, label: "Pagamento", value: "Facilitado" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
                  <item.icon className="w-8 h-8 text-primary-foreground/80 mx-auto mb-3" />
                  <p className="font-display text-xl font-bold text-primary-foreground">{item.value}</p>
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