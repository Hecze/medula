import AboutSectionOne from "@/components/About/AboutSectionOne";

import './globals.css';
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Projects from "@/components/Projects";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import FadeInSection from "@/components/FadeInSection";
import { Metadata } from "next";
import ChatBot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "DoubleClics",
  description: "Software Automation, Web Development | DoubleClics",
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
