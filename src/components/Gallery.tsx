import d3maxFrente from "@/assets/d3max-frente.png";
import d3maxLateral from "@/assets/d3max-lateral.png";
import d3xTras from "@/assets/d3x-tras.png";
import d5xFrente from "@/assets/d5x-frente.png";
import d5xLateral from "@/assets/d5x-lateral.png";
import d5xTras from "@/assets/d5x-tras.png";
import mpp600Frente from "@/assets/mpp600-frente.png";
import mpp600Lateral from "@/assets/mpp600-lateral.png";
import lxb850 from "@/assets/lxb850.png";
import lxb850Kit from "@/assets/lxb850-kit.png";
import nb100Front from "@/assets/nb100-front.jpg";
import nb100Operator from "@/assets/nb100-operator.jpg";

const Gallery = () => {
  const images = [
    { src: d3maxFrente, alt: "D-3X MAX vista frontal", caption: "D-3X MAX Frontal" },
    { src: d3maxLateral, alt: "D-3X MAX vista lateral", caption: "D-3X MAX Lateral" },
    { src: d3xTras, alt: "D-3X vista traseira", caption: "D-3X Traseira" },
    { src: d5xFrente, alt: "D-5X vista frontal", caption: "D-5X Frontal" },
    { src: d5xLateral, alt: "D-5X vista lateral", caption: "D-5X Lateral" },
    { src: d5xTras, alt: "D-5X vista traseira", caption: "D-5X Traseira" },
    { src: mpp600Frente, alt: "MPP-600 vista frontal", caption: "MPP-600 Frontal" },
    { src: mpp600Lateral, alt: "MPP-600 vista lateral", caption: "MPP-600 Lateral" },
    { src: lxb850, alt: "LXB850-CS Lixadeira", caption: "LXB850-CS" },
    { src: lxb850Kit, alt: "LXB850-CS Kit Completo", caption: "LXB850 Kit Completo" },
    { src: nb100Front, alt: "NB-100 vista frontal", caption: "NB-100 Frontal" },
    { src: nb100Operator, alt: "NB-100 em operação", caption: "NB-100 Operação" },
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
            Todos os ângulos das máquinas Nauber.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 bg-white">
              <img src={image.src} alt={image.alt} className="w-full h-48 object-contain p-2 group-hover:scale-110 transition-transform duration-500" />
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
