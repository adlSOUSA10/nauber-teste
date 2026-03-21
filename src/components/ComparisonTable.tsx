import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  const machines = ["NB-100", "D-5X", "D-3X MAX", "MPP-600", "LXB850-CS"];
  
  const features = [
    { name: "Tipo", values: ["Airless Industrial", "Airless Diafragma", "Airless c/ Reservatório", "Airless + Massa", "Lixadeira Brushless"] },
    { name: "Indicação", values: ["Grandes obras", "Construção civil", "Residencial/Comercial", "Pintura + Massa corrida", "Lixamento parede/teto"] },
    { name: "Motor", values: ["Superdimensionado", "Blindado", "Indução 220V", "Brushless 4.0 HP", "Brushless 850W"] },
    { name: "Diferencial", values: ["Alta vazão contínua", "Aço galvanizado", "Reservatório 30L + 2 pistolas", "Vazão 6,0 L/min", "Auto-aspirante 90%"] },
    { name: "Acabamento", values: ["Uniforme", "Alta pressão", "Alta pressão", "Excelente", "Lixamento fino"] },
    { name: "Economia Tinta", values: [true, true, true, true, "—"] },
    { name: "Suporte Técnico", values: [true, true, true, true, true] },
  ];

  const colors = [
    "bg-foreground text-background",
    "bg-primary text-primary-foreground",
    "bg-primary text-primary-foreground",
    "bg-foreground text-background",
    "bg-primary text-primary-foreground",
  ];

  return (
    <section id="comparativo" className="py-12 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            COMPARATIVO
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Qual Máquina é <span className="text-primary">Ideal Para Você</span>?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Compare as características e escolha a máquina que melhor atende às suas necessidades.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-card rounded-2xl shadow-strong overflow-hidden border border-border">
          <div className="grid" style={{ gridTemplateColumns: "200px repeat(5, 1fr)" }}>
            <div className="p-4 bg-secondary font-semibold text-muted-foreground text-sm">Característica</div>
            {machines.map((m, i) => (
              <div key={i} className={`p-4 text-center ${colors[i]}`}>
                <h3 className="font-display text-base font-bold">{m}</h3>
              </div>
            ))}
          </div>
          {features.map((feature, fi) => (
            <div key={fi} className="grid border-t border-border" style={{ gridTemplateColumns: "200px repeat(5, 1fr)" }}>
              <div className="p-3 font-medium text-foreground bg-background text-sm">{feature.name}</div>
              {feature.values.map((val, vi) => (
                <div key={vi} className="p-3 text-center text-muted-foreground text-xs bg-background">
                  {typeof val === "boolean" ? (
                    val ? <Check className="w-4 h-4 text-primary mx-auto" /> : "—"
                  ) : val}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {machines.map((m, mi) => (
            <div key={mi} className="bg-card rounded-xl shadow-medium overflow-hidden border border-border">
              <div className={`${colors[mi]} p-4 text-center`}>
                <h3 className="font-display text-lg font-bold">{m}</h3>
              </div>
              <div className="p-4 space-y-3">
                {features.map((feature, fi) => (
                  <div key={fi} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-xs">{feature.name}</span>
                    <span className="text-foreground font-medium text-xs text-right max-w-[55%]">
                      {typeof feature.values[mi] === "boolean" ? (
                        feature.values[mi] ? <Check className="w-4 h-4 text-primary" /> : "—"
                      ) : feature.values[mi]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4 text-sm">Não sabe qual escolher? Fale com nossos especialistas.</p>
          <Button variant="default" size="lg" asChild>
            <a href="#orcamento">Falar com Especialista</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
