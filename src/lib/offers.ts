"use server";

import { createConnection } from "@/config/db";
import { initDb } from "@/lib/initDb";
import { CreateOfferType, GetSingleOffer, UpdateOfferType } from "@/types";

initDb();

export const storeOffer = async ({
  image,
  title,
  description,
}: CreateOfferType) => {
  const db = await createConnection();
  const sql = `INSERT INTO offers (imageUrl, title, description)
               VALUES (?, ?, ?)`;
  const values = [image, title, description];
  try {
    const [result, fields] = await db.execute({ sql, values });
    return { result, fields };
  } catch (e) {
    console.log(e);
  } finally {
    await db.end();
  }
};
export const updateOffer = async ({
  id,
  image,
  title,
  description,
}: UpdateOfferType) => {
  const db = await createConnection();
  const sql = `UPDATE offers
               SET title='${title}',
                   description='${description}',
                   imageUrl='${image}'
               WHERE id = UUID_TO_BIN('${id}')`;
  try {
    const [result, fields] = await db.execute({ sql });
    return { result, fields };
  } catch (e) {
    console.log(e);
  }
};

export const getOffer: (id: string) => Promise<GetSingleOffer> = async (
  id: string
) => {
  const db = await createConnection();
  const sql = `SELECT BIN_TO_UUID(id) as idOffer, title, description, imageUrl
               FROM offers
               WHERE id = UUID_TO_BIN(?)`;
  const values = [id];
  try {
    const [result] = await db.execute({ sql, values });
    if (!result) return undefined;
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getOffers = async () => {
  const db = await createConnection();
  try {
    const [result] = await db.query(`SELECT BIN_TO_UUID(id) as id,
                             title,
                             description,
                             imageUrl        as image,
                             created_at,
                             updated_at
                      FROM offers
                      ORDER BY created_at DESC
      `);
    if (!result) {
      return {
        error: "data not found",
      };
    }
    return result;
  } catch (e) {
    console.log(e);
  }
};
