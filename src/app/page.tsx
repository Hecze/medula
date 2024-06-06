import './globals.css';
import Brands from "@/components/Brands";
import Projects from "@/components/Projects";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médula | Diseños increibles",
  description: "Software Automation, Web Development | Médula",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Projects />
      <Features />
      <Contact />
    </>
  );
}
