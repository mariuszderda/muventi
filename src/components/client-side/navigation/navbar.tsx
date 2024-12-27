import { MenuIcon } from "@/components/client-side/navigation/menu-icon";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-[9999] h-12 w-full bg-white/70 px-16 pb-16 pt-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-main items-center justify-between">
        <Image
          src={"/images/muventi-studio-graficzne-logo-center.png"}
          alt="Muventi logo"
          width={180}
          height={50}
          priority
          style={{ width: "auto", height: "50px" }}
        />
        <MenuIcon />
      </div>
    </header>
  );
};
