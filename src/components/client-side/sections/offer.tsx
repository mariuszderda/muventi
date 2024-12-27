import { OfferCard } from "@/components/client-side/offer-card";
import { SectionTitle } from "@/components/client-side/section-title";
import computer from "@/../public/images/offer/computer.svg";
import bulb from "@/../public/images/offer/bulb.svg";
import bilbord from "@/../public/images/offer/bilbord.svg";

const offerFeatures = {
  brand: ["logo / księga znaku", "projektowanie graficzne"],
  website: ["wizytówki", "sklepy internetowe"],
  traditionalAds: ["reklama outdoor", "materiały reklamowe"],
};

export const Offer = () => {
  return (
    <>
      <section className="relative -z-10 min-h-[1000px] w-full bg-offer-bgi p-9 md:overflow-hidden">
        <div className="mx-auto lg:max-w-screen-main">
          <SectionTitle>oferta</SectionTitle>
          <div className="right absolute block w-full gap-28 md:mt-[24rem] md:flex md:translate-x-1/2 md:rotate-[24deg]">
            <OfferCard
              imageClassNames="-top-36 -right-8 rotate-12"
              imageSrc={bulb}
              title={"Marka"}
              features={offerFeatures.brand}
              containerClassName="md:-rotate-12"
            />
            <OfferCard
              imageClassNames="-top-24 -right-40"
              imageSrc={computer}
              title={"Strony internetowe"}
              features={offerFeatures.website}
              containerClassName="-translate-y-20"
            />
            <OfferCard
              imageClassNames="-top-24 -right-40"
              imageSrc={bilbord}
              title={"Reklama tradycyjna"}
              features={offerFeatures.traditionalAds}
              containerClassName="md:rotate-12"
            />
          </div>
        </div>
      </section>
    </>
  );
};
