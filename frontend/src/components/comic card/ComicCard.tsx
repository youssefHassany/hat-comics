import { Comic } from "../../types/comicType";

const ComicCard = ({
  id,
  comicName,
  company,
  complete,
  img,
  character,
  issues,
}: Comic) => {
  return (
    <div key={id} className="p-2 rounded border text-white text-center">
      <img src={img} className="w-32 mx-auto" />
      <div className="text-xs text-gray-400 my-2">
        <p className=" border-r inline-block px-1">{company}</p>
        <p className=" border-r inline-block px-1">{character}</p>
        <p className=" inline-block px-1">{complete ? "مكتمل" : "غير مكتمل"}</p>
      </div>
      <h3 className="text-lg font-medium my-2">{comicName}</h3>
      <p>عدد الأعداد: {issues}</p>
    </div>
  );
};

export default ComicCard;
