import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db";
import { Request, Response } from "express";
import router from "./routes/router";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
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
