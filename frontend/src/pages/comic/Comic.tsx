import { useParams } from "react-router-dom";
import { useFetchComic } from "../../hooks/fetchComics/useFetchComic";
import Info from "./Info";

const Comic = () => {
  const { slug = "" } = useParams();
  const { data: comic } = useFetchComic(slug);

  return (
    <main className="py-10 px-2 md:p-12 flex items-center justify-center w-screen min-h-screen">
      {comic ? (
        <Info
          _id={comic["_id"]}
          title={comic.title}
          img={comic.img}
          company={comic.company}
          complete={comic.complete}
          description={comic.description}
          publishYear={comic.publishYear}
          slug={comic.slug}
          character={comic.character}
          issues={comic.issues}
        />
      ) : (
        <p>Comic Not Found</p>
      )}
    </main>
  );
};

export default Comic;
