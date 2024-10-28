"use server";

import { createConnection } from "@/config/db";
import { initDb } from "@/lib/initDb";
import { offerType } from "@/types";

initDb();

export const storeOffer = async ({ image, title, description }: offerType) => {
  const db = await createConnection();
  const sql = `INSERT INTO offers (imageUrl, title, description) VALUES (?, ?, ?)`;
  const values = [image, title, description];
  try {
    const [result, fields] = await db.execute({ sql, values });
    return { result, fields };
  } catch (e) {
    console.log(e);
  }
};
export const getOffers = async () => {
  const db = await createConnection();
  try {
    const [result] =
      await db.query(`SELECT id, title, description, imageUrl, created_at, updated_at FROM offers ORDER BY created_at DESC
`);
    return result;
  } catch (err) {
    console.log(err);
  }
};
