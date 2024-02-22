import { Link } from "react-router-dom";
import { ComicType } from "../../types/comicType";

const ComicCard = ({
  _id,
  title,
  company,
  complete,
  img,
  character,
  issues,
  slug,
}: ComicType) => {
  return (
    <Link
      to={`/comic/${slug}`}
      key={_id}
      className="p-2 text-white text-center hover:opacity-75 duration-200"
    >
      {/* <img src={img} className="w-32 mx-auto" />
      <div className="text-xs text-gray-400 my-2">
        <p className=" border-r inline-block px-1">{company}</p>
        <p className=" border-r inline-block px-1">{character}</p>
        <p className=" inline-block px-1">{complete ? "مكتمل" : "غير مكتمل"}</p>
      </div>
      <h3 className="text-lg font-medium my-2">{comicName}</h3>
      <p>عدد الأعداد: {issues}</p> */}
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg justify-center">
            {title}
            {/* {issues ? (
              <div className="badge badge-secondary text-white bg-red-700 border-none">
                {issues}
              </div>
            ) : (
              ""
            )} */}
          </h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{company}</div>
            <div className="badge badge-outline">
              {complete ? "مكتمل" : "مستمر"}
            </div>

            {character ? (
              <div className="badge badge-outline">{character}</div>
            ) : (
              ""
            )}

            {issues ? (
              <div className="badge badge-outline">{issues} أعداد</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ComicCard;
