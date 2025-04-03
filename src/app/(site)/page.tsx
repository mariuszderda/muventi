import { AdvertisingMaterials } from "@/components/client-side/sections/advertising-materials";
import { Contact } from "@/components/client-side/sections/contact";
import { GraphicDesign } from "@/components/client-side/sections/graphic-design";
import { Hero } from "@/components/client-side/sections/hero";
import { Offer } from "@/components/client-side/sections/offer";
import { Realization } from "@/components/client-side/sections/realization";
import { getRealizations } from "@/lib/realizations";

export default async function Home() {
  const realizations = await getRealizations();
  return (
    <main>
      <Hero />
      <Offer />
      <GraphicDesign />
      <AdvertisingMaterials />
      <Realization realizations={realizations} />
      <Contact />
    </main>
  );
}
