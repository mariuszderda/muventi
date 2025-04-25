import Image from "next/image";
import facebookIcon from "@/../public/icons/facebook_icon.svg";

export const Footer = () => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="mt-32 h-20 bg-site-secondGray md:h-40">
      <div className="mx-auto flex h-full max-w-screen-main items-center justify-between px-4">
        <p className="text-lg font-semibold md:text-2xl">
          Copyright © 2016-{actualYear} Muventi
        </p>
        <Image
          src={facebookIcon}
          className="h-12 md:h-auto"
          alt="facebook icon"
        />
      </div>
    </footer>
  );
};
