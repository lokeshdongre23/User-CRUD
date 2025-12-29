import { Router } from "express";
import getUsers from "../controllers/getUsers";
import createUser from "../controllers/createUser";
import updateUser from "../controllers/updateUser";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
