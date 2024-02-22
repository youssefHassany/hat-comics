import { ComicType } from "../../types/comicType";

const Info = ({
  _id,
  title,
  img,
  complete,
  company,
  description,
}: ComicType) => {
  return (
    <section key={_id} className="mt-12 hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-[16rem] rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="my-2">
            {company} | {complete ? "مكتمل" : "مستمر"}
          </p>
          <p className="py-6">{description}</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </section>
  );
};

export default Info;
