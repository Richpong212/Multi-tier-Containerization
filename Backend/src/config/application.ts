import dotenv from "dotenv";
dotenv.config();

export const application = {
  db: {
    user: process.env.POSTGRES_USER,
    host: process.env.DB_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.DB_PORT || 5432,
  },
  dev: {
    port: process.env.PORT,
  },
};
