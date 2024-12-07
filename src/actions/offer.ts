"use server";

import { uploadImage } from "@/lib/cloudinary";
import { validateFormData } from "@/lib/helpers";
import { storeOffer } from "@/lib/offers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createOffer(_: unknown, formData: FormData) {
  const { title, description, image, errors } = validateFormData(formData);

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
