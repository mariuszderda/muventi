import { AdminButton } from "@/components/admin-panel/buttons/menu-button";
import Link from "next/link";
import { MdLocalOffer } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="h-14">
      <div className="ml-64">navbar</div>
      <div className="fixed top-0 flex h-full w-64 flex-col bg-adminPanel-p1">
        <div className="bg-adminPanel-p2 py-6 pl-4">
          <Link href={"/admin-panel"}>
            <p className="font-bold text-white">Muventi - admin panel</p>
          </Link>
        </div>
        <nav className="">
          <ul>
            <li>
              <AdminButton href="/admin-panel/offer" icon={<MdLocalOffer />}>
                Oferta
              </AdminButton>
            </li>
            <li>
              <AdminButton
                href="/admin-panel/realizations"
                icon={<AiFillProduct />}
              >
                Realizacje
              </AdminButton>
            </li>
            {/*<li>kalkulator</li>*/}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
