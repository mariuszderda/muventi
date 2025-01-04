import { SectionTitle } from "@/components/client-side/section-title";
import Image from "next/image";

export const AdvertisingMaterials = () => {
  return (
    <section className="mx-auto mt-14 max-w-screen-main px-4 md:mt-28 md:p-0">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="order-2 mt-12 flex flex-col gap-12 md:order-1 md:mt-0">
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
        <article className="order-1 max-w-screen-md text-xl md:order-2 md:ml-28 md:text-2xl">
          <SectionTitle>materiały</SectionTitle>
          <SectionTitle>reklamowe</SectionTitle>
          <p className="mt-14 font-semibold">
            Wszystko w jednym miejscu – oszczędzaj swój cenny czas i otrzymuj
            gotowe materiały reklamowe!
          </p>
          <p className="mt-4 font-light">
            Dzięki kompleksowej obsłudze, nie musisz już szukać różnych
            dostawców ani tracić czasu na koordynację kliku zleceń jednocześnie.
            Cały proces, od poprawnego przygotowania plików, przez dobór
            odpowiednich materiałów, wybór specjalistycznej drukarni lub
            osobiste wykonanie leży po mojej stronie, co gwarantuje najwyższą
            jakość oraz spójność gotowych materiałów reklamowych.
          </p>
          <p className="mt-4 font-light">
            Wieloletnia współpraca z najlepszymi drukarniami pozwala sprostać
            niemalże każdemu zadaniu, czy to niewielka wizytówka wzbogacona
            dodatkowymi uszlachetnieniami, wielkoformatowy baner reklamowy czy
            wolnostojąca tablica informacyjna. Twoje pomysły zasługują na
            najlepsze wykonanie.
          </p>
        </article>
      </div>
    </section>
  );
};
