import { AdvertisingMaterials } from "@/components/client-side/sections/advertising-materials";
// import { Contact } from "@/components/client-side/sections/contact";
import { GraphicDesign } from "@/components/client-side/sections/graphic-design";
import { Hero } from "@/components/client-side/sections/hero";
import { Offer } from "@/components/client-side/sections/offer";
import { Realization } from "@/components/client-side/sections/realization";

export default async function Home() {
  return (
    <main>
      <Hero></Hero>
      <Offer />
      <GraphicDesign />
      <AdvertisingMaterials />
      <Realization />
      {/*<Contact />*/}
      <h1>Muventi website</h1>
    </main>
  );
}
