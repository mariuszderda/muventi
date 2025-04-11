"use client";

import { RealizationDesk } from "@/components/client-side/realization-desk";
import { RealizationScreen } from "@/components/client-side/realization-screen";
import { RealizationGallery } from "@/components/client-side/realization-gallery";
import { SectionTitle } from "@/components/client-side/section-title";
import { RealizationDBDataType } from "@/types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Realization = ({
  realizations,
}: {
  realizations: RealizationDBDataType;
}) => {
  if (!Array.isArray(realizations) || realizations.length < 0) {
    throw new Error("Something went wrong");
  }
  console.log(realizations);

  const screenRef = useRef(null);
  const deskRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const screenAnimation = gsap
        .timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 10%",
            endTrigger: sectionRef.current,
            end: "+=1500 top",
            scrub: true,
            pin: deskRef.current,
            // pinSpacing: false,
            toggleActions: "play none none reverse",
          },
        })
        .add("deskAnimation");

      screenAnimation.to(
        screenRef.current,
        {
          scale: 2,
          y: 100,
        },
        "deskAnimation"
      );
      screenAnimation.to(
        galleryRef.current,
        {
          scale: 2,
          y: 30,
          onStart: () => {
            galleryRef.current?.classList.remove("-z-[1]");
            console.log("");
          },
          onReverseComplete: () => {
            galleryRef.current?.classList.add("-z-[1]");
          },
        },
        "deskAnimation"
      );
    },
    { scope: sectionRef }
  );
  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-28 max-w-screen-main px-4 md:min-h-dvh md:p-0"
    >
      <SectionTitle ref={titleRef}>wybrane realizacje</SectionTitle>
      <div ref={deskRef} className="relative mt-14 md:mt-40">
        <RealizationDesk />
        <div className="absolute -top-8 left-1/2 z-50 w-1/2 -translate-x-1/2 md:-top-24">
          <RealizationScreen ref={screenRef} />
          <div
            ref={galleryRef}
            className="absolute -top-8 left-1/2 -z-[1] min-h-[350px] w-1/2 min-w-[640px] -translate-x-1/2 bg-rose-400 md:top-8"
          >
            <RealizationGallery realizations={realizations} />
          </div>
        </div>
      </div>
      {/*<div className="mt-64 min-h-dvh w-full border">*/}
      {/*</div>*/}
    </section>
  );
};
