import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, TrendingUp, CheckCircle } from "lucide-react";
import dx3Hero from "@/assets/dx3-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground/90 text-sm font-medium">Tecnologia Airless Profissional</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] animate-fade-in tracking-tight" style={{ animationDelay: "0.1s" }}>
              Pinte <span className="relative inline-block">
                3x Mais Rápido
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-foreground/40"/>
                </svg>
              </span> com Acabamento Perfeito
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              As máquinas Nauber DX-3 e NB-100 revolucionam a pintura profissional. 
              Mais velocidade, mais economia, mais lucro para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="ctaWhite" size="xl" asChild>
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
            <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: Clock, value: "3x", label: "Mais Rápido" },
                { icon: TrendingUp, value: "40%", label: "Economia de Tinta" },
                { icon: CheckCircle, value: "100%", label: "Acabamento Uniforme" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary-foreground/70" />
                    <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</span>
                  </div>
                  <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-primary-foreground/10 rounded-[3rem] blur-3xl transform rotate-6" />
            <img
              src={dx3Hero}
              alt="Máquina de Pintura Nauber DX-3"
              className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl animate-float"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background rounded-2xl px-8 py-5 shadow-strong z-20">
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