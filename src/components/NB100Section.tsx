import { Button } from "@/components/ui/button";
import { Factory, Zap, Shield, Wrench, ArrowRight } from "lucide-react";
import nb100Hero from "@/assets/nb100-hero.png";
import paintingAction from "@/assets/painting-action.png";

const NB100Section = () => {
  return (
    <section id="nb100" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <img
            src={nb100Hero}
            alt="Nauber NB-100 - Potência Industrial"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <span className="inline-block bg-accent text-accent-foreground font-semibold px-4 py-2 rounded-full text-sm mb-4">
                POTÊNCIA INDUSTRIAL
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 max-w-2xl">
                NB-100 NAUBER — Potência Para Grandes Obras
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mb-6">
                Criada para quem precisa entregar obras grandes rápido e com qualidade profissional.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="#orcamento">
                  Saber Mais
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Descrição Técnica Detalhada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A NB-100 foi desenvolvida para operações de pintura em grande escala. 
                Seu <strong className="text-foreground">motor superdimensionado</strong> permite 
                longas jornadas de trabalho sem interrupção, enquanto o sistema de alta vazão 
                garante cobertura rápida de grandes superfícies como fachadas, muros industriais 
                e galpões.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, label: "Alta Vazão", desc: "Para grandes áreas" },
                { icon: Zap, label: "Motor Potente", desc: "Longas jornadas" },
                { icon: Shield, label: "Construção Robusta", desc: "Máxima durabilidade" },
                { icon: Wrench, label: "Fácil Manutenção", desc: "Peças acessíveis" }
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-4 shadow-soft border border-border">
                  <item.icon className="w-8 h-8 text-accent mb-2" />
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform rotate-3" />
            <img
              src={paintingAction}
              alt="Pintura profissional com equipamento Nauber"
              className="relative z-10 w-full rounded-2xl shadow-strong"
            />
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            O Que a NB-100 Oferece
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "Alta",
                label: "Vazão",
                desc: "Para pintura rápida de fachadas, muros e galpões"
              },
              {
                value: "Uniforme",
                label: "Aplicação",
                desc: "Mesmo em superfícies irregulares ou texturizadas"
              },
              {
                value: "Potente",
                label: "Motor",
                desc: "Superdimensionado para longas jornadas de trabalho"
              },
              {
                value: "Economia",
                label: "Operacional",
                desc: "De tinta e mão de obra em cada projeto"
              }
            ].map((spec, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-muted hover:bg-accent/10 transition-colors">
                <p className="font-display text-3xl font-bold text-accent mb-1">{spec.value}</p>
                <p className="font-semibold text-foreground mb-2">{spec.label}</p>
                <p className="text-muted-foreground text-sm">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Box */}
        <div className="mt-12 bg-dark-gradient rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              A Grande Solução da NB-100
            </h3>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              A NB-100 elimina o maior problema da pintura pesada: <strong className="text-accent">como entregar 
              grandes áreas no menor tempo possível sem perda de acabamento.</strong> Ela aumenta 
              drasticamente a capacidade operacional de equipes e empreiteiras, permitindo 
              entregar projetos maiores com menos recursos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NB100Section;
