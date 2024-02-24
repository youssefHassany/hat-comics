import express from "express";
import {
  AddComic,
  getAllComics,
  getComic,
  getComicByCharacter,
  getComicByCompany,
  getComicBySize,
} from "../controllers/comicsController";

const comicsRouter = express.Router();

comicsRouter.route("/").get(getAllComics).post(AddComic);
comicsRouter.route("/:slug").get(getComic);
comicsRouter.route("/character/:character").get(getComicByCharacter);
comicsRouter.route("/company/:company").get(getComicByCompany);
comicsRouter.route("/size/:size").get(getComicBySize);

export default comicsRouter;
