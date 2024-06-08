"use client"
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import FadeInSection from "../FadeInSection";

const Pricing = () => {
  const [webIsMonthly, setWebIsMonthly] = useState(true);
  const [appIsMonthly, setAppIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-12 lg:py-14">
      <div className="container animate-fade-in-down-10">
        <SectionTitle
          title="Páginas Web"
          paragraph="Los precios son durante el primer año, después de este periodo la tarifa se reduce a la mitad. Si tienes alguna duda en cuál paquete es el mejor para ti, no dudes en contactarnos. Estamos aquí para ayudarte."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setWebIsMonthly(true)}
              className={`${webIsMonthly ? "pointer-events-none text-primary" : "text-dark dark:text-white"} mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div onClick={() => setWebIsMonthly(!webIsMonthly)} className="flex cursor-pointer items-center">
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div className={`${webIsMonthly ? "" : "translate-x-full"} shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}>
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setWebIsMonthly(false)}
              className={`${webIsMonthly ? "text-dark dark:text-white" : "pointer-events-none text-primary"} ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 pb-24 grid-center">
          <PricingBox
            packageName="Básico"
            price={webIsMonthly ? "40" : "399"}
            duration={webIsMonthly ? "mes" : "año"}
            subtitle="Páginas webs sencillas y económicas. Ideal para dar visibilidad a restaurantes, tiendas con ventas por redes sociales y pequeños negocios."
          >
            <OfferList text="Garantía del 50%" status="active" />
            <OfferList text="Diseño increíble" status="active" />
            <OfferList text="Dominio personalizado" status="active" />
            <OfferList text="Correo personalizado" status="active" />
            <OfferList text="Catálogo de servicios o productos" status="active" />
            <OfferList text="Enlaces a redes sociales" status="active" />
            <OfferList text="Optimizado para celulares" status="active" />
            <OfferList text="Mantenimiento incluido" status="active" />
            <OfferList text="Chatbot asistente" status="inactive" />
            <OfferList text="Análisis de tráfico" status="inactive" />
            <OfferList text="Pagos por internet" status="inactive" />
            <OfferList text="Traducción" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Profesional"
            price={webIsMonthly ? "80" : "790"}
            duration={webIsMonthly ? "mes" : "año"}
            subtitle="Páginas web capaces de gestionar clientes, ventas y productos. Ideal para tiendas online y negocios que busquen expandir sus ventas."
          >
            <OfferList text="Garantía del 50%" status="active" />
            <OfferList text="Diseño increíble" status="active" />
            <OfferList text="Dominio personalizado" status="active" />
            <OfferList text="Correo personalizado" status="active" />
            <OfferList text="Catálogo de servicios o productos" status="active" />
            <OfferList text="Enlaces a redes sociales" status="active" />
            <OfferList text="Optimizado para celulares" status="active" />
            <OfferList text="Mantenimiento incluido" status="active" />
            <OfferList text="Chatbot asistente" status="active" />
            <OfferList text="Análisis de tráfico" status="active" />
            <OfferList text="Pagos por internet" status="active" />
            <OfferList text="Traducción" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Personalizado"
            price="X"
            duration="Y"
            subtitle="Soluciones web completamente personalizadas para satisfacer necesidades específicas. Ideal para proyectos únicos y complejos."
          >
            <OfferList text="Garantía del 50%" status="active" />
            <OfferList text="Diseño a medida" status="active" />
            <OfferList text="Dominio personalizado" status="active" />
            <OfferList text="Correo personalizado" status="active" />
            <OfferList text="Funcionalidades a medida" status="active" />
            <OfferList text="Enlaces a redes sociales" status="active" />
            <OfferList text="Optimizado para celulares" status="active" />
            <OfferList text="Mantenimiento incluido" status="active" />
            <OfferList text="Chatbot asistente" status="active" />
            <OfferList text="Análisis de tráfico" status="active" />
            <OfferList text="Pagos por internet" status="active" />
            <OfferList text="Traducción" status="active" />
          </PricingBox>
        </div>

        <SectionTitle
          title="Aplicaciones Móviles"
          paragraph="Los precios son durante el primer año, después de este periodo la tarifa se reduce a la mitad. Si tienes alguna duda en cuál paquete es el mejor para ti, no dudes en contactarnos. Estamos aquí para ayudarte."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setAppIsMonthly(true)}
              className={`${appIsMonthly ? "pointer-events-none text-primary" : "text-dark dark:text-white"} mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div onClick={() => setAppIsMonthly(!appIsMonthly)} className="flex cursor-pointer items-center">
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div className={`${appIsMonthly ? "" : "translate-x-full"} shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}>
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setAppIsMonthly(false)}
              className={`${appIsMonthly ? "text-dark dark:text-white" : "pointer-events-none text-primary"} ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Básico"
            price={appIsMonthly ? "150" : "1250"}
            duration={appIsMonthly ? "mes" : "año"}
            subtitle="Aplicaciones móviles con funcionalidades esenciales. Ideal para pequeñas empresas y startups."
          >
            <OfferList text="Garantía del 50%" status="active" />
            <OfferList text="Diseño increíble" status="active" />
            <OfferList text="Soporte Android e iOS" status="active" />
            <OfferList text="Funcionalidades básicas" status="active" />
            <OfferList text="Pasarela de pagos" status="active" />
            <OfferList text="Notificaciones push" status="active" />
            <OfferList text="Mantenimiento incluido" status="active" />
            <OfferList text="Geolocalización y mapas" status="inactive" />
            <OfferList text="Actualizaciones regulares" status="inactive" />
            <OfferList text="Soporte técnico 24/7" status="inactive" />
            <OfferList text="Análisis de datos" status="inactive" />
            <OfferList text="Inteligencia artificial" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Profesional"
            price={appIsMonthly ? "250" : "2000"}
            duration={appIsMonthly ? "mes" : "año"}
            subtitle="Aplicaciones móviles avanzadas con características completas. Ideal para empresas que buscan expansión y crecimiento."
          >
            <OfferList text="Garantía del 50%" status="active" />
            <OfferList text="Diseño increíble" status="active" />
            <OfferList text="Soporte Android e iOS" status="active" />
            <OfferList text="Funcionalidades básicas" status="active" />
            <OfferList text="Pasarela de pagos" status="active" />
            <OfferList text="Notificaciones push" status="active" />
            <OfferList text="Mantenimiento incluido" status="active" />
            <OfferList text="Geolocalización y mapas" status="active" />
            <OfferList text="Actualizaciones regulares" status="active" />
            <OfferList text="Soporte técnico 24/7" status="active" />
            <OfferList text="Análisis de datos" status="active" />
            <OfferList text="Inteligencia artificial" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Personalizado"
            price="X"
            duration="Y"
            subtitle="Aplicaciones móviles completamente personalizadas para satisfacer necesidades específicas. Ideal para proyectos únicos y complejos."
          >
            <OfferList text="Garantía del 50%" status="active" />
            <OfferList text="Diseño a medida" status="active" />
            <OfferList text="Soporte Android e iOS" status="active" />
            <OfferList text="Funcionalidades a medida" status="active" />
            <OfferList text="Pasarela de pagos" status="active" />
            <OfferList text="Notificaciones push" status="active" />
            <OfferList text="Mantenimiento incluido" status="active" />
            <OfferList text="Geolocalización y mapas" status="active" />
            <OfferList text="Actualizaciones regulares" status="active" />
            <OfferList text="Soporte técnico 24/7" status="active" />
            <OfferList text="Análisis de datos" status="active" />
            <OfferList text="Inteligencia artificial" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
