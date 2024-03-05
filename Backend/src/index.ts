import express, { Response, Request } from "express";
import { application } from "./config/application";
import Memcached from "memcached";
import { connectDb } from "./config/connectDb";
import cors from "cors";

const app = express();
//Middlewares
app.use(express.json());
app.use(cors());

const port = application.dev.port;

console.log("DB_USER", process.env.POSTGRES_DB);

// memcached connection
const memcached = new Memcached("memcached:11211");

// Base route
app.get("/", (req: Request, res: Response) => {
  // Check if the response is cached in Memcached
  memcached.get("/", (err, data) => {
    if (err) {
      console.error("Error getting cached data from Memcached:", err);
    } else if (data) {
      // If data exists in Memcached, send it as the response
      console.log("Cached data found in Memcached:", data);
      res.status(200).json({
        message: "Data from Memcached",
        data,
      });
    } else {
      // If data doesn't exist in Memcached, generate a new response and cache it
      const responseData = { message: "Data from Backend Server" };
      memcached.set("/", responseData, 60, (err) => {
        if (err) {
          console.error("Error setting value in Memcached:", err);
        } else {
          console.log("Value set in Memcached:", responseData);
        }
      });
      res.status(200).json(responseData);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  // Connect to the database
  connectDb();
});
