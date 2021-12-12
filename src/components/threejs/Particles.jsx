import { Points, Point, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import React, { useRef } from 'react'
import * as THREE from 'three'
import colors from 'nice-color-palettes'
import { useFrame } from '@react-three/fiber'
import texture from '../../static/textures/particles/3.png'

const palette = colors[Math.floor(Math.random() * colors.length)]
// const controls = useControls

function Particles() {
  const { count, size, positionFactor, rotationSpeed } = useControls({
    count: {
      value: 4000,
      min: 1,
      max: 10000
    },
    size: {
      value: 0.8,
      min: 0.5,
      max: 20
    },
    positionFactor: {
      value: 60,
      min: 5,
      max: 200
    },
    rotationSpeed: 0.01
  })

  const particleTexture = useTexture(texture)

  const particlesRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    particlesRef.current.rotation.y = elapsedTime * rotationSpeed
  })

  return (
    <Points ref={particlesRef} limit={10000}>
      <pointsMaterial
        size={size}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        vertexColors
        map={particleTexture}
        alphaMap={particleTexture}
      />
      {Array.from({ length: count }).map((i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor
          ]}
          color={palette[Math.floor(Math.random() * palette.length)]}
        />
      ))}
    </Points>
  )
}

export { Particles }