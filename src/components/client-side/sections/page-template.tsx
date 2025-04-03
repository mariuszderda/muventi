import { SectionTitle } from "@/components/client-side/section-title";
import { RealizationDBDataType } from "@/types";
import clsx from "clsx";
import Image from "next/image";

const PageTemplate = async ({
  title,
  dataArray,
}: {
  title: string;
  dataArray: RealizationDBDataType[];
}) => {
  return (
    <main>
      <section className="main-section">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-12 grid grid-cols-3">
          {dataArray?.map((realization: RealizationDBDataType, index) => (
            <div
              className={clsx(
                index % 2 !== 0 && "z-20",
                index % 2 === 0 && "z-10"
              )}
              key={realization.id}
            >
              <Image
                src={realization.image}
                alt={realization.description}
                width={600}
                height={600}
                className={clsx(
                  "static h-96 w-full object-contain drop-shadow-xl",
                  index % 2 !== 0 && "z-20 scale-125",
                  index % 2 === 0 && "z-10 scale-90"
                )}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PageTemplate;
