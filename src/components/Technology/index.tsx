import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import { Feature } from "@/types/feature";

const Techonology = () => {
  return (
    <>
      <section id="techonology" className="py-12 md:py-20 lg:py-24 bg-black-900 ">

        <div className="container">
          <FadeInSection animationClass="animate-fade-in-down-10" threshold={0.05}>
            <SectionTitle
              title='Tecnología de Punta'
              paragraph='Empleamos herramientas y tecnologías de vanguardia para garantizar la máxima calidad y eficiencia. Esto nos permite crecer junto a tu negocio y adaptarnos a las últimas demandas del mercado.'
              center
            />
          </FadeInSection>

          <FadeInSection animationClass="animate-fade-in-down-20"  threshold={0.25}>
            <Image src="/images/flujo/flujo2.svg" alt="Techonology image" width={1300} height={1200} className="mx-auto rounded" />
          </FadeInSection>

        </div>
      </section>
    </>
  );
};

export default Techonology;
