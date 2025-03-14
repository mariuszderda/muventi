"use client";

import { CustomMark } from "@/components/client-side/custom-mark";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const container = useRef(null as HTMLDivElement | null);
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const paragraph = container.current!.querySelector("#hero-paragraph");
    const image = container.current!.querySelector("#hero-image");

    gsap.set(title, { x: -1000, alpha: 0 });
    gsap.set(paragraph, { y: 200, alpha: 0 });
    gsap.set(image, { scale: 0, autoAlpha: 0 });

    container?.current?.classList.remove("hidden");
    container?.current?.classList.add("flex");

    gsap.to(title, {
      x: 0,
      alpha: 1,
      duration: 1,
      ease: "power3.inOut",
    });
    gsap.to(paragraph, {
      y: 0,
      duration: 0.5,
      alpha: 1,
      ease: "power2.in",
    });
    gsap.to(image, {
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
            id="hero-paragraph"
            className="absolute text-2xl font-semibold lg:text-7xl"
          >
            Więcej niż <CustomMark rotateToTop={false}>piękne</CustomMark>{" "}
            obrazki.
          </p>
        </div>
        <div className="relative -z-10 mt-12 md:mt-0">
          <Image
            id="hero-image"
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
