import { NextFunction, Request, Response } from "express";
import { ComicType } from "../types/ComicType";
import slugify from "slugify";
import { Comic } from "../models/comicModel";

// Send All Comics
export const getAllComics = async (req: Request, res: Response) => {
  const allComics = await Comic.find();
  res.status(200).json(allComics);
};

// Add a New Comic
export const AddComic = async (req: Request, res: Response) => {
  try {
    // // if the comic name or the company is not sent dont change data
    // if (!req.body.name || !req.body.company) {
    //   return res.status(400).json({
    //     status: "fail",
    //     message: "Missing comic name or company name",
    //   });
    // }

    const newComic: ComicType = {
      title: req.body.title,
      company: req.body.company,
      character: req.body.character,
      img: req.body.img,
      complete: req.body.complete,
      issues: req.body.issues,
      publishYear: req.body.publishYear,
      description: req.body.description,
      slug: slugify(req.body.title),
    };

    const addedComic = await Comic.create(newComic);

    res.status(201).json(addedComic);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "fail", message: err });
  }
};

// get a comic
export const getComic = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug; // Retrieve the slug from request parameters
    const comic = await Comic.findOne({ slug }); // Use the retrieved slug
    res.status(200).json(comic);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};
