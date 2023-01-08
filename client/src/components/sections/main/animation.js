import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-90, 140, 140);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const latheGeo = new THREE.LatheGeometry(1, 2, 1);
const lathe = new THREE.Mesh(latheGeo);
scene.add(lathe);

function animate() {
    //Self-rotation
    lathe.rotateY(0.004);
    // mercury.mesh.rotateY(0.004);
    // venus.mesh.rotateY(0.002);
    // earth.mesh.rotateY(0.02);
    // mars.mesh.rotateY(0.018);
    // jupiter.mesh.rotateY(0.04);
    // saturn.mesh.rotateY(0.038);
    // uranus.mesh.rotateY(0.03);
    // neptune.mesh.rotateY(0.032);
    // pluto.mesh.rotateY(0.008);

    //Around-sun-rotation
    // mercury.obj.rotateY(0.04);
    // venus.obj.rotateY(0.015);
    // earth.obj.rotateY(0.01);
    // mars.obj.rotateY(0.008);
    // jupiter.obj.rotateY(0.002);
    // saturn.obj.rotateY(0.0009);
    // uranus.obj.rotateY(0.0004);
    // neptune.obj.rotateY(0.0001);
    // pluto.obj.rotateY(0.00007);

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);