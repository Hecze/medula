"use client";
import React, { useEffect, useRef, useState } from "react";
import { Brand } from "@/types/brand";
import Image from "next/image";
import projectsData from "./ProjectsData";
import SectionTitle from "../Common/SectionTitle";
import FadeInSection from "@/components/FadeInSection";

const Projects = () => {
  const firstSliderRef = useRef<HTMLDivElement>(null);
  const secondSliderRef = useRef<HTMLDivElement>(null);

  const [visibleProjects, setVisibleProjects] = useState(3.5);

  // Dividir projectsData en dos mitades
  const halfIndex = Math.ceil(projectsData.length / 2);
  const firstHalf = projectsData.slice(0, halfIndex);
  const secondHalf = projectsData.slice(halfIndex);

  useEffect(() => {
    const animateSlider = (
      slider: HTMLDivElement | null,
      speed: number,
      direction: number,
      initialOffset: number = 0
    ) => {
      if (!slider) return;

      let startPosition = initialOffset;
      const projectWidth = slider.scrollWidth / (projectsData.length * 2);
      const totalWidth = slider.scrollWidth;

      const moveSlider = () => {
        startPosition += speed * direction;
        if (startPosition <= -totalWidth / 2) {
          startPosition = 0;
        } else if (startPosition >= 0) {
          startPosition = -totalWidth / 2;
        }
        slider.style.transform = `translateX(${startPosition}px)`;

        requestAnimationFrame(moveSlider);
      };

      moveSlider();
    };

    animateSlider(firstSliderRef.current, 0.5, -1, visibleProjects); // First slider moves right to left
    animateSlider(secondSliderRef.current, 0.5, 1, visibleProjects); // Second slider starts from the end and moves left to right
  }, [visibleProjects]);

  return (
    <section className="py-12">
      <FadeInSection animationClass="animate-fade-in-down-10" threshold={0.05}>

        <div className="container">
          <SectionTitle
            title='Diseños Increibles'
            paragraph='Juntos crearemos una interfaz visual innovadora y exclusiva que refleje la esencia de tu marca.'
            center
          />
          <div className="relative overflow-hidden w-full mb-6">
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white via-transparent to-transparent opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white via-transparent to-transparent opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
            <div ref={firstSliderRef} className="flex w-full gap-4">
              {firstHalf.map((brand) => (
                <ProjectBrand key={brand.id} brand={brand} visibleProjects={visibleProjects} />
              ))}
              {firstHalf.map((brand) => (
                <ProjectBrand key={`${brand.id}-duplicate-1`} brand={brand} visibleProjects={visibleProjects} />
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden w-full mb-6">
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white via-transparent to-transparent opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white via-transparent to-transparent opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
            <div ref={secondSliderRef} className="flex w-full gap-4">
              {secondHalf.map((brand) => (
                <ProjectBrand key={brand.id} brand={brand} visibleProjects={visibleProjects} />
              ))}
              {secondHalf.map((brand) => (
                <ProjectBrand key={`${brand.id}-duplicate-2`} brand={brand} visibleProjects={visibleProjects} />
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;

const ProjectBrand = ({ brand, visibleProjects }: { brand: Brand, visibleProjects: number }) => {
  const { href, imageLight, name } = brand;


  return (
    <div className={`flex justify-center items-center flex-shrink-0 rounded h-[15rem]`}>
      <div
        className="relative w-full opacity-80 transition hover:opacity-100 dark:opacity-90 dark:hover:opacity-100 flex justify-center items-center rounded"
      >
        <Image
          src={imageLight}
          alt={name}
          width={100}
          height={100}
          className="w-[25rem] rounded"
        />
      </div>
    </div>
  );
};
