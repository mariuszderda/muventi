"use client";

import { DeleteForm } from "@/components/admin-panel/forms/delete-form";
import { FormSubmit } from "@/components/admin-panel/buttons/form-submit";
import { FormInput } from "@/components/admin-panel/forms/form-input";
import { ImagePicker } from "@/components/admin-panel/forms/image-picker";
import { DataFormDBType, InputListType, OfferStateErrorType } from "@/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

type ActionProps = {
  action: (_: unknown, formData: FormData) => object | Promise<object>;
  data?: DataFormDBType;
  deleteFunction?: (id: string) => void;
  inputList: InputListType[];
};

const CreateForm = ({
  action,
  data,
  deleteFunction,
  inputList,
}: ActionProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useFormState(action, {});
  const [imageOffer, setImageOffer] = useState<string | null>(null);
  // @ts-expect-error errors exist
  const errors: OfferStateErrorType = state.errors! || null;

  useEffect(() => {
    if (data) {
      setImageOffer(data?.imageUrl);
    }
  }, [data, data?.imageUrl]);

  return (
    <>
      <div>
        <form className="mr-7 w-full" action={formAction} ref={formRef}>
          <input type="hidden" name="id" value={data?.idOffer} />
          <div className="relative z-0 mx-auto my-8 lg:mx-0 lg:max-w-96">
            {inputList.map(({ id, label, title, type }) => {
              if (type === "text") {
                return (
                  <FormInput
                    key={id}
                    name={title}
                    label={label}
                    type={type}
                    defaultValue={
                      data
                        ? title === "title"
                          ? data?.title
                          : data?.description
                        : undefined
                    }
                    error={!errors ? "" : errors?.[title]}
                  />
                );
              }
              if (type === "file") {
                return (
                  <ImagePicker
                    key={id}
                    label={label}
                    name={title}
                    setImage={setImageOffer}
                    defaultValue={data ? data?.imageUrl : undefined}
                    error={!errors ? "" : errors[title]}
                  />
                );
              }
            })}
          </div>
          <FormSubmit disabled={isPending} label={data ? "Update" : "Create"} />
        </form>
        {data && (
          <DeleteForm id={data?.idOffer} deleteFunction={deleteFunction} />
        )}
      </div>
      <div className="relative h-96 min-h-min w-full px-4 lg:mx-4 lg:px-0">
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
