import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory Page | Médula",
  description: "Software Automation, Web Development | Médula",
  // other metadata
};

const PrincipalFeatureCard = ({ className, starPhrase,title, description, icon, mainImage}) => {
  return (
    <div className={className}>
      <div className="relative rounded-3xl bg-dark-purple p-10 xl:p-15 border border-gray-700 border-opacity-60 ">
        <div className="relative z-20 flex items-center justify-between">
          <div className="w-full max-w-[477px]">
            <StarPhrase icon={icon} phrase={starPhrase} />
            <h3 className="mb-5 text-4xl font-semibold text-white">{title}</h3>
            <FeatureDescription description={description} />
            <FeatureButton />
          </div>
          <FeatureImage src={mainImage} />
        </div>
      </div>
    </div>

  );
};

const FeatureCard = ({ title, description, icon, className }) => {
  return (
    <div className={className} >
      <div className="relative rounded-3xl bg-dark-purple p-11 border border-gray-700 border-opacity-60">
        <div className="relative z-20">
          <IconBorder icon={icon}  />
          <h3 className="mb-4 text-2xl font-semibold text-white mt-8">
            {title}
          </h3>
          <p className="text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};


const StarPhrase = ({ icon, phrase }) => (
  <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium text-white">
    <Image alt="icon" loading="lazy" width={16} height={16} src={icon} />
    <span className="hero-subtitle-text">{phrase}</span>
  </span>
);

const FeatureDescription = ({ description }) => (
  <p className="mb-10 text-gray-300">{description}</p>
);

const FeatureButton = () => (
  <a
    className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm text-white duration-300 ease-in hover:shadow-button"
    href="/#"
  >
    Learn more
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
        fill="white"
      ></path>
    </svg>
  </a>
);

const FeatureImage = ({ src }) => (
  <div className="relative hidden aspect-square w-full max-w-[428px] sm:block">
    <Image alt="icon" layout="fill" objectFit="cover" src={src} />
  </div>
);

const IconBorder = ({ icon }) => {
  return (
    <span className={"icon-border relative mx-auto inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full"}>
      <img
        alt="icon"
        loading="lazy"
        width="32"
        height="32"
        src={icon}
      />
    </span>
  );
};



const LaboratoryPage = () => {
  return (
    <>
      <Breadcrumb pageName="Laboratory Page"/>
      <section className="py-14">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="grid gap-7 sm:grid-cols-12">
            <PrincipalFeatureCard
              className="sm:col-span-12"
              starPhrase="Resalta tus proyectos"
              title="Laboratorio de Innovacion Tecnológica"
              description="Build SaaS AI applications using OpenAI and Next.js. This kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
              icon="/images/hero/icon-title.svg"
              mainImage={"/images/features/big-icon.svg"}
            />

            <FeatureCard className="sm:col-span-7" title="Documentación" description="Build SaaS AI applications using OpenAI and Next.js. This kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart" icon="/images/features/icon-05.svg" />

            <FeatureCard className="sm:col-span-5" title="Premios y Certificaciones" description="Build SaaS AI applications using OpenAI and Next.js. Quickly kickstart your AI startup." icon="/images/features/icon-07.svg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LaboratoryPage;
