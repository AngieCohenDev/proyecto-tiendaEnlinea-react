import React from "react";
import { RiSearchEyeFill } from "react-icons/ri";

function Header() {
  return (
    <header className="">
      {/*Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">ACADEMIT S.A.S</h1>
          <p className="text-gray-500">Programando la élite del mañana, hoy</p>
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
    </header>
  );
}

export default Header;
