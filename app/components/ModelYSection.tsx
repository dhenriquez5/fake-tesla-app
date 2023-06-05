import React from "react";

export const ModelYSection = () => {
  return (
    <section className="landing-section h-screen w-screen text-center relative overflow-hidden" data-header-color="black">
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2 className="text-black pt-40 text-[40px] font-medium">Model Y</h2>
          <p className="text-black text-sm underline">
            Concertar una prueba de conduccion
          </p>
        </header>
        <footer className="flex flex-col flex-grow flex-nowrap justify-end pb-20">
          <div className="flex mx-auto gap-x-6">
            <a
              className="border-[3px] border-gray-600 text-sm  text-white  bg-gray-600  rounded font-medium px-14 py-2 inline-block
               hover:bg-gray-500 hover:border-gray-500 hover: transition-colors"
              href="#"
            >
              Explorar Inventario
            </a>
            <a
              className="text-black text-center bg-white rounded font-medium px-14 py-2 inline-block hover:bg-black hover:text-white transition-colors hover:border-black"
              href="#"
            >
              Pedido personalizado
            </a>
          </div>
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 h-full z-10 w-screen">
        <img
          src="/modely.avif"
          alt="Model Y"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};
