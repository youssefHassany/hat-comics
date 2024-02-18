import { Comic } from "../../types/comicType";

const Info = ({ id, comicName, img, complete, company }: Comic) => {
  return (
    <section key={id} className="mt-12 hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-[16rem] rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{comicName}</h1>
          <p className="my-2">
            {company} | {complete ? "مكتمل" : "مستمر"}
          </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </section>
  );
};

export default Info;
