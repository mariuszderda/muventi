"use server";

import { createConnection } from "@/config/db";
import { initDb } from "@/lib/initDb";
import { CreateOfferType, GetSingleOffer, UpdateOfferType } from "@/types";
import { RowDataPacket } from "mysql2";

initDb();

export const storeRealization = async ({
  image,
  title,
  description,
}: CreateOfferType) => {
  const db = await createConnection();
  const sql = `INSERT INTO realizations (imageUrl, title, description)
               VALUES (?, ?, ?)`;
  const values = [image, title, description];
  try {
    const [result, fields] = await db.execute({ sql, values });
    return { result, fields };
  } catch (e) {
    console.log(e);
  }
};
export const updateRealization = async ({
  id,
  image,
  title,
  description,
}: UpdateOfferType) => {
  const db = await createConnection();
  const sql = `UPDATE realizations
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

export const getRealization: (id: string) => Promise<GetSingleOffer> = async (
  id: string
) => {
  const db = await createConnection();
  const sql = `SELECT BIN_TO_UUID(id) as idOffer, title, description, imageUrl
               FROM realizations
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
export const getRealizations = async (limit = 0) => {
  const db = await createConnection();
  try {
    const [result] = await db.query<
      RowDataPacket[]
    >(`SELECT BIN_TO_UUID(id) as id,
                             title,
                             description,
                             imageUrl        as image
                      FROM realizations
                      ORDER BY created_at DESC
                      ${limit > 0 ? "LIMIT " + limit : ""}
      `);
    if (!result) {
      return {
        error: "data not found",
      };
    }
    console.log("REALIZATYIONS: " + result);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export async function deleteRealization(id: string) {
  const db = await createConnection();

  const sql = `DELETE FROM realizations WHERE id = UUID_TO_BIN(?) LIMIT 1`;
  const values = [id];

  try {
    const [result] = await db.query({ sql, values });
    console.log(result);
    if (!result) {
      return {
        error: "Something went wrong!",
      };
    }
    return result;
  } catch (e) {
    console.log(e);
  }
}
