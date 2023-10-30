import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-around bg-white dark:bg-gray-700 h-16 gap-0 mt-10 mb-10 space-y-2 md:space-y-0 md:mt-0 md:mb-0 md:flex-row">
      <div className=" 2/12">
        <Link to="/">
          <div className="flex items-center justify-center w-40 h-10 font-semibold text-black dark:text-white hover:text-navy">
            OMDb APP
          </div>
        </Link>
      </div>
      <div className=""></div>
      <div className="2/12 flex">
        <Search search="search" />
        <Link to="/favorite">
          <div className="flex items-center justify-center ml-4 w-30 h-10 rounded-lg hover:shadow-lg  hover:border-Navy hover:text-Navy hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
