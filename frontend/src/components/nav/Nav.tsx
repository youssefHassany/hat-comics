import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface Page {
  name: string;
  link: `/${string}`;
}

interface Props {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ showNav, setShowNav }: Props) => {
  const pages: Page[] = [
    { name: "إقتراحات", link: "/recommendations" },
    { name: "مقالات", link: "/blogs" },
    { name: "إدعمنا", link: "/support" },
  ];

  return (
    // mobile view styling starts from the second  line
    <nav
      className={`flex lg:justify-between items-center lg:w-fit lg:relative lg:z-0 lg:flex-row lg:h-fit lg:translate-x-0
                  fixed w-screen h-screen bg-zinc-900 md:bg-transparent backdrop-blur-sm top-0 right-0 z-50 flex-col duration-300 justify-evenly ${
                    showNav ? "" : "translate-x-full"
                  }`}
      onClick={() => setShowNav(false)}
    >
      <button
        onClick={() => setShowNav(!showNav)}
        className="lg:hidden absolute top-7 right-8 text-3xl"
      >
        x
      </button>
      <ul className="w-full h-full lg:w-fit lg:h-fit flex flex-col items-center justify-evenly lg:block">
        {pages.map((page, idx) => (
          <li key={idx} className="lg:inline-block lg:mx-2 block">
            <Link
              to={page.link}
              className="p-2 font-medium relative
                      before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-white before:duration-200
                      before:hover:w-full"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
