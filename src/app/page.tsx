"use client";

import { useState, useEffect } from "react";
import Orb from "@/components/orb";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import GlassSurfacesSection from "@/components/glassSurfacesSection";
import ButtonsSection from "@/components/buttonsSection";
import BadgesAndTagsSection from "@/components/badgesAndTagsSection";
import TypographySection from "@/components/typographySection";
import FormElementsSection from "@/components/formElementsSection";
import GradientsSection from "@/components/gradientsSection";
import AnimationsSection from "@/components/animationsSection";
import SkeletonLoadersSection from "@/components/skeletonLoadersSection";
import DividersSection from "@/components/dividersSection";
import ModalsSection from "@/components/modalsSection";
import PricingCardsSection from "@/components/pricingCardsSection";
import StatusMessagesSection from "@/components/statusMessagesSection";
import FooterCtaSection from "@/components/footerCtaSection";
import FooterSection from "@/components/footerSection";

export default function GlassShowcase() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("activeTheme");
    if (storedTheme === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("activeTheme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className="bg-bg-page min-h-dvh overflow-x-hidden font-poppins text-text-primary">
      <Orb />

      <Navbar dark={dark} setDark={setDark} />

      <div className="z-1 relative pt-28 pb-30 container">
        <HeroSection />

        <GlassSurfacesSection />

        <ButtonsSection />

        <BadgesAndTagsSection />

        <TypographySection />

        <FormElementsSection />

        <GradientsSection />

        <AnimationsSection />

        <SkeletonLoadersSection />

        <DividersSection />

        <ModalsSection />

        <PricingCardsSection />

        <StatusMessagesSection />

        <FooterCtaSection />
      </div>

      <FooterSection dark={dark} setDark={setDark} />
    </main>
  );
}
