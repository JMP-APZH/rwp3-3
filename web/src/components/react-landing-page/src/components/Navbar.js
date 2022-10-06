import React from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            <span className="text-green-300">A</span>
            <span className="text-white">&</span>
            <span className="text-green-300">P </span>
            <span className="text-red-800">Zürich</span>
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-green-300" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow lg:bg-transparent lg:shadow-none pr-0" +
            (navbarOpen ? " block rounded shadow-lg bg-green-300 bg-opacity-20 " : " hidden")
          }
          id="example-navbar-warning"
        >

          <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto ">
          {/* SM-icon1 */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-white hover:text-black hover:bg-green-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.facebook.com/jeanmarie.philocles"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-blue-500 text-blue-500"
                      : "text-blue-500") +
                    " fab fa-facebook text-blue-500 text-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            {/* SM-icon2 */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-white text-white hover:text-black hover:bg-green-800"
                    : "text-white hover:text-white") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://twitter.com/jmp_APZH_int"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-blue-400 text-blue-400"
                      : "text-blue-400") +
                    " fab fa-twitter text-blue-400 text-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            {/* SM-icon3 */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-white text-white hover:text-black hover:bg-green-800"
                    : "text-gray-800 hover:text-white hover:bg-black") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.linkedin.com/in/jean-marie-philocles-apzuerich/"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-blue-400 text-blue-400"
                      : "text-blue-400") +
                    " fab fa-linkedin text-blue-400 text-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Profile</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
