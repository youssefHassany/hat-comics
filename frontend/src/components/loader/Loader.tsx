import spiderman from "../../assets/superhero.png";

const Loader = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src={spiderman} alt="" className="animate-bounce  w-16" />
      <p className="text-xs font-medium border-t pt-1 border-t-gray-800 animate-pulse">
        With Great Comics, Comes Great Loading...
      </p>
    </div>
  );
};

export default Loader;
