import { Request, Response } from "express";
import userModel from "../models/userSchema";
import { logFile } from "../config/createLog";

const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, designation, email, cNo, address } = req.body;

    const setUser = new userModel({
      userName,
      designation,
      email,
      cNo,
      address,
    });

    const saveUSers = await setUser.save();
    res.status(200).json({
      message: "User Created Successfully",
      UserDetail: res.send(saveUSers),
    });
    console.log("User Created Sussefully.......");
  } catch (error) {
    logFile(error);
    res.status(404).json({
      message: "Somthing Went Wrong......",
    });
  }
};

export default createUser;
