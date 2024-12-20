import { CustomMark } from "@/components/custom-mark";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mx-auto my-28 flex h-[calc(100vh-350px)] max-w-screen-main items-center">
      <div className="w-1/2">
        <h2 className="mb-28 text-[110px] font-black">
          Projektowanie graficzne <br /> z <CustomMark>pomysłem.</CustomMark>
        </h2>
        <p className="absolute text-7xl font-semibold">
          Więcej niż <CustomMark rotateToTop={false}>piękne</CustomMark>obrazki.
        </p>
      </div>
      <div className="relative">
        <Image
          src={"/images/hero-image.png"}
          alt="Hero image"
          width={648}
          height={648}
          priority
          className="relative -z-10"
        />
      </div>
    </section>
  );
};
