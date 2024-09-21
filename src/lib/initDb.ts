import { createConnection } from "@/config/db";

export const initDb = async () => {
  console.time("START INIT");
  const db = await createConnection();
  db.query(`
  CREATE TABLE IF NOT EXISTS users(
    id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    first_name TEXT,
    last_name TEXT,
    email VARCHAR(255) NOT NULL unique,
    password TEXT not null,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()
    );
  `);
  console.timeEnd("START INIT");
  console.log("INIT DB");
};
