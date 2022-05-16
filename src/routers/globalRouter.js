import express from "express";

import { join } from "../controllers/userControllers";
import { showAll } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", showAll);
globalRouter.get("/join", join);

export default globalRouter;
