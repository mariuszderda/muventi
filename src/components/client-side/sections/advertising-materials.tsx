"use client";

import { SectionTitle } from "@/components/client-side/section-title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export const AdvertisingMaterials = () => {
  const sectionRefAM = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef(null);
  const articleRef = useRef(null);
  const imageRef = useRef(null);

  console.log();
  useGSAP(
    () => {
      gsap.to(sectionRefAM.current, {
        scrollTrigger: {
          pin: containerRef.current,
          // markers: true,
          trigger: containerRef.current,
          start: "bottom 80%",
          endTrigger: imageRef.current,
          end: "bottom 80%",
          scrub: true,
        },
      });
    },
    { scope: sectionRefAM }
  );

  return (
    <section
      ref={sectionRefAM}
      className="relative z-30 mx-auto mt-14 max-w-screen-main bg-white p-4 md:pt-14"
    >
      <div className="flex flex-col justify-between gap-1 md:flex-row">
        <div
          ref={imageRef}
          className="relative z-40 order-2 flex max-w-[524px] flex-col gap-12 bg-white pt-8 md:order-1 md:mt-0 md:min-h-[1239px] md:pt-0"
        >
          <Image
            src={"/images/advertising-materials/materiały-reklamowe-2.jpg"}
            alt="lala"
            width={609}
            height={406}
          />
          <Image
            src={"/images/advertising-materials/materiały-reklamowe-1.jpg"}
            alt="lala"
            width={609}
            height={527}
          />
        </div>
        <article
          ref={containerRef}
          className="order-1 max-w-screen-md text-xl md:order-2 md:ml-28 md:text-2xl"
        >
          <div ref={articleRef}>
            <SectionTitle>materiały</SectionTitle>
            <SectionTitle>reklamowe</SectionTitle>
            <p className="mt-14 font-semibold">
              Wszystko w jednym miejscu – oszczędzaj swój cenny czas i otrzymuj
              gotowe materiały reklamowe!
            </p>
            <p className="mt-4 font-light">
              Dzięki kompleksowej obsłudze, nie musisz już szukać różnych
              dostawców ani tracić czasu na koordynację kliku zleceń
              jednocześnie. Cały proces, od poprawnego przygotowania plików,
              przez dobór odpowiednich materiałów, wybór specjalistycznej
              drukarni lub osobiste wykonanie leży po mojej stronie, co
              gwarantuje najwyższą jakość oraz spójność gotowych materiałów
              reklamowych.
            </p>
            <p className="mt-4 font-light">
              Wieloletnia współpraca z najlepszymi drukarniami pozwala sprostać
              niemalże każdemu zadaniu, czy to niewielka wizytówka wzbogacona
              dodatkowymi uszlachetnieniami, wielkoformatowy baner reklamowy czy
              wolnostojąca tablica informacyjna. Twoje pomysły zasługują na
              najlepsze wykonanie.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
