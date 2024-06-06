import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import { Feature } from "@/types/feature";

const Comunication = () => {
  return (
    <>
      <section id="Comunication" className="py-12 md:py-20 lg:py-24 bg-slate-950 ">

        <div className="container">
          <FadeInSection animationClass="animate-fade-in-down-10" threshold={0.05}>
            <SectionTitle
              title='Comunicación constante'
              paragraph='Estaras informado en todo momento de los avances de tu proyecto, con retroalimentación continua y actualizaciones en tiempo real.'
              center
            />
          </FadeInSection>

          <FadeInSection animationClass="animate-fade-in-down-20"  threshold={0.25}>
            <Image src="/images/flujo/flujo1.svg" alt="Comunication image" width={1100} height={11000} className="mx-auto rounded" />
          </FadeInSection>

        </div>
      </section>
    </>
  );
};

export default Comunication;
