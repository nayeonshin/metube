import express from "express";

import { join, signIn } from "../controllers/userControllers";
import { search, showAll } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", showAll);
globalRouter.get("/join", join);
globalRouter.get("/signin", signIn);

export default globalRouter;
