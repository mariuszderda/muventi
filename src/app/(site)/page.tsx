import { Hero } from "@/components/client-side/sections/hero";
import { Offer } from "@/components/client-side/sections/offer";

export default async function Home() {
  return (
    <main>
      <Hero></Hero>
      <Offer />
      <h1>Muventi website</h1>
    </main>
  );
}
