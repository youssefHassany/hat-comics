import express from "express";
import {
  AddComic,
  checkId,
  getAllComics,
  getComic,
} from "../controllers/comicsController";

const router = express.Router();
router.param("id", checkId);

router.route("/").get(getAllComics).post(AddComic);
router.route("/:id").get(getComic);

export default router;
