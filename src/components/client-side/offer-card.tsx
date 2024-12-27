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
        "relative h-[750px] w-[530px] rounded-3xl bg-white shadow-3xl",
        containerClassName
      )}
    >
      <Image
        src={imageSrc}
        alt=""
        className={clsx("absolute", imageClassNames)}
      />
      <div className="pt-56">
        <h4 className="ml-28 text-[68px] font-semibold">{title}</h4>
        <ul className="ml-28 text-[42px]">
          {features.map((feat) => (
            <li key={feat} className="list-outside list-image-checkmark">
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
