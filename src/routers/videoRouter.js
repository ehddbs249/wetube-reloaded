import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");
const handleEditVideo = (req, res) => res.send("Edit Video");
const handleDeleteVideo = (req, res) => res.send("Delete Video");

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEditVideo);
videoRouter.get("/delete", handleDeleteVideo);

export default videoRouter;
