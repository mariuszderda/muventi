export function validateFormData(formData: FormData) {
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

  return {
    title,
    description,
    image,
    errors,
  };
}
