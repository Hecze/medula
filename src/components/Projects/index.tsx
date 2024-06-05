"use client"

import React from "react";
import { Brand } from "@/types/brand";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsData from "./ProjectsData";

const Projects = () => {

  const settings = {
    infinite: true,

    speed: 6000,
    slidesToShow: 4, // Cambia este número según cuántos elementos quieres mostrar simultáneamente
    autoplay: true,
    autoplaySpeed: 10, // Controla la velocidad de avance automático
    cssEase: "linear", // Establece una transición lineal sin aceleración
    arrows: false, // Deshabilita las flechas
    swipe: false, // Deshabilita el movimiento del carrusel por el mouse
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-16">
      <div className="container">
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl mb-8 ml-4">
          title
        </h3>
        <div className="">
          <div className="dark:bg-slate-800 my-4 shadow">

            <Slider {...settings}>


              {projectsData.map((brand) => (
                <ProjectBrand key={brand.id} brand={brand} />
              ))}

            </Slider>
            
            <Slider {...settings}>


              {projectsData.map((brand) => (
                <ProjectBrand key={brand.id} brand={brand} />
              ))}

            </Slider>
            
            <Slider {...settings}>


              {projectsData.map((brand) => (
                <ProjectBrand key={brand.id} brand={brand} />
              ))}

            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

const ProjectBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className=" min-h-[100px] flex justify-center align-center">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full opacity-90 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100 flex justify-center align-center">
        <Image src={imageLight} alt={name} width={100} height={100} className="hidden dark:block w-[25rem]" />
      </a>
    </div>
  );
};
