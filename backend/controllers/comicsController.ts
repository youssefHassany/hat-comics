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

/* --------------- Comic Filtering --------------------- */

// By Character
export const getComicByCharacter = async (req: Request, res: Response) => {
  try {
    const character = req.params.character; // Retrieve the character from request parameters
    const comic = await Comic.find({ character }); // Use the retrieved character
    res.status(200).json(comic);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};

// By Company
export const getComicByCompany = async (req: Request, res: Response) => {
  try {
    const company = req.params.company; // Retrieve the company from request parameters
    const comic = await Comic.find({ company }); // Use the retrieved company
    res.status(200).json(comic);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};

// By Issues
export const getComicBySize = async (req: Request, res: Response) => {
  try {
    let comic;
    const runLength = req.params.size; // Retrieve the length needed: short, medium, or long

    if (runLength === "short") {
      comic = await Comic.find({ issues: { $lt: 13 } });
    } else if (runLength === "medium") {
      comic = await Comic.find({ issues: { $gt: 12, $lt: 37 } });
    } else if (runLength === "long") {
      comic = await Comic.find({ issues: { $gt: 36 } });
    } else {
      return res
        .status(400)
        .json({ status: "fail", message: "Invalid size parameter." });
    }

    res.status(200).json(comic);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};

// By Beginner Friendly
export const getComicByBeginnerFriendly = async (
  req: Request,
  res: Response
) => {
  try {
    const comic = await Comic.find({ beginnerFriendly: true });
    res.status(200).json(comic);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};
