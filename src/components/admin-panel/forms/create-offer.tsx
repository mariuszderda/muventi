"use client";

import { FormSubmit } from "@/components/admin-panel/buttons/form-submit";
import { FormInput } from "@/components/admin-panel/forms/form-input";
import { ImagePicker } from "@/components/admin-panel/forms/image-picker";
import { PageTitle } from "@/components/admin-panel/page-title";
import { offerFormInputs } from "@/constans/forms";
import { OfferStateErrorType } from "@/types";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useFormState } from "react-dom";

type ActionProps = {
  action: (_: unknown, formData: FormData) => object | Promise<object>;
};

const CreateOffer = ({ action }: ActionProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useFormState(action, {});
  const [imageOffer, setImageOffer] = useState<string | null>(null);
  // @ts-expect-error empty object
  const errors: OfferStateErrorType = state?.errors || null;

  return (
    <main>
      <PageTitle>Create Offer</PageTitle>
      <div className="flex w-full flex-col justify-between bg-adminPanel-p4 p-5 lg:flex-row">
        <form className="mr-7 w-full" action={formAction} ref={formRef}>
          <div className="relative z-0 mx-auto my-8 lg:mx-0 lg:max-w-96">
            {offerFormInputs.map(({ id, label, name, type }) => {
              if (type === "text") {
                return (
                  <FormInput
                    key={id}
                    name={name}
                    label={label}
                    type={type}
                    error={!errors ? "" : errors?.[name]}
                  />
                );
              }
              if (type === "file") {
                return (
                  <ImagePicker
                    key={id}
                    label={label}
                    name={name}
                    setImage={setImageOffer}
                    error={!errors ? "" : errors[name]}
                  />
                );
              }
            })}
          </div>
          <FormSubmit disabled={isPending} label="Create offer" />
        </form>
        <div className="relative h-96 min-h-min w-full">
          <Image
            src={imageOffer || "/images/image-placeholder.svg"}
            alt="image placeholder"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default CreateOffer;
