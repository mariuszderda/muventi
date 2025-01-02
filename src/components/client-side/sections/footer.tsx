"use client";

import Image from "next/image";
import facebookIcon from "@/../public/icons/facebook_icon.svg";

export const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="mt-32 h-40 bg-site-secondGray">
      <div className="mx-auto flex h-full max-w-screen-main items-center justify-between">
        <p className="text-2xl font-semibold">
          Copyright © 2016-{actualYear} Muventi
        </p>
        <Image src={facebookIcon} alt="facebook icon" />
      </div>
    </footer>
  );
};
