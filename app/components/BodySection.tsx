import React from "react";

export const BodySection = () => {
  return (
    <section className="landing-section h-screen w-screen text-center relative overflow-hidden" data-header-color="white">
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2 className="text-white pt-40 text-[40px] font-medium">
            Disfrute de Tesla
          </h2>
          <p className="text-white text-sm">
            Progame una prubea de conduccion hoy mismo
          </p>
        </header>
        <footer className="flex flex-col flex-grow flex-nowrap justify-end pb-20">
          <div>
            <a
              className="text-white text-sm border-[3px] border-white bg-white/5 backdrop-blur-sm rounded font-medium px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors"
              href="#"
            >
              Prueba de conduccion
            </a>
          </div>
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 h-full z-10 w-full">
        <video
          className="object-center object-cover h-full w-full"
          autoPlay
          muted
          loop
          src="/homevideo.webm"
        ></video>
      </div>
    </section>
  );
};

