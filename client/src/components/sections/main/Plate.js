function Plate() {
    return (
        <mesh>
            <cylinderBufferGeometry
                attach="geometry"
                args={[0.15, 0.02, 0.15]}
            />
            <meshLambertMaterial attach="material" color="green" />
        </mesh>
    );
}

export default Plate;
