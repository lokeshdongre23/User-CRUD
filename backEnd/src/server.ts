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
app.use("/users", router); // get all users
app.use("/users", router); // Create Users
app.use("/users", router); // update user

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
