import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import FadeInSection from "../FadeInSection";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-12 lg:pt-14">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">

              <FadeInSection animationClass="animate-fade-in-down-10" threshold={0.3}>

                <SectionTitle
                  title="Sobre Nosotros"
                  paragraph="Conoce más sobre nuestra empresa y nuestra visión."
                  mb="44px"
                />

                <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Quiénes Somos
                  </h3>
                  <p className="mb-5 text-lg font-medium text-body-color">
                    Medula es una innovadora fábrica de software especializada en la creación de sitios web y aplicaciones móviles. Operamos bajo un modelo de Software como Servicio (SaaS), proporcionando soluciones innovadoras adaptadas a las necesidades únicas de nuestros clientes.
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Nuestro Enfoque Único
                  </h3>
                  <p className="mb-5 text-lg font-medium text-body-color">
                    Lo que hace a Medula especial es nuestro pensamiento lateral y disruptivo. Reclutamos constantemente jóvenes talentos de universidades y concursos internacionales, invirtiendo en su formación y desarrollo. Este enfoque nos ha permitido construir un equipo con los mejores desarrolladores de Latinoamérica.
                  </p>
                </div>
              </FadeInSection>

            </div>


            <div className="w-full px-4 lg:w-1/2">
            <FadeInSection animationClass="animate-fade-in-up-10" threshold={0.3}>

              <div className="relative mx-auto aspect-[25/24] max-w-[600px] lg:mr-0">
                <Image
                  src="/images/about/puñitos.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/puñitos.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 opacity-95"
                />
              </div>
              </FadeInSection>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
