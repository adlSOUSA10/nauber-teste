import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DX3Section from "@/components/DX3Section";
import NB100Section from "@/components/NB100Section";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonTable from "@/components/ComparisonTable";
import TargetAudience from "@/components/TargetAudience";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nauber DX-3 e NB-100 | Máquinas de Pintura Profissional</title>
        <meta 
          name="description" 
          content="Descubra as máquinas de pintura Nauber DX-3 e NB-100. Pinte 3x mais rápido com acabamento perfeito. Ideal para pintores profissionais e construtoras." 
        />
        <meta name="keywords" content="máquina de pintura, pintura airless, Nauber DX-3, Nauber NB-100, pintura profissional, equipamento de pintura" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <DX3Section />
          <NB100Section />
          <BenefitsSection />
          <ComparisonTable />
          <TargetAudience />
          <Gallery />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
