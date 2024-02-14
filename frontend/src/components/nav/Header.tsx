import { Link } from "react-router-dom";
import Nav from "./Nav";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="fixed top-0 w-screen p-4 flex items-center justify-between z-40 bg-transparent backdrop-blur-sm text-white">
      <Link to={"/"} className="font-bold text-xl">
        Hat<span className="text-red-700">Comics</span>
      </Link>

      <button
        onClick={() => {
          setShowNav(!showNav);
        }}
        className="lg:hidden text-4xl"
      >
        <BiMenuAltRight />{" "}
      </button>

      <Nav showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
};

export default Header;
