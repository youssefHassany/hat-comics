import { useFetchAllComics } from "../../hooks/fetchComics/useFetchAllComics";
import ComicCard from "../../components/comic card/ComicCard";
import { motion } from "framer-motion";
import Loader from "../../components/loader/Loader";

const ComicsList = () => {
  const { data, isLoading } = useFetchAllComics();
  // console.log(data);

  if (isLoading) {
    return (
      <section className="w-screen h-screen flex flex-col items-center justify-center my-5 p-2">
        <h2 className="text-3xl font-bold text-white text-center my-16">
          إقراحاتنا
        </h2>
        <Loader />
      </section>
    );
  }

  return (
    <section className="md:w-5/6 mx-auto my-5 p-2">
      <h2 className="text-3xl font-bold text-white text-center my-16">
        إقراحاتنا
      </h2>
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
    </section>
  );
};

export default ComicsList;
