import React from "react";

interface Props {
  selectedCategory: string;
  list: string;
  setList: React.Dispatch<React.SetStateAction<string>>;
}

const ListSelection = ({ selectedCategory, list, setList }: Props) => {
  /* --------------- Company Category ------------------ */
  if (selectedCategory === "company") {
    return (
      <select
        className="rounded border border-black"
        value={list}
        onChange={(e) => setList(e.target.value)}
      >
        <option value="">اختر الشركة</option>
        <option value="Marvel">Marvel</option>
        <option value="DC">DC</option>
        <option value="Image">Image</option>
      </select>
    );

    /* --------------- Character Category ------------------ */
  } else if (selectedCategory === "character") {
    return (
      <select
        className="rounded border border-black"
        value={list}
        onChange={(e) => setList(e.target.value)}
      >
        <option value="">اختر الشخصية</option>
        <option value="Spider-Man">Spider-Man</option>
        <option value="Batman">Batman</option>
        <option value="Daredevil">Daredevil</option>
        <option value="Hulk">Hulk</option>
      </select>
    );

    /* --------------- Size Category ------------------ */
  } else if (selectedCategory === "size") {
    return (
      <select
        className="rounded border border-black"
        value={list}
        onChange={(e) => setList(e.target.value)}
      >
        <option value="">اختر حجم الكوميك</option>
        <option value="short">1 - 12</option>
        <option value="medium">13 - 36</option>
        <option value="long">36+</option>
      </select>
    );
  }
  return "";
};

export default ListSelection;
