import React from "react";

export const MainButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <button className="flex h-[50px] w-[185px] items-center justify-center rounded bg-adminPanel-primary text-xl text-white hover:bg-adminPanel-secondary">
      {children}
    </button>
  );
};
