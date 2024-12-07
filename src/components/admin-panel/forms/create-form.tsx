"use client";

import { FormSubmit } from "@/components/admin-panel/buttons/form-submit";
import { FormInput } from "@/components/admin-panel/forms/form-input";
import { ImagePicker } from "@/components/admin-panel/forms/image-picker";
import { offerFormInputs } from "@/constans/forms";
import { DataFormDBType, OfferStateErrorType } from "@/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

type ActionProps = {
  action: (_: unknown, formData: FormData) => object | Promise<object>;
  data?: DataFormDBType;
};

const CreateForm = ({ action, data }: ActionProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useFormState(action, {});
  const [imageOffer, setImageOffer] = useState<string | null>(null);
  // @ts-expect-error empty object
  const errors: OfferStateErrorType = state?.errors || null;

  useEffect(() => {
    if (data) {
      setImageOffer(data?.imageUrl);
    }
  }, [data, data?.imageUrl]);

  return (
    <>
      <form className="mr-7 w-full" action={formAction} ref={formRef}>
        <input type="hidden" name="id" value={data?.idOffer} />
        <div className="relative z-0 mx-auto my-8 lg:mx-0 lg:max-w-96">
          {offerFormInputs.map(({ id, label, name, type }) => {
            if (type === "text") {
              return (
                <FormInput
                  key={id}
                  name={name}
                  label={label}
                  type={type}
                  defaultValue={
                    data
                      ? name === "title"
                        ? data?.title
                        : data?.description
                      : undefined
                  }
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
                  defaultValue={data ? data?.imageUrl : undefined}
                  error={!errors ? "" : errors[name]}
                />
              );
            }
          })}
        </div>
        <FormSubmit
          disabled={isPending}
          label={data ? "Update offer" : "Create offer"}
        />
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
    </>
  );
};

export default CreateForm;
