"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storeOffer } from "@/lib/offers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createOffer(_: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const description = formData.get("description") as string;
  const errors = {
    title: "",
    description: "",
    image: "",
  };

  if (!title || title?.trim().length === 0) {
    errors.title = "Title is required.";
  }
  if (!description || description.trim().length === 0) {
    errors.description = "Content is required";
  }
  if (!image || typeof image !== "object" || image.size === 0) {
    errors.image = "Image is required";
  }

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
  revalidatePath("/admin-panel/offer/create");
  revalidatePath("/admin-panel/offer");
  redirect("/admin-panel/offer");
}
