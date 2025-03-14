import clsx from "clsx";
import React from "react";

export const CustomMark = ({
  children,
  rotateToTop = true,
  customClassName,
}: {
  children: React.ReactNode | string;
  rotateToTop?: boolean;
  customClassName?: string;
}) => {
  return (
    <span className="relative inline break-before-all">
      <span
        className={clsx(
          "mark-text",
          customClassName,
          rotateToTop ? "before:-rotate-3" : "before:rotate-3"
        )}
      >
        {children}
      </span>
    </span>
  );
};
