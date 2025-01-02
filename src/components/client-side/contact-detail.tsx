import Image from "next/image";
import at from "../../../public/icons/at.svg";
import location from "../../../public/icons/location.svg";
import phone from "../../../public/icons/phone.svg";

export const ContactDetail = () => {
  return (
    <div className="my-20 flex w-full justify-between">
      <a
        href="tel:511138707"
        className="ml-2 flex items-center gap-4 text-2xl font-semibold"
      >
        <Image src={phone} alt="phone icon" />
        <span>+48 511 138 707</span>
      </a>
      <a
        referrerPolicy="no-referrer"
        target="_blank"
        href="mailto:biuro@muventi.com"
        className="ml-2 flex items-center gap-4 text-2xl font-semibold"
      >
        <Image src={at} alt="phone icon" />
        <span>biuro@muventi.com</span>
      </a>

      <a
        referrerPolicy="no-referrer"
        target="_blank"
        href="https://maps.app.goo.gl/WUqKqK4jyMEN1oHy9"
        className="ml-2 flex items-center gap-4 text-2xl font-semibold"
      >
        <Image src={location} alt="phone icon" />
        <span>47-400 Racibórz, ul. Osiedleńcza 2</span>
      </a>
    </div>
  );
};
