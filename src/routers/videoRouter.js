import express from "express";
import { see, upload, edit, deleteVideo } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete",deleteVideo)

export default videoRouter;
