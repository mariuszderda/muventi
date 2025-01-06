"use client";

import { MenuIcon } from "@/components/client-side/navigation/menu-icon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="fixed left-0 top-0 z-[9999] h-12 w-full bg-white/70 px-4 pb-16 pt-4 backdrop-blur-md sm:px-16">
      <div className="mx-auto flex max-w-screen-main items-center justify-between">
        <div className="relative w-[180px]">
          <Link href={"/"}>
            <Image
              src={"/images/muventi-studio-graficzne-logo-center.png"}
              alt="Muventi logo"
              width={180}
              height={49}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <button onClick={handleMenuButtonClick}>
          <MenuIcon isOpen={!isOpen} fill="#353831" />
        </button>
      </div>
      <div
        className={clsx(
          "fixed left-0 top-0 z-[9900] h-screen w-full bg-site-primary pt-4 transition-transform",
          !isOpen && "-translate-y-full"
        )}
      >
        <div className="mx-auto flex max-w-screen-main items-center justify-between">
          <div className="relative w-[180px]">
            <Link href={"/"} onClick={handleMenuButtonClick}>
              <Image
                src={"/images/muventi-studio-graficzne-logo-white-center.png"}
                alt="Muventi logo"
                width={180}
                height={49}
                priority
                className="h-auto w-auto"
              />
            </Link>
          </div>
          <button onClick={handleMenuButtonClick}>
            <MenuIcon isOpen={isOpen} fill="#D9D9D9" />
          </button>
        </div>
        <menu
          className={clsx(
            "my-auto flex flex-col items-center justify-center gap-28 pt-44 text-6xl font-black leading-normal text-site-secondGray transition"
          )}
        >
          <li>
            <Link
              onClick={handleMenuButtonClick}
              className="block h-24 w-80 text-center leading-normal transition hover:font-pritzious hover:text-8xl"
              href={"/realizacje"}
            >
              realizacje
            </Link>
          </li>
          <li>
            <Link
              className="block h-24 w-80 text-center leading-normal transition hover:font-pritzious hover:text-8xl"
              href={"/oferta"}
            >
              oferta
            </Link>
          </li>
          <li>
            <Link
              className="block h-24 w-80 text-center leading-normal transition hover:font-pritzious hover:text-8xl"
              href={"/kontakt"}
            >
              kontakt
            </Link>
          </li>
          {/*<li>*/}
          {/*  <Link*/}
          {/*    className="block h-24 w-80 text-center leading-normal hover:font-pritzious hover:text-8xl"*/}
          {/*    href={"/kontakt"}*/}
          {/*  >*/}
          {/*    kalkulator*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </menu>
      </div>
    </header>
  );
};
