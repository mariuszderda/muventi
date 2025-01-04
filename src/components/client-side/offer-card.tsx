import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const OfferCard = ({
  imageClassNames,
  imageSrc,
  title,
  features,
  containerClassName,
}: {
  imageClassNames?: string;
  imageSrc: StaticImport;
  title: string;
  features: string[];
  containerClassName?: string;
}) => {
  return (
    <div
      className={clsx(
        "relative h-[450px] w-full shrink-0 rounded-3xl bg-white p-4 shadow-3xl md:h-[750px] md:w-[530px]",
        containerClassName
      )}
    >
      <Image
        src={imageSrc}
        alt=""
        className={clsx("absolute h-[120px] md:h-auto", imageClassNames)}
      />
      <div className="pt-44 md:mt-36">
        <h4 className="ml-14 text-4xl font-semibold md:ml-16 md:text-[68px]">
          {title}
        </h4>
        <ul className="ml-14 text-2xl md:ml-16 md:mt-12 md:text-[42px]">
          {features.map((feat) => (
            <li
              key={feat}
              className="list-outside list-image-checkmark marker:mr-2 md:mt-6"
            >
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
