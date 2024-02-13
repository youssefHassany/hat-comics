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
    <div key={id} className="p-2 rounded border text-white">
      <img src={img} className="w-32 mx-auto" />
      <h3 className="text-lg font-medium my-2">{comicName}</h3>
      <p className="text-sm p-1 bg-gray-500 rounded-xl inline-block mx-1">
        {company}
      </p>
      <p className="text-sm p-1 bg-gray-500 rounded-xl inline-block mx-1">
        {character}
      </p>
      <p className="text-sm p-1 bg-gray-500 rounded-xl inline-block mx-1">
        {complete ? "مكتمل" : "غير مكتمل"}
      </p>
      <p>عدد الأعداد: {issues}</p>
    </div>
  );
};

export default ComicCard;
