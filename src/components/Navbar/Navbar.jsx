import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="">
      <div className="hidden sm:block">
        <a href="https://github.com/DavidMessmore" target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-stone-800 dark:text-stone-200 dark:hover:text-stone-500  mx-2 hover:text-stone-500"
            icon={faGithub}
          />
        </a>
        <button onClick={toggleDarkMode} className="ml-2">
          <FontAwesomeIcon
            className="text-3xl text-stone-800 dark:text-stone-200  mx-2 dark:hover:text-stone-500 hover:text-stone-500"
            icon={darkMode ? faSun : faMoon}
          />
        </button>
      </div>
      <div className="block sm:hidden">
        <button onClick={() => setShowMobileNav((prev) => !prev)}>
          <FontAwesomeIcon
            className="text-3xl text-stone-800 dark:text-stone-200  mx-2 dark:hover:text-stone-500 hover:text-stone-500"
            icon={faBars}
          />
        </button>
        <div
          className={`absolute left-0 top-16 ${
            showMobileNav ? "flex flex-col" : "hidden"
          } text-center w-screen bg-stone-100 dark:bg-stone-500 divide-y divide-stone-400 border-b border-stone-400 z-10`}
        >
          <a
            href="https://github.com/DavidMessmore"
            target="_blank"
            className="w-full p-1 hover:bg-stone-400"
          >
            <FontAwesomeIcon
              className="text-4xl text-stone-800 mx-2 hover:text-stone-200"
              icon={faGithub}
            />
          </a>
          <button
            onClick={toggleDarkMode}
            className="w-full p-1 hover:bg-stone-400"
          >
            <FontAwesomeIcon
              className="text-4xl text-stone-800 mx-2 hover:text-stone-200"
              icon={darkMode ? faSun : faMoon}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
