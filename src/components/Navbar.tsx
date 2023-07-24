import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [tabActive, setTabActive] = useState<string>("tab1");

  const handleTabActive = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTabActive(e.currentTarget.id);
  };

  console.log(tabActive);

  return (
    <nav className=" bg-transparent border-gray-200 dark:bg-gray-900  z-50 fixed top-5 right-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <button
          onClick={() => setToggle((toggle) => !toggle)}
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden ${
            toggle ? "bg-gray-100" : "hover:bg-gray-100"
          } focus:outline-none focus:ring-2 focus:ring-gray-200 `}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          className={`${toggle ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border bg-white md:bg-transparent  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li id="tab1" onClick={(e) => handleTabActive(e)}>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-2 mt-2 ${
                    tabActive === "tab1"
                      ? " bg-brown text-white "
                      : "text-gray-900  hover:bg-gray-100 md:hover:text-brown hover:text-brown md:hover:bg-gray-100"
                  } md:p-0    `}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li id="tab2" onClick={(e) => handleTabActive(e)}>
              <a
                href="#about"
                className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-2 mt-2 ${
                    tabActive === "tab2"
                      ? " bg-brown text-white "
                      : "text-gray-900  hover:bg-gray-100 md:hover:text-brown hover:text-brown md:hover:bg-gray-100"
                  } md:p-0    `}
              >
                About
              </a>
            </li>
            <li id="tab3" onClick={(e) => handleTabActive(e)}>
              <a
                href="#project"
                className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-2 mt-2 ${
                  tabActive === "tab3"
                    ? " bg-brown text-white "
                    : "text-gray-900  hover:bg-gray-100 md:hover:text-brown hover:text-brown md:hover:bg-gray-100"
                } md:p-0    `}
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
