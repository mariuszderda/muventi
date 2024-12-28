import { CustomMark } from "@/components/client-side/custom-mark";
import { SectionTitle } from "@/components/client-side/section-title";
import Image from "next/image";

export const GraphicDesign = () => {
  return (
    <section className="mx-auto mt-14 max-w-screen-main">
      <SectionTitle>projektowanie graficzne</SectionTitle>
      <div className="flex justify-between">
        <article className="mt-14 max-w-screen-md text-2xl">
          <p className="font-semibold">
            Potrzebujesz profesjonalnych projektów graficznych do swoich
            materiałów reklamowych? Brakuje Ci inspiracji lub pomysłu? Jesteś we
            właściwym miejscu!
          </p>
          <p className="mt-4 font-light">
            Specjalizuję się w projektowaniu różnorodnych materiałów
            reklamowych, takich jak{" "}
            <span className="font-semibold">
              wizytówki, ulotki, plakaty, katalogi, menu, banery, RollUp’y i
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
        <div className="ml-28 flex flex-col gap-12">
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
