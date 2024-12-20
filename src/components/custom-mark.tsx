import clsx from "clsx";
import React from "react";

export const CustomMark = ({
  children,
  rotateToTop = true,
}: {
  children: React.ReactNode | string;
  rotateToTop?: boolean;
}) => {
  return (
    <span className="relative inline">
      <span
        className={clsx(
          "text-white content-[''] before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-adminPanel-p5 before:bg-gradient-to-r before:from-site-primary before:to-site-secondary before:p-3",
          rotateToTop ? "before:-rotate-3" : "before:rotate-3"
        )}
      >
        {children}
      </span>
    </span>
  );
};
