import { User, Building2, HardHat, Briefcase } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: User,
      title: "Pintores Profissionais",
      description: "Aumente sua produtividade e entregue mais projetos com qualidade superior. Destaque-se da concorrência.",
      benefits: ["Trabalhe sozinho com eficiência de equipe", "Aumente seu faturamento mensal", "Construa reputação de excelência"]
    },
    {
      icon: Building2,
      title: "Construtoras",
      description: "Otimize o cronograma de obras e reduza custos operacionais de pintura em todos os projetos.",
      benefits: ["Reduza tempo de entrega", "Padronize qualidade", "Diminua custos operacionais"]
    },
    {
      icon: HardHat,
      title: "Empreiteiras",
      description: "Assuma projetos maiores com confiança. Tenha capacidade para entregar obras de grande porte.",
      benefits: ["Opere em grande escala", "Aumente margem de lucro", "Conquiste contratos maiores"]
    },
    {
      icon: Briefcase,
      title: "Empresas de Manutenção",
      description: "Atenda múltiplos clientes com agilidade. Ideal para contratos de manutenção predial.",
      benefits: ["Atendimento ágil", "Múltiplos projetos simultâneos", "Satisfação do cliente"]
    }
  ];

  return (
    <section id="para-quem" className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-5 py-2.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            PARA QUEM É
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            As Máquinas Nauber São <span className="text-primary">Para Você</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubra como nossas máquinas podem transformar seu negócio de pintura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-border hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
                  <audience.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {audience.description}
                  </p>
                  <ul className="space-y-2">
                    {audience.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;