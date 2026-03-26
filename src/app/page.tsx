"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import TrainingAcademy from "@/components/TrainingAcademy";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <TrainingAcademy />
        <Gallery />
        <Process />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
