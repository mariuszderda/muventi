"use server";

import mysql from "mysql2/promise";

let connection: mysql.Connection;

export const createConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
      connectionLimit: 2,
      maxIdle: 0,
      idleTimeout: 0,
      enableKeepAlive: false,
      waitForConnections: true,
      queueLimit: 0,
    });
    console.log("CREATING CONNECTION!!!");
  }
  return connection;
};
