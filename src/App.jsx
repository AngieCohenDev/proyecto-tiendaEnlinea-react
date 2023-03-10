import { RiMenu2Fill, RiUser5Line, RiAddLine,RiPercentFill } from "react-icons/ri";
import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/*Menu movil*/}
      <nav className="bg-[#1F1D2B]  lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser5Line />
        </button>
        <button className="p-2">
          <RiPercentFill />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          <RiMenu2Fill />
        </button>
      </nav>
    </div>
  );
}

export default App;
