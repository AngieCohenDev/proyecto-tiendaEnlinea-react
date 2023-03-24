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
import ReactPlayer from "react-player";

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

  console.log(showOrder,showMenu);
  return (
    <div className="bg-[#2c2e3b] w-full min-h-screen">
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
      <main className="lg:pl-32 lg:pr-  pb-20">
        <div className=" md:p-8 p-4">
          {/*Este es el header */}
          <Header />
          {/* Title Content */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl text-gray-300">Curso de JavaScript</h2>
            
          </div>
          {/* Content */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-16">
            {/* Card */}
            <Card
              video="./VideoDeprueba.mp4"
              titulo="Clase #21 Metodos para recorrer Arrays en JavaScript"
              description="Javascript para principiantes"
              link=""
            />
          </div>
          {/* Tabs*/}
          <nav className="text-gray-300 flex items-center justify-between border-b mb-10">
            <a
              href="#"
              className=" relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]"
            >
              Comentarios
            </a>
            <a href="#" className="py-2 pr-4">
            Descripción del Curso
            </a>
            <a href="#" className=" py-2 pr-4">
              Recursos
            </a>
            <a href="#" className="py-2 pr-4">
            Valoración 
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
}

export default App;
