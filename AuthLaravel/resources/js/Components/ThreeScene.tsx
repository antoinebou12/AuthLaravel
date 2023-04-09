// components/ThreeScene.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const width = window.innerWidth * 0.8;
        const height = window.innerHeight * 0.8;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (containerRef.current) {
            containerRef.current?.appendChild(renderer.domElement);
        }

        const geometrie = new THREE.BoxGeometry();
        const materiau = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cubes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>[] = [];

        for (let i = 0; i < 16; i++) {
            const cube = new THREE.Mesh(geometrie, materiau);
            cube.position.x = i * 2;
            cube.position.y = i * 2;
            cube.position.z = i * 2;
            scene.add(cube);
            cubes.push(cube);
        }

        camera.position.z = 20;
        camera.position.y = 5;
        camera.lookAt(scene.position);

        const animer = () => {
            requestAnimationFrame(animer);

            cubes.forEach((cube, index) => {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                cube.position.y =
                    Math.sin(Date.now() * 0.001 + index * 0.5) * 2;
                cube.position.z =
                    Math.cos(Date.now() * 0.001 + index * 0.5) * 2;
            });

            renderer.render(scene, camera);
        };

        animer();

        return () => {
            renderer.dispose();
            cubes.forEach((cube: THREE.Mesh) => {
                scene.remove(cube);
            });
            geometrie.dispose();
            materiau.dispose();
        };
    }, []);

    return <div ref={containerRef} />;
};

export default ThreeScene;
