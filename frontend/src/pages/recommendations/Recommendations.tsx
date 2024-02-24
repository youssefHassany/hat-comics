import { useState } from "react";
import ComicsList from "../../components/comicsLists/ComicsList";
import ListSelection from "./ListSelection";

const Recommendations = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // state to control the category
  const [list, setList] = useState(""); // state to control the elements of the category

  return (
    <main>
      <section className="md:w-5/6 mx-auto my-5 p-2 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-white text-center my-16">
          إقراحاتنا
        </h2>

        <div className="flex gap-5">
          {/* a selection to control the category */}
          <select
            className="rounded border border-black"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">الكل</option>
            <option value="company">الشركة</option>
            <option value="character">الشخصية</option>
            <option value="beginner">للمبتدئين</option>
            <option value="size">حجم الكوميك</option>
          </select>

          {/* a selection to control the elements of the category */}
          <ListSelection
            selectedCategory={selectedCategory}
            list={list}
            setList={setList}
          />
        </div>

        {/* Where the Comics Are Rendered Based On The Preferences */}
        <ComicsList selectedCategory={selectedCategory} list={list} />
      </section>
    </main>
  );
};

export default Recommendations;
