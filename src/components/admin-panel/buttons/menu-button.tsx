"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuButton = {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
};

export const AdminButton = ({ children, href, icon }: Readonly<MenuButton>) => {
  const route = usePathname();
  console.log(route);
  return (
    <Link
      href={href}
      className="border-primary flex items-center gap-3 bg-adminPanel-primary py-2 pl-4 text-base text-adminPanel-mainWhite transition hover:bg-adminPanel-secondary"
    >
      {icon} {children}
    </Link>
  );
};
