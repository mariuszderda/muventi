"use client";

import Arrow from "@/components/client-side/arrow";
import { RealizationType } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

export const RealizationGallery = ({
  realizations,
}: {
  realizations: RealizationType[];
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + realizations.length) % realizations.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % realizations.length);
  };

  return (
    <div className="relative mx-auto flex w-full flex-row justify-between bg-white">
      <button
        className="p-2 transition-all hover:bg-[#1a222f]"
        onClick={prevSlide}
      >
        <Arrow direction="left" />
      </button>
      <div className="relative h-[350px] self-center">
        <Image
          src={realizations[currentIndex].image}
          alt={realizations[currentIndex].description}
          width={2000}
          height={2000}
          objectFit="cover"
          className="aspect-auto h-full w-full object-cover"
        />
      </div>

      <button
        className="p-2 transition-all hover:bg-[#1a222f]"
        onClick={nextSlide}
      >
        <Arrow direction="right" />
      </button>
    </div>
  );
};
