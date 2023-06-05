import Image from "next/image";
import { Header } from "./components/Header";
import { BodySection } from "./components/BodySection";
import { ModelYSection } from "./components/ModelYSection";

export default function Home() {
  return (
    <>
      <div style={{width:'100%'}}>
        <Header />
        <main className="snap-y snap-mandatory relative w-screen h-screen overflow-auto ">
          <div className="snap-center">
            <BodySection />
          </div>
          <div className="snap-center">
            <ModelYSection />
          </div>
          <div className="snap-center">
            <BodySection />
          </div>
        </main>
      </div>
    </>
  );
}
