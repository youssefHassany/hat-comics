import { NextFunction, Request, Response } from "express";

import fs from "fs";

interface Comic {
  id: number;
  company: string;
  character?: string;
  comicName: string;
  issues?: number;
  complete?: boolean;
  img?: string;
}

const comics: Comic[] = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/comics-data.json`, "utf-8")
);

// Check The ID is existing in the data
export const checkId = (
  req: Request,
  res: Response,
  next: NextFunction,
  val: any
) => {
  if (Number(req.params.id) > comics.length - 1) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  next();
};

// Send All Comics
export const getAllComics = (req: Request, res: Response) => {
  res.status(200).json(comics);
};

// Add a New Comic
export const AddComic = (req: Request, res: Response) => {
  // if the comic name or the company is not sent dont change data
  if (!req.body.comicName || !req.body.company) {
    return res.status(400).json({
      status: "fail",
      message: "Missing comic name or company name",
    });
  }

  const newComic: Comic = {
    id: comics.length,
    comicName: req.body.comicName,
    company: req.body.company,
  };
  comics.push(newComic);

  fs.writeFile(
    `${__dirname}/../data/comics-data.json`,
    JSON.stringify(comics),
    (err) => {
      return res.status(201).json(newComic);
    }
  );
};

// get a comic
export const getComic = (req: Request, res: Response) => {
  const comic = comics.find((el) => el.id == Number(req.params.id));
  res.status(200).json(comic);
};
