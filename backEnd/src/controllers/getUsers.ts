import userModel from "../models/userSchema";
import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    const allUSers = await userModel.find({});

    res.status(200).json(allUSers);
  } catch (error) {
    res.status(404).json({
      message: "Somthing went Wrong...",
    });
    console.log("Error: ", error);
  }
};

export default getUsers;
