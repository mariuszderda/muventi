"use client";

import { MenuIcon } from "@/components/client-side/navigation/menu-icon";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const handleMenuButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 120 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.inOut",
          delay: -1,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.invalidate().play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isOpen]);

  return (
    <header
      ref={container}
      className="fixed left-0 top-0 z-[9999] h-12 w-full bg-white/70 px-4 pb-16 pt-4 backdrop-blur-md sm:px-16"
    >
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
        <button className="block" onClick={handleMenuButtonClick}>
          <MenuIcon fill="#353831" />
        </button>
      </div>
      <div className="menu-overlay fixed left-0 top-0 z-[9900] h-screen w-full bg-site-primary pt-4 transition-transform">
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
          <button className="block" onClick={handleMenuButtonClick}>
            <MenuIcon isOpen={isOpen} fill="#D9D9D9" />
          </button>
        </div>
        <menu
          className={clsx(
            "my-auto flex size-full flex-col items-center text-9xl font-normal uppercase text-site-secondGray transition"
          )}
        >
          <li className="block overflow-hidden">
            <div className="menu-link-item-holder">
              <Link
                onClick={handleMenuButtonClick}
                className="nav-hover-btn"
                href={"/realizacje"}
              >
                realizacje
              </Link>
            </div>
          </li>
          <li className="block overflow-hidden">
            <div className="menu-link-item-holder">
              <Link
                onClick={handleMenuButtonClick}
                className="nav-hover-btn"
                href={"/oferta"}
              >
                oferta
              </Link>
            </div>
          </li>
          <li className="block overflow-hidden">
            <div className="menu-link-item-holder">
              <Link
                onClick={handleMenuButtonClick}
                className="nav-hover-btn"
                href={"/kontakt"}
              >
                kontakt
              </Link>
            </div>
          </li>
          {/*<li>*/}
          {/*  <Link*/}
          {/*    className="block h-24 w-80 text-center"*/}
          {/*    href={"/kalkulator"}*/}
          {/*  >*/}
          {/*    kalkulator*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </menu>
      </div>
    </header>
  );
};
