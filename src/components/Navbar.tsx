import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [tabActive, setTabActive] = useState<string>("tab1");

  const handleTabActive = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTabActive(e.currentTarget.id);
  };

  const [theme, setTheme] = useState<string>(
    String(localStorage.getItem("theme")) || "light"
  );

  // console.log(theme)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = (e: boolean) => {
    e ? setTheme("dark") : setTheme("light");
  };
  localStorage.setItem("theme", theme);

  // console.log(tabActive);

  return (
    <nav
      className="  border-gray-200   z-50 fixed top-5 right-5 bg-transparent md:shadow-2xl rounded-lg md:bg-beige2 dark:md:bg-blueDark"
      id="topMenu"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <button
          onClick={() => setToggle((toggle) => !toggle)}
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm  text-brown2 dark:text-blueDark rounded-lg md:hidden ${
            toggle
              ? "bg-gray-100 dark:text-brown2"
              : "hover:bg-gray-100 dark:hover:text-blueDark"
          } focus:outline-none focus:ring-2 focus:ring-gray-200 focus:text-brown2 `}
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
                className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-2 mt-2 border-brown2 dark:md:text-dk2 ${
                  tabActive === "tab1"
                    ? "  text-white dark:bg-blueDark dark:md:bg-white dark:text-white md:text-white bg-brown2 "
                    : "text-gray-900  hover:bg-gray-100 md:hover:text-brown2 hover:text-brown2 md:hover:bg-beige dark:hover:md:bg-transparent dark:hover:text-brown2 dark:md:hover:text-white"
                } md:p-0    `}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li id="tab2" onClick={(e) => handleTabActive(e)}>
              <a
                href="#about"
                className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-2 mt-2 border-brown2 dark:md:text-dk2 ${
                  tabActive === "tab2"
                    ? "  text-white dark:bg-blueDark dark:md:bg-white dark:text-white md:text-white bg-brown2 "
                    : "text-gray-900  hover:bg-gray-100 md:hover:text-brown2 hover:text-brown2 md:hover:bg-beige dark:hover:md:bg-transparent dark:hover:text-brown2 dark:md:hover:text-white"
                } md:p-0    `}
         
              >
                About
              </a>
            </li>
            <li id="tab3" onClick={(e) => handleTabActive(e)}>
              <a
                href="#project"
                className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-2 mt-2 border-brown2 dark:md:text-dk2 ${
                  tabActive === "tab3"
                    ? "  text-white dark:bg-blueDark dark:md:bg-white dark:text-white md:text-white bg-brown2 "
                    : "text-gray-900  hover:bg-gray-100 md:hover:text-brown2 hover:text-brown2 md:hover:bg-beige dark:hover:md:bg-transparent dark:hover:text-brown2 dark:md:hover:text-white"
                } md:p-0    `}
               
              >
                Project
              </a>
            </li>
            <li className=" flex items-center justify-center">
              <Switch
                id="airplane-mode"
                className="  mt-2 md:my-4 shadow-md"
                checked={theme == "dark" ? true : false}
                onCheckedChange={(e) => handleThemeSwitch(e)}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
