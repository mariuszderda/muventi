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
  gsap.registerPlugin(ScrollTrigger);

  const getScrollAmount = () => {
    const racesWidth = containerRef!.current!.scrollWidth;
    return -(racesWidth - window.innerHeight);
  };

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        x: -containerRef!.current!.scrollWidth * 0.7,
        scrollTrigger: {
          pin: true,
          trigger: sectionRef.current,
          start: "top 10%",
          toggleActions: "play none none reverse",
          scrub: 5,
          snap: [0, 0.1, 0.5, 0.8, 1],
          end: () => `+=${getScrollAmount() * -1 * 3} `,
        },
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
