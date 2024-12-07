"use server";

import { uploadImage } from "@/lib/cloudinary";
import { validateFormData } from "@/lib/helpers";
import { getOffer, storeOffer, updateOffer } from "@/lib/offers";
import { GetSingleOffer } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createOfferAction(_: unknown, formData: FormData) {
  const { title, description, image, errors } = validateFormData(
    formData,
    true
  );

  if (errors.title || errors.description || errors.image) {
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (e) {
    console.log(e);
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  await storeOffer({
    image: imageUrl,
    title,
    description,
  });
  revalidatePath("/admin-panel/offer");
  redirect("/admin-panel/offer");
}

export async function updateOfferAction(_: unknown, formData: FormData) {
  const id = formData.get("id") as string;
  const actualOffer: GetSingleOffer = await getOffer(id);

  if (actualOffer === undefined) {
    return {
      errors: {
        data: "Something went wrong!",
      },
    };
  }

  // @ts-expect-error image exist
  const { imageUrl: oldImage } = actualOffer[0];
  const newImage = formData.get("image") as File;

  const { title, description, image, errors } = validateFormData(formData);

  if (errors.title || errors.description || errors.image) {
    return { errors };
  }

  let imageUrl;

  if (newImage.size > 0) {
    try {
      imageUrl = await uploadImage(image);
    } catch (e) {
      console.log(e);
      throw new Error(
        "Image upload failed, post was not created. Please try again later."
      );
    }
  }

  await updateOffer({
    id,
    description,
    image: !imageUrl ? oldImage : imageUrl,
    title,
  });

  revalidatePath("/admin-panel/offer");
  redirect("/admin-panel/offer");
}
