import { useFetchAllComics } from "../../hooks/fetchData/fetchComics/useFetchAllComics";
import ComicCard from "../../components/comic card/ComicCard";

const ComicsList = () => {
  const { data, isLoading } = useFetchAllComics();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="md:w-3/4 mx-auto my-5">
      <h2 className="text-3xl text-white text-center my-16">إقراحاتنا</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data?.map((comic) => (
          <ComicCard
            comicName={comic.comicName}
            company={comic.company}
            complete={comic.complete}
            character={comic.character}
            img={comic.img}
            id={comic.id}
            issues={comic.issues}
          />
        ))}
      </div>
    </section>
  );
};

export default ComicsList;
