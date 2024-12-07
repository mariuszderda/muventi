import { FormInput } from "@/components/admin-panel/forms/form-input";
// import { ImagePicker } from "@/components/admin-panel/forms/image-picker";
import { offerFormInputs } from "@/constans/forms";
import React from "react";

export const UpdateOffer = () => {
  return (
    <div className="flex w-full flex-col justify-between bg-adminPanel-p4 p-5 lg:flex-row">
      {/*<form className="mr-7 w-full" action={formAction} ref={formRef}>*/}
      <form className="mr-7 w-full">
        <div className="relative z-0 mx-auto my-8 lg:mx-0 lg:max-w-96">
          {offerFormInputs.map(({ id, label, name, type }) => {
            if (type === "text") {
              return (
                <FormInput
                  key={id}
                  name={name}
                  label={label}
                  type={type}
                  value="test"
                  // error={!errors ? "" : errors?.[name]}
                />
              );
            }
            // if (type === "file") {
            //   return (
            //     <ImagePicker
            //       key={id}
            //       label={label}
            //       name={name}
            //       setImage={setImageOffer}
            //       error={!errors ? "" : errors[name]}
            //     />
            //   );
            // }
          })}
        </div>
        {/*<FormSubmit disabled={isPending} label="Create offer" />*/}
      </form>
      <div className="relative h-96 min-h-min w-full">
        {/*<Image*/}
        {/*  src={imageOffer || "/images/image-placeholder.svg"}*/}
        {/*  alt="image placeholder"*/}
        {/*  priority*/}
        {/*  fill*/}
        {/*  className="object-contain"*/}
        {/*/>*/}
      </div>
    </div>
  );
};
