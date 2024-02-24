import AllComics from "./AllComics";

const ComicsList = () => {
  return (
    <section className="md:w-5/6 mx-auto my-5 p-2 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-white text-center my-16">
        إقراحاتنا
      </h2>
      <AllComics />
    </section>
  );
};

export default ComicsList;
