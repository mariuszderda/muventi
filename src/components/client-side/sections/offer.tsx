"use client";

import { OfferCard } from "@/components/client-side/offer-card";
import { SectionTitle } from "@/components/client-side/section-title";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import bilbord from "../../../../public/images/offer/bilbord.svg";
import bulb from "../../../../public/images/offer/bulb.svg";
import computer from "../../../../public/images/offer/computer.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const offerFeatures = {
  brand: ["logo / księga znaku", "projektowanie graficzne"],
  website: ["wizytówki", "sklepy internetowe"],
  traditionalAds: ["reklama outdoor", "materiały reklamowe"],
};

export const Offer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);

  const getScrollAmount = () => {
    const racesWidth = containerRef!.current!.scrollWidth;
    return -(racesWidth - window.innerHeight);
  };

  useGSAP(
    () => {
      const tween = gsap.to(containerRef.current, {
        x: -containerRef!.current!.scrollWidth * 0.6,
        // duration: 3,
      });

      ScrollTrigger.create({
        animation: tween,
        trigger: sectionRef.current,
        pin: true,
        toggleActions: "play none none reverse",
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        scrub: 2.5,
      });
    },
    { scope: sectionRef }
  );
  return (
    <>
      <section
        ref={sectionRef}
        className="relative -z-10 h-dvh w-full overflow-hidden bg-offer-bgi bg-cover bg-center px-5 pt-28 md:overflow-hidden"
      >
        <div className="mx-auto lg:max-w-screen-main">
          <SectionTitle>oferta</SectionTitle>
          <div
            ref={containerRef}
            className="offer-container flex h-full w-full flex-row gap-12 md:mt-36 md:translate-x-[70%] md:gap-28"
          >
            <OfferCard
              imageClassNames="-top-24 md:-top-36 md:-right-8 right-0"
              imageSrc={bulb}
              title={"Marka"}
              features={offerFeatures.brand}
              containerClassName=""
            />
            <OfferCard
              imageClassNames="-top-24 md:-top-24 md:-right-28 right-0"
              imageSrc={computer}
              title={"Strony internetowe"}
              features={offerFeatures.website}
              containerClassName=""
            />
            <OfferCard
              imageClassNames="-top-24 md:-top-24 md:-right-28"
              imageSrc={bilbord}
              title={"Reklama tradycyjna"}
              features={offerFeatures.traditionalAds}
              containerClassName=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
