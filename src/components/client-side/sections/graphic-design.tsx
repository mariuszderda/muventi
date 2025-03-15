"use client";

import { CustomMark } from "@/components/client-side/custom-mark";
import { SectionTitle } from "@/components/client-side/section-title";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export const GraphicDesign = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  console.log();
  useGSAP(
    () => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          pin: containerRef.current,
          trigger: containerRef.current,
          start: "clamp(bottom 80%)",
          end: "clamp(bottom center)",
          endTrigger: imageRef.current,
          // scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-28 max-w-screen-main px-4 md:p-0"
    >
      <div className="mb-14">
        <SectionTitle>projektowanie</SectionTitle>
        <SectionTitle>graficzne</SectionTitle>
      </div>
      <div className="flex flex-col items-start justify-between md:flex-row">
        <article
          ref={containerRef}
          className="max-w-screen-md text-xl md:text-2xl"
        >
          <p className="font-semibold">
            Potrzebujesz profesjonalnych projektów graficznych do swoich
            materiałów reklamowych? Brakuje Ci inspiracji lub pomysłu? Jesteś we
            właściwym miejscu!
          </p>
          <p className="mt-4 font-light">
            Specjalizuję się w projektowaniu różnorodnych materiałów
            reklamowych, takich jak{" "}
            <span className="font-semibold">
              wizytówki, ulotki, plakaty, katalogi, menu, banery, RollUp’y i{" "}
              <CustomMark> wiele innych. </CustomMark>
            </span>{" "}
            Moje doświadczenie w branży reklamowej gwarantuje, że dostarczę Ci
            profesjonalne i dopasowane do Twoich potrzeb projekty graficzne.
          </p>
          <p className="mt-4 font-light">
            Tworząc grafiki, kładę nacisk na zrozumienie Twojej marki i treści,
            które chcesz przekazać. Wszelkie detale mają znaczenie, dlatego dbam
            o to, aby każdy projekt był perfekcyjny pod względem estetyki i
            czytelności.
          </p>
          <p className="mt-4 font-light">
            Skorzystaj z mojego doświadczenia, aby Twoje materiały reklamowe
            wyróżniały się spośród konkurencji i skutecznie przyciągały uwagę
            Twoich klientów.
          </p>
          <p className="mt-4 font-light">
            <CustomMark rotateToTop={false} customClassName="font-semibold">
              Zapraszam do kontaktu
            </CustomMark>
            , abyśmy mogli wspólnie stworzyć projekty, które doskonale oddadzą
            charakter Twojej działalności i pomogą Ci osiągnąć zamierzone cele.
          </p>
        </article>
        <div className="relative z-40 flex max-w-[560px] flex-col gap-12 bg-white pt-8 md:ml-28 md:pt-0">
          <Image
            src={"/images/graphic-design/projektowanie-graficzne-1.jpg"}
            alt="lala"
            width={609}
            height={406}
          />
          <Image
            src={"/images/graphic-design/projektowanie-graficzne-2.jpg"}
            alt="lala"
            width={609}
            height={527}
          />
        </div>
      </div>
    </section>
  );
};
