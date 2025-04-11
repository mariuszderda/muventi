import { CustomMark } from "@/components/client-side/custom-mark";
import React from "react";

export const SectionTitle = ({
  children,
  ref,
}: {
  children: string;
  ref?: React.RefObject<null>;
}) => {
  return (
    <h3 ref={ref} className="text-3xl font-black md:text-6xl">
      <CustomMark>{children}</CustomMark>
    </h3>
  );
};
