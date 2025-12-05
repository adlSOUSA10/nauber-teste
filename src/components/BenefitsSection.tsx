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
      description: "Reduza em até 70% o tempo necessário para concluir cada projeto de pintura.",
      color: "bg-accent"
    },
    {
      icon: BadgeDollarSign,
      title: "Maior Faturamento",
      description: "Entregue mais obras no mesmo período e aumente significativamente seu lucro.",
      color: "bg-primary"
    },
    {
      icon: Target,
      title: "Precisão Total",
      description: "Acabamento uniforme e profissional em cada centímetro da superfície pintada.",
      color: "bg-accent"
    },
    {
      icon: TrendingUp,
      title: "Produtividade",
      description: "Multiplique sua capacidade de entrega sem aumentar a equipe de trabalho.",
      color: "bg-primary"
    },
    {
      icon: Sparkles,
      title: "Qualidade Superior",
      description: "Resultados que impressionam clientes e geram indicações naturais.",
      color: "bg-accent"
    },
    {
      icon: Shield,
      title: "Durabilidade",
      description: "Equipamentos robustos projetados para uso intensivo profissional.",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            BENEFÍCIOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que Escolher as Máquinas <span className="text-gradient">Nauber</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Vantagens reais que transformam seu trabalho e seus resultados financeiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-border hover:border-accent/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className={`relative w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-medium`}>
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
