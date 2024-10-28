"use client";

import clsx from "clsx";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";

export const ImagePicker = ({
  label,
  name,
  setImage,
  error,
}: {
  label: string;
  name: string;
  setImage: Dispatch<SetStateAction<string | null>>;
  error: string;
}) => {
  const [filename, setFilename] = useState("");
  const inputImage = useRef<HTMLInputElement>(null);
  const handlePickClick = () => {
    inputImage.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    if (!file) {
      setImage(null);
      setFilename(label);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      // @ts-expect-error file
      setImage(fileReader.result);
      // @ts-expect-error filename
      setFilename(target!.files[0].name);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="relative z-0 mx-auto my-8 lg:mx-0 lg:max-w-96">
      <input
        type="file"
        id="offer_image"
        name={name}
        className="peer hidden w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder=" "
        accept="image/png, image/jpeg"
        ref={inputImage}
        onChange={handleImageChange}
      />
      <div className="mt-8 w-full border-0 border-b-2 border-gray-300 py-2">
        <button
          className={clsx(
            "border-gray-300 text-base text-gray-500",
            error && "text-red-500"
          )}
          type="button"
          onClick={handlePickClick}
        >
          {filename || label}
        </button>
      </div>
      {error && (
        <p className="pt-1.5 text-sm font-bold text-red-500">{error}</p>
      )}
    </div>
  );
};
