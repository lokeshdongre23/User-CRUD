import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db";
import { Request, Response } from "express";
import router from "./routes/router";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
// app.use(express.json());
app.use((req, res, next) => {
  if (req.method === "DELETE") {
    return next(); // skip JSON parsing for DELETE
  }
  express.json()(req, res, next);
});

// this function is use to connect he dataBase
dbConnection();

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to TypeScript Express Starter!");
});
app.use("/user", router); // get all user
app.use("/user", router); // Create Users
app.use("/user", router); // update user
app.use("/user", router); // delete user

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
