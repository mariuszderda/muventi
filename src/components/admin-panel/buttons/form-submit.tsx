"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";
type FormSubmitProps = {
  label: string;
  disabled: boolean;
};

export const FormSubmit = ({ label, disabled }: FormSubmitProps) => {
  const status = useFormStatus();
  if (status.pending) {
    return <p>Creating...</p>;
  }
  return (
    <>
      <button
        disabled={disabled}
        className={clsx(
          "flex h-[50px] w-[185px] transform-gpu items-center justify-center rounded bg-adminPanel-p5 text-xl text-white transition-colors delay-100 hover:scale-95 hover:bg-adminPanel-p5/90",
          disabled && "bg-adminPanel-p2/30 disabled:pointer-events-none"
        )}
      >
        {label}
      </button>
    </>
  );
};
