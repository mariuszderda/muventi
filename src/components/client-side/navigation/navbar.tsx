"use client";

import { MenuIcon } from "@/components/client-side/navigation/menu-icon";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const container = useRef(null);
  const menuBar = useRef(null);
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

  useEffect(() => {
    gsap.to(menuBar.current, {
      scaleX: 1,
      duration: 0.7,
      opacity: 1,
      delay: 0.7,
    });
  }, []);

  return (
    <header
      ref={container}
      className="fixed left-0 top-0 z-[9999] size-full h-12 bg-white/70 px-4 pb-16 pt-4 sm:px-16"
    >
      <div
        ref={menuBar}
        className="mx-auto flex max-w-screen-main -scale-x-0 items-center justify-between bg-[#F0F0F0] px-4 py-2 opacity-0 after:absolute after:left-1.5 after:top-1.5 after:h-full after:w-full after:border-[0.5px] after:border-site-mainGray"
      >
        <div className="relative z-20 w-[180px]">
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
        <button className="z-20 block" onClick={handleMenuButtonClick}>
          <MenuIcon fill="#353831" />
        </button>
      </div>
      <div className="menu-overlay fixed left-0 top-0 z-[9900] h-screen w-full overflow-hidden bg-site-primary pt-4 transition-transform">
        <div className="mx-auto flex max-w-screen-main items-start justify-between">
          <div className="relative order-1 w-[180px]">
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
          <button className="order-3 block" onClick={handleMenuButtonClick}>
            <MenuIcon isOpen={isOpen} fill="#D9D9D9" />
          </button>

          <menu className="order-2 my-auto flex size-full flex-col pt-24 text-9xl font-normal uppercase text-site-secondGray transition">
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
      </div>
    </header>
  );
};
