import { Request, Response } from "express";
import userModel from "../models/userSchema";

const updateUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id || "";
    // console.log(id);
    // res.send(id);
    const update = req.body;
    const updatedData = await userModel.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedData,
    });
    console.log(`User UPdated With id${id}`);
  } catch (error) {
    res.status(400).json({
      message: "Somthing WEnt Wrong..............",
    });
    console.log("Error: ", error);
  }
};

export default updateUser;
