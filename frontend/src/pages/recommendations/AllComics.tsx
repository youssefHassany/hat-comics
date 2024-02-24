import { useFetchAllComics } from "../../hooks/fetchComics/useFetchAllComics";
import Loader from "../../components/loader/Loader";
import { motion } from "framer-motion";
import ComicCard from "../../components/comic card/ComicCard";

const AllComics = () => {
  const { data, isLoading } = useFetchAllComics();
  // console.log(data);

  if (isLoading) {
    return (
      <div className="w-screen h-screen p-2">
        <Loader />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {data?.map((comic, idx) => (
        <motion.span
          key={comic["_id"]}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
        >
          <ComicCard
            key={comic["_id"]}
            title={comic.title}
            company={comic.company}
            complete={comic.complete}
            character={comic.character}
            img={comic.img}
            _id={comic["id"]}
            issues={comic.issues}
            slug={comic.slug}
            description={comic.description}
            publishYear={comic.publishYear}
          />
        </motion.span>
      ))}
    </div>
  );
};

export default AllComics;
