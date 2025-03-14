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
        "relative h-[530px] w-[350px] shrink-0 rounded-3xl bg-white p-4 shadow-3xl 2xl:pb-32",
        containerClassName
      )}
    >
      <Image
        src={imageSrc}
        alt=""
        className={clsx("absolute h-[250px]", imageClassNames)}
      />
      <div className="pt-56">
        <h4 className="ml-7 text-4xl font-semibold md:text-[48px]">{title}</h4>
        <ul className="ml-14 mt-12 text-2xl md:ml-16 md:text-[24px]">
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
