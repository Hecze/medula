"use client";

import React, { useEffect, useRef } from "react";
import { Brand } from "@/types/brand";
import Image from "next/image";
import projectsData from "./ProjectsData";

const Projects = () => {
  const firstSliderRef = useRef<HTMLDivElement>(null);
  const secondSliderRef = useRef<HTMLDivElement>(null);

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

    animateSlider(firstSliderRef.current, 0.5, -1); // First slider moves right to left
    animateSlider(secondSliderRef.current, 0.5, 1, -secondSliderRef.current.scrollWidth / 2); // Second slider starts from the end and moves left to right
  }, []);

  return (
    <section className="pt-16">
      <div className="container">
        <h2 className="mb-8 text-2xl font-bold text-black dark:text-sky-50 sm:text-3xl  mb-12 ml-4 opacity-90">
           Ultimos Proyectos
        </h2>
        <div className="relative overflow-hidden w-full mb-6">
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r  via-transparent to-transparent opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l  via-transparent to-transparent opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
          <div ref={firstSliderRef} className="flex w-full gap-4">
            {firstHalf.map((brand) => (
              <ProjectBrand key={brand.id} brand={brand} />
            ))}
            {firstHalf.map((brand) => (
              <ProjectBrand key={`${brand.id}-duplicate-1`} brand={brand} />
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden w-full mb-6">
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r  via-transparent to-transparent opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
          <div className="absolute top-0 right-0 h-full w-52 bg-gradient-to-l  via-transparent to-transparent opacity-75 dark:opacity-75 pointer-events-none z-10 dark:from-gray-900"></div>
          <div ref={secondSliderRef} className="flex w-full gap-4">
            {secondHalf.map((brand) => (
              <ProjectBrand key={brand.id} brand={brand} />
            ))}
            {secondHalf.map((brand) => (
              <ProjectBrand key={`${brand.id}-duplicate-2`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectBrand = ({ brand }: { brand: Brand }) => {
  const { href, imageLight, name } = brand;

  return (
    <div className="flex h-[11rem] justify-center items-center w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 rounded">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full opacity-70 transition hover:opacity-100 dark:opacity-90 dark:hover:opacity-100 flex justify-center items-center rounded"
      >
        <Image
          src={imageLight}
          alt={name}
          width={100}
          height={100}
          className="w-[25rem] rounded"
        />
      </a>
    </div>
  );
};
