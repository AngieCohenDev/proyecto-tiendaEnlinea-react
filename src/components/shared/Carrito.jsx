import React from "react";
import { RiCloseLine, RiDeleteBin5Line } from "react-icons/ri";

const Carrito = (props) => {
  const { showOrder, setShowOrder } = props;
  const closeCar = () => {
    setShowOrder(false)
  }
  return (
    <div
      className={`lg:col-spam-2 fixed  top-0 bg-[#39393b]  w-full  lg:w-96 lg:-right-full h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }  `}
    >
      {/*Orders */}
      <div className="relative pt-16 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={closeCar}
          className="absolute left-4 top-4 p-3 box-content texte-gray-300 bg-[#464545] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4 ">Contenido del curso</h1>

        {/* Products */}
        <div className="  h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
          {/* Product */}
          <div className="bg-[#262837] p-4 rounded-xl mb-5">
            <div className="grid grid-cols-6 mb-4 ">
              {/* Product	description */}
              <div className="col-span-6 flex items-center gap-3 ">
                <div>
                  <h5 className="text-sm">
                    Clase #1. Hola, soy Dora la Exploradora
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-5">
            <div className="grid grid-cols-6 mb-4 ">
              {/* Product	description */}
              <div className="col-span-6 flex items-center gap-3 ">
                <div>
                  <h5 className="text-sm">
                    Clase #2. Hola, Barnie el dinosaurio
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-5">
            <div className="grid grid-cols-6 mb-4 ">
              {/* Product	description */}
              <div className="col-span-6 flex items-center gap-3 ">
                <div>
                  <h5 className="text-sm">
                    Clase #3. Hola, Goku Super Sayajin
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit pyment */}
        <div className="bg-[#39393b]  absolute w-full bottom-0 left-0 p-4"></div>
      </div>
    </div>
  );
};

export default Carrito;
