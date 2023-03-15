import React from "react";
import { RiSearchEyeFill } from "react-icons/ri";

function Header() {
  return (
    <header className="">
      {/*Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Camila Resto</h1>
          <p className="text-gray-500">10 de marzo 2023</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearchEyeFill className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="bg-blue-200 w-full py-2 pl-10 pr-4 rounded-lg text-black outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/* Tabs*/}
      <nav className="text-gray-300 flex items-center justify-between mb:justify-start mb:gap-8 border-b mb-10">
        <a
          href="#"
          className=" relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-blue-300 before:left-0 before:rounded-full before:-bottom-[2px] text-blue-300 "
        >
          Hot Dishes
        </a>                                                                                                                 










        
        <a href="#" className="py-2 pr-4">
          Cold Dishes
        </a>
        <a href="#" className=" py-2 pr-4">
          Soup
        </a>
        <a href="#" className="py-2 pr-4">
          Grill
        </a>
      </nav>
    </header>
  );
}

export default Header;
