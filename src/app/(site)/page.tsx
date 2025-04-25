import { AdvertisingMaterials } from "@/components/client-side/sections/advertising-materials";
import { Contact } from "@/components/client-side/sections/contact";
import { GraphicDesign } from "@/components/client-side/sections/graphic-design";
import { Hero } from "@/components/client-side/sections/hero";
import { Offer } from "@/components/client-side/sections/offer";
import { Realization } from "@/components/client-side/sections/realization";
import { getRealizations } from "@/lib/realizations";
import { RealizationDBDataType } from "@/types";

export default async function Home() {
  const realizations: RealizationDBDataType = await getRealizations(5);
  return (
    <main>
      <Hero />
      <Offer />
      <GraphicDesign />
      <AdvertisingMaterials />
      {/* @ts-expect-error type error */}
      <Realization realizations={realizations} />
      <Contact />
    </main>
  );
}
