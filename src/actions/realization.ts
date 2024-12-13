"use server";

import { uploadImage } from "@/lib/cloudinary";
import { validateFormData } from "@/lib/helpers";
import {
  getRealization,
  storeRealization,
  updateRealization,
} from "@/lib/realizations";
import { GetSingleOffer } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteRealization as deleteQuery } from "@/lib/realizations";

export async function createRealizationAction(_: unknown, formData: FormData) {
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

  await storeRealization({
    image: imageUrl,
    title,
    description,
  });
  revalidatePath("/admin-panel/realizations");
  redirect("/admin-panel/realizations");
}

export async function updateRealizationAction(_: unknown, formData: FormData) {
  const id = formData.get("id") as string;
  const actualRealization: GetSingleOffer = await getRealization(id);

  if (actualRealization === undefined) {
    return {
      errors: {
        data: "Something went wrong!",
      },
    };
  }

  // @ts-expect-error image exist
  const { imageUrl: oldImage } = actualRealization[0];
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

  await updateRealization({
    id,
    description,
    image: !imageUrl ? oldImage : imageUrl,
    title,
  });

  revalidatePath("/admin-panel/realizations");
  redirect("/admin-panel/realizations");
}

export async function deleteRealization(id: string) {
  await deleteQuery(id);

  revalidatePath("/admin-panel/realizations");
  redirect("/admin-panel/realizations");
}
