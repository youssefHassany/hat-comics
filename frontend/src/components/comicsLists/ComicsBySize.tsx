import { useGetComicsBySize } from "../../hooks/useGetComicsBySize";
import Loader from "../loader/Loader";
import { motion } from "framer-motion";
import ComicCard from "../comic card/ComicCard";

interface Props {
  size: string;
}

const ComicsBySize = ({ size }: Props) => {
  const { data, isLoading } = useGetComicsBySize(size);

  if (isLoading) {
    return (
      <div className="w-screen p-2">
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
            _id={comic["_id"]}
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

export default ComicsBySize;
