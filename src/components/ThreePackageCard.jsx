import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating 3D Orb Background
function FloatingOrb({ position, color }) {
  const orbRef = useRef()

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.2
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <mesh ref={orbRef} position={position}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.3}
        radius={1}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

// Particle System
function ParticleField() {
  const particlesRef = useRef()
  const count = 50

  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return arr
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#00BFA5"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Glowing Ring
function GlowRing({ isHovered }) {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5
      ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05)
    }
  })

  return (
    <mesh ref={ringRef} position={[0, 0, -1]}>
      <torusGeometry args={[2, 0.1, 16, 100]} />
      <meshStandardMaterial
        color={isHovered ? "#FFD700" : "#00BFA5"}
        emissive={isHovered ? "#FFD700" : "#00BFA5"}
        emissiveIntensity={isHovered ? 1 : 0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

// Main 3D Card Background Scene
const ThreePackageCard = ({ isHovered }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      opacity: 1,
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00BFA5" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FFD700" />

        <GlowRing isHovered={isHovered} />
        <ParticleField />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <FloatingOrb position={[-2, 0, -1]} color="#00BFA5" />
        </Float>

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <FloatingOrb position={[2, 0, -1]} color="#1E3A4C" />
        </Float>

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <FloatingOrb position={[0, 1.5, -1.5]} color="#FFD700" />
        </Float>
      </Canvas>
    </div>
  )
}

export default ThreePackageCard
