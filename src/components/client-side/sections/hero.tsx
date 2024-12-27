import { CustomMark } from "@/components/client-side/custom-mark";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="md: mx-auto mb-48 mt-28 flex h-[calc(100vh-350px)] max-w-screen-main flex-col items-center lg:flex-row lg:justify-between">
      <div className="w-full lg:w-1/2">
        <h2 className="mb-28 text-5xl font-black leading-snug lg:text-[110px]">
          Projektowanie graficzne <br /> z <CustomMark>pomysłem.</CustomMark>
        </h2>
        <p className="absolute font-semibold lg:text-7xl">
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
