import { useParams } from "react-router-dom";
import { useFetchComic } from "../../hooks/fetchComics/useFetchComic";
import Info from "./Info";

const Comic = () => {
  const { id } = useParams();
  const { data: comic } = useFetchComic(Number(id));

  return (
    <main className="py-10 px-2 md:p-12 flex items-center justify-center w-screen min-h-screen">
      {comic ? (
        <Info
          id={comic.id}
          comicName={comic.comicName}
          img={comic.img}
          company={comic.company}
          complete={comic.complete}
        />
      ) : (
        <p>Comic Not Found</p>
      )}
    </main>
  );
};

export default Comic;
