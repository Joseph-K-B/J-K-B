import * as THREE from 'three';
import React, {Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Particles } from './Particles';

export default function ThreeCanvas() {
const mouse = useRef([0, 0])

    return (
        <Canvas
            linear
            dpr={[1, 2]}
            camera={{ fov: 100, position: [0, 0, 30] }}
            onCreated={({ gl }) => {
                gl.setClearColor(new THREE.Color('#020207'))
            }}>
            <pointLight 
                distance={100} 
                intensity={4}
                color='white'
            />
            <Suspense fallback={null}>
            <Particles mouse={mouse} count={10000} />
            </Suspense>
        </Canvas>
    )
}