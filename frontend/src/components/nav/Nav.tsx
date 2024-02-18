import { Link } from "react-router-dom";

interface Page {
  name: string;
  link: `/${string}`;
}

const Nav = () => {
  const pages: Page[] = [
    { name: "إقتراحات", link: "/recommendations" },
    { name: "مقالات", link: "/blogs" },
    { name: "إدعمنا", link: "/support" },
  ];
  return (
    <nav className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300 fixed top-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to={"/"} className="flex-1 px-2 mx-2 font-bold">
            Hat<span className="text-red-700">Comics</span>
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {pages.map((page, idx) => (
                <li key={idx}>
                  <Link to={page.link}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link to={"/"} className="flex-1 px-2 mx-2 font-bold mb-20">
              Hat<span className="text-red-700">Comics</span>
            </Link>
          </li>
          {pages.map((page, idx) => (
            <li key={idx * 10 + 6} className="my-2">
              <Link to={page.link}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
