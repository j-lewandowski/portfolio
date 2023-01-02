import { Canvas } from "@react-three/fiber";
import Box from "./Box";

import { OrbitControls } from "@react-three/drei";

function Scene() {
    return (
        <Canvas className="h-2 w-2 md:h-full md:w-full">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Box />
        </Canvas>
    );
}

export default Scene;
