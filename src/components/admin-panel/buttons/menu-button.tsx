"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuButton = {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
};

export const AdminButton = ({ children, href, icon }: Readonly<MenuButton>) => {
  const route = usePathname().startsWith(href);
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 border-adminPanel-p1 bg-adminPanel-p1 py-2 pl-4 text-base text-adminPanel-p3 transition hover:bg-adminPanel-p2",
        route && "bg-adminPanel-p2"
      )}
    >
      {icon} {children}
    </Link>
  );
};
