import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MachinesSection from "@/components/MachinesSection";
import DX3Section from "@/components/DX3Section";
import NB100Section from "@/components/NB100Section";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonTable from "@/components/ComparisonTable";
import TargetAudience from "@/components/TargetAudience";
import Gallery from "@/components/Gallery";
import CasaTesteSection from "@/components/CasaTesteSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nauber | Máquinas de Pintura, Massa Corrida e Lixamento Profissional</title>
        <meta 
          name="description" 
          content="Máquinas Nauber: NB-100, D-5X, D-3X MAX, MPP-600 e LXB850-CS. Pintura airless, massa corrida e lixamento. Revendedor autorizado Casa do Viana - Zona Oeste RJ." 
        />
        <meta name="keywords" content="máquina de pintura, pintura airless, Nauber, D-5X, D-3X MAX, NB-100, MPP-600, LXB850, lixadeira, massa corrida, Casa do Viana" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MachinesSection />
          <NB100Section />
          <DX3Section />
          <BenefitsSection />
          <ComparisonTable />
          <TargetAudience />
          <Gallery />
          <CasaTesteSection />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
