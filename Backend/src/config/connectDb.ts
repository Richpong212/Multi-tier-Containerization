import { Pool } from "pg";
import { application } from "./application";

export const connectDb = async () => {
  // Connect to the database
  const client = new Pool({
    user: application.db.user,
    host: application.db.host,
    database: application.db.database,
    password: application.db.password,
    port: Number(application.db.port) || 5432,
  });

  // Check if the connection is successful
  try {
    await client.connect();
    console.log("Connected to the database");

    // close the connection
    client.end();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
