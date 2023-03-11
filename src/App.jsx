import { useState } from "react";
import {
  RiMenu2Fill,
  RiUser5Line,
  RiAddLine,
  RiPercentFill,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";
import Carrito from "./components/shared/Carrito";
import Header from "./components/shared/Header";
import Card from "./components/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Carrito showOrder={showOrder} setShowOrder={setShowOrder} />
      {/*Menu movil*/}
      <nav className="bg-[#1F1D2B]  lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser5Line />
        </button>
        <button className="p-2">
          <RiPercentFill />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu2Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96  pb-20">
        <div className=" md:p-8 p-4">
          {/*Este es el header */}
          <Header />
          {/* Title Content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-black bg-blue-200 py-2 px-4 rounded-lg ">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
              {/* Card */}
              <Card
              img="comida.png"
              description="Speacy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
              {/* Card */}
              <Card
              img="comida.png"
              description="Speacy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
              {/* Card */}
              <Card
              img="comida.png"
              description="Speacy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
              {/* Card */}
              <Card
              img="comida.png"
              description="Speacy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
              {/* Card */}
              <Card
              img="comida.png"
              description="Speacy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
              {/* Card */}
              <Card
              img="comida.png"
              description="Speacy seasoned seafood noodles"
              price="2.29"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
