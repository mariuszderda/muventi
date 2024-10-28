import Link from "next/link";
import React from "react";

export const MainButton = ({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) => {
  return (
    <Link
      href={href}
      className="flex h-[50px] w-[185px] items-center justify-center rounded bg-adminPanel-p1 text-xl text-white hover:bg-adminPanel-p2"
    >
      {children}
    </Link>
  );
};
