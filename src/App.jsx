import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Servicos from "./components/Servicos";
import PorQue from "./components/PorQue";
import Como from "./components/Como";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import AvisoClone from "./components/AvisoClone";

export default function App() {
  return (
    <>
      <AvisoClone />
      <main className="min-h-screen grade-fina">
        <Hero />
        <Marquee />
        <Servicos />
        <PorQue />
        <Como />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
