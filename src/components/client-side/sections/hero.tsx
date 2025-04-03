"use client";

import { CustomMark } from "@/components/client-side/custom-mark";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export const Hero = () => {
  const container = useRef(null as HTMLDivElement | null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.set(titleRef.current, { x: -1000, alpha: 0 });
    gsap.set(paragraphRef.current, { y: 200, alpha: 0 });
    gsap.set(imageRef.current, { scale: 0, autoAlpha: 0 });

    container?.current?.classList.remove("hidden");
    container?.current?.classList.add("flex");

    gsap.to(titleRef.current, {
      x: 0,
      alpha: 1,
      duration: 1,
      ease: "power3.inOut",
    });
    gsap.to(paragraphRef.current, {
      y: 0,
      duration: 0.5,
      alpha: 1,
      ease: "power2.in",
    });
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.75,
      autoAlpha: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative h-dvh flex-col overflow-hidden md:mx-auto lg:max-w-screen-main lg:flex-row lg:justify-between">
      <div
        ref={container}
        className="relative mx-4 mt-24 hidden h-full w-full flex-col items-center justify-between md:flex-row lg:m-0"
      >
        <div className="lg:w-1/2">
          <h2
            ref={titleRef}
            id="hero-title"
            className="mb-12 text-5xl font-black leading-snug md:mb-28 lg:text-[110px]"
          >
            Projektowanie graficzne <br /> z <CustomMark>pomysłem.</CustomMark>
          </h2>
          <p
            ref={paragraphRef}
            className="absolute text-2xl font-semibold lg:text-7xl"
          >
            Więcej niż <CustomMark rotateToTop={false}>piękne</CustomMark>{" "}
            obrazki.
          </p>
        </div>
        <div className="relative -z-10 mt-12 md:mt-0">
          <Image
            ref={imageRef}
            src={"/images/hero-image.png"}
            alt="Hero image"
            width={648}
            height={648}
            priority
            className=""
          />
        </div>
      </div>
    </section>
  );
};
