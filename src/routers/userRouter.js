import express from "express";

import { edit, remove, see, signOut } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/signout", signOut);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", see);

export default userRouter;
