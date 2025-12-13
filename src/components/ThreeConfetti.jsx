import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

// 3D Confetti Particles
function ConfettiParticles() {
  const particlesRef = useRef()
  const particleCount = 200

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  const colors = useMemo(() => {
    const temp = []
    const colorPalette = [
      new THREE.Color('#00BFA5'),
      new THREE.Color('#1E3A4C'),
      new THREE.Color('#FFD700'),
      new THREE.Color('#FF6B9D'),
      new THREE.Color('#4ECDC4')
    ]
    for (let i = 0; i < particleCount; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      temp.push(color.r, color.g, color.b)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2

      const positions = particlesRef.current.geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] = Math.sin(state.clock.elapsedTime + i) * 2
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

// 3D Checkmark Ring
function CheckmarkRing() {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[1.5, 0.1, 16, 100]} />
      <meshStandardMaterial
        color="#00BFA5"
        emissive="#00BFA5"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// Pulsing Sphere
function PulsingSphere() {
  const sphereRef = useRef()

  useFrame((state) => {
    if (sphereRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1
      sphereRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#1E3A4C"
        emissive="#00BFA5"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

// Main Three.js Scene
const ThreeConfetti = () => {
  return (
    <div style={{ width: '100%', height: '200px', borderRadius: '20px', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00BFA5" />

        <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />

        <ConfettiParticles />
        <CheckmarkRing />
        <PulsingSphere />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

export default ThreeConfetti
