import { Router } from "express";
import getUsers from "../controllers/getUsers";
import createUser from "../controllers/createUser";
import updateUser from "../controllers/updateUser";
import deleteUser from "../controllers/deleteUser";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:name", deleteUser);

export default router;
