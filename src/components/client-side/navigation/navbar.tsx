import { MenuIcon } from "@/components/client-side/navigation/menu-icon";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-[9999] h-12 w-full bg-white/70 px-4 pb-16 pt-4 backdrop-blur-md sm:px-16">
      <div className="mx-auto flex max-w-screen-main items-center justify-between">
        <div className="relative w-[180px]">
          <Image
            src={"/images/muventi-studio-graficzne-logo-center.png"}
            alt="Muventi logo"
            width={180}
            height={49}
            priority
            className="h-auto w-auto"
          />
        </div>
        <MenuIcon />
      </div>
    </header>
  );
};
