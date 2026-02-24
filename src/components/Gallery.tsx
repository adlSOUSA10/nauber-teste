import dx3Hero from "@/assets/dx3-hero.png";
import nb100Hero from "@/assets/nb100-hero.png";
import paintingAction from "@/assets/painting-action.png";
import equipmentDetail from "@/assets/equipment-detail.png";

const Gallery = () => {
  const images = [
    {
      src: dx3Hero,
      alt: "Nauber DX-3 - Máquina de Pintura Airless",
      caption: "DX-3 em detalhes"
    },
    {
      src: paintingAction,
      alt: "Pintura profissional em ação",
      caption: "Aplicação profissional"
    },
    {
      src: nb100Hero,
      alt: "Nauber NB-100 - Potência Industrial",
      caption: "NB-100 Industrial"
    },
    {
      src: equipmentDetail,
      alt: "Detalhes do equipamento de pintura",
      caption: "Componentes de precisão"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            GALERIA
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Conheça Nossos <span className="text-gradient">Equipamentos</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Detalhes, peças e resultados das máquinas Nauber em ação.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-all duration-300">
              <img src={image.src} alt={image.alt} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-medium text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
