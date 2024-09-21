"use server";
import { createConnection } from "@/config/db";
import { initDb } from "@/lib/initDb";

initDb();
export const getUsers = async () => {
  const db = await createConnection();
  try {
    const [result] = await db.query(`SELECT * FROM users`);
    return result;
  } catch (err) {
    console.log(err);
  }
};
