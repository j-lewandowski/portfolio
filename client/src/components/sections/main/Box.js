import Plate from "./Plate";
function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 1.5]} />
            <meshLambertMaterial attach="material" color="white" />
            <Plate position={[[3, 2, 2]]} rotation-x={0.1} />
        </mesh>
    );
}

export default Box;
