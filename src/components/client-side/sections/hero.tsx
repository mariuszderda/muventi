import { CustomMark } from "@/components/client-side/custom-mark";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mt-28 flex w-screen flex-col items-center p-4 md:mx-auto md:mb-48 lg:h-[calc(100vh-350px)] lg:max-w-screen-main lg:flex-row lg:justify-between">
      <div className="w-full lg:w-1/2">
        <h2 className="mb-12 text-5xl font-black leading-snug md:mb-28 lg:text-[110px]">
          Projektowanie graficzne <br /> z <CustomMark>pomysłem.</CustomMark>
        </h2>
        <p className="absolute text-2xl font-semibold lg:text-7xl">
          Więcej niż <CustomMark rotateToTop={false}>piękne</CustomMark>obrazki.
        </p>
      </div>
      <div className="relative mt-12 md:mt-0">
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
