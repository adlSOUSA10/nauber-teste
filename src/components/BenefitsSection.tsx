import { 
  Clock, 
  BadgeDollarSign, 
  Target, 
  TrendingUp, 
  Sparkles, 
  Shield 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza em até 70% o tempo necessário para concluir cada projeto de pintura."
    },
    {
      icon: BadgeDollarSign,
      title: "Maior Faturamento",
      description: "Entregue mais obras no mesmo período e aumente significativamente seu lucro."
    },
    {
      icon: Target,
      title: "Precisão Total",
      description: "Acabamento uniforme e profissional em cada centímetro da superfície pintada."
    },
    {
      icon: TrendingUp,
      title: "Produtividade",
      description: "Multiplique sua capacidade de entrega sem aumentar a equipe de trabalho."
    },
    {
      icon: Sparkles,
      title: "Qualidade Superior",
      description: "Resultados que impressionam clientes e geram indicações naturais."
    },
    {
      icon: Shield,
      title: "Durabilidade",
      description: "Equipamentos robustos projetados para uso intensivo profissional."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-5 py-2.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            BENEFÍCIOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Por Que Escolher as Máquinas <span className="text-primary">Nauber</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vantagens reais que transformam seu trabalho e seus resultados financeiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-border hover:border-primary/30 overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="relative font-display text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="relative text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;