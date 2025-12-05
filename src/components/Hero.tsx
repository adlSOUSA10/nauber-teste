import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import dx3Hero from "@/assets/dx3-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-accent-foreground text-sm font-medium">Tecnologia Airless Profissional</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Pinte <span className="text-gradient">3x Mais Rápido</span> com Acabamento Perfeito
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              As máquinas Nauber DX-3 e NB-100 revolucionam a pintura profissional. 
              Mais velocidade, mais economia, mais lucro para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="cta" size="xl" asChild>
                <a href="#orcamento">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#dx3">Conhecer Produtos</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">3x</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">Mais Rápido</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">40%</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">Economia de Tinta</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">100%</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">Acabamento Uniforme</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl transform rotate-6" />
            <img
              src={dx3Hero}
              alt="Máquina de Pintura Nauber DX-3"
              className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl animate-float"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-strong z-20">
              <p className="font-display font-bold text-foreground text-lg">NAUBER DX-3</p>
              <p className="text-muted-foreground text-sm">Pulverizador Airless Profissional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
