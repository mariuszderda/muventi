import { RealizationDesk } from "@/components/client-side/realization-desk";
import { SectionTitle } from "@/components/client-side/section-title";

export const Realization = () => {
  return (
    <section className="mx-auto mt-28 max-w-screen-main">
      <SectionTitle>wybrane realizacje</SectionTitle>
      <div className="mt-14 w-full md:mt-40">
        <RealizationDesk />
      </div>
    </section>
  );
};
