import { Loader, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import Preloader from "./components/Preloader";
import { Leva } from "leva";

function App() {
  return (
    <>
      {/* <Stats /> */}
      <UI />
      <Loader />
      <Leva hidden/>
      <Canvas shadows camera={{ position: [1, 6, 12], fov: 50 }}>
        <fog attach="fog" args={["#574f5e", 8, 22]} />
        <color attach="background" args={["#574f5e"]} />
        <Experience />
        <Preloader/>
      </Canvas>
    </>
  );
}

export default App;
