import AllComics from "./AllComics";
import BeginnerComics from "./BeginnerComics";
import CharacterComics from "./CharacterComics";
import ComicsBySize from "./ComicsBySize";
import CompanyComics from "./CompanyComics";

interface Props {
  list: string;
  selectedCategory: string;
}

const ComicsList = ({ selectedCategory, list }: Props) => {
  if (selectedCategory === "company") {
    return (
      <section className="md:w-5/6 mx-auto my-5 p-2 flex flex-col justify-center items-center">
        <CompanyComics company={list} />
      </section>
    );
  } else if (selectedCategory === "character") {
    return (
      <section className="md:w-5/6 mx-auto my-5 p-2 flex flex-col justify-center items-center">
        <CharacterComics character={list} />
      </section>
    );
  } else if (selectedCategory === "beginner") {
    return (
      <section className="md:w-5/6 mx-auto my-5 p-2 flex flex-col justify-center items-center">
        <BeginnerComics />
      </section>
    );
  } else if (selectedCategory === "size") {
    return (
      <section className="md:w-5/6 mx-auto my-5 p-2 flex flex-col justify-center items-center">
        <ComicsBySize size={list} />
      </section>
    );
  } else {
    return (
      <section className="md:w-5/6 mx-auto my-5 p-2 flex flex-col justify-center items-center">
        <AllComics />
      </section>
    );
  }
};

export default ComicsList;
