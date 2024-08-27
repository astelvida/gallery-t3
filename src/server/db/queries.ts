"server-only";

import { auth } from "@clerk/nextjs/server";
import { db } from "../db/index";
import { images } from "./schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getImages = () => {
  const user = auth();

  if (!user.userId) {
    throw new Error("User not found");
  }

  return db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
};

export const getImage = async (id: number) => {
  const user = auth();
  if (!user.userId) throw new Error("User not authorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== user.userId) throw new Error("User not authorized");

  return image;
};

export async function deleteImage(id: number) {
  await db.delete(images).where(eq(images.id, id));

  redirect("/");
}
