import express from "express";
import {
  AddComic,
  getAllComics,
  getComic,
} from "../controllers/comicsController";

const comicsRouter = express.Router();

comicsRouter.route("/").get(getAllComics).post(AddComic);
comicsRouter.route("/:slug").get(getComic);

export default comicsRouter;
