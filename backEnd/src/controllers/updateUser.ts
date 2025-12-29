import { Request, Response } from "express";

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params._id;
    console.log(id);
  } catch (error) {
    res.status(400).json({
      message: "Somthing WEnt Wrong..............",
    });
    console.log("Error: ", error);
  }
};
