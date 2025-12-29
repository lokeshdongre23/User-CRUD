import { Request, Response } from "express";
import userModel from "../models/userSchema";

const deleteUser = async (req: Request, res: Response) => {
  try {
    // const id = req.params.id;
    // console.log(id);
    // const userDeleted = await userModel.deleteOne({ _id: id });
    const name = req.params.name;
    // console.log("here");

    // console.log(name);
    if (!name) {
      return res.status(400).json({
        message: "User name is required",
      });
    }
    const userDeleted = await userModel.deleteOne({ userName: name });
    // console.log(userDeleted);

    if (userDeleted.deletedCount === 0) {
      res.status(404).json({
        Message: "user Not Found!!!",
      });
    }
    if (userDeleted.acknowledged === true) {
      res.status(200).json({
        Message: "user deleted",
      });
    }
  } catch (error) {
    res.status(400).json({
      Message: "Somthing Wnet Wrong...",
    });
    console.log("Error:", error);
  }
};

export default deleteUser;
