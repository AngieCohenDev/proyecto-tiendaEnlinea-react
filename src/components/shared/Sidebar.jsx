import React from "react";
import {
  RiHomeSmileLine,
  RiUser2Line,
  RiTimerLine,
  RiMailOpenFill,
  RiNotification3Fill,
  RiSettings2Fill,
  RiLogoutBoxLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#34353b] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              logo
            </h1>
          </li>
          <li className="bg-[#2c2e3b] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-blue-300 p-4 flex justify-center rounded-xl text-white"
            >
              <RiHomeSmileLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#2c2e3b] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-blue-300 p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiUser2Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#2c2e3b] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-blue-300 p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiTimerLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#2c2e3b] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-blue-300 p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailOpenFill className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#2c2e3b] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-blue-300 p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Fill className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#2c2e3b] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-blue-300 p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings2Fill className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-blue-300 p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutBoxLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
