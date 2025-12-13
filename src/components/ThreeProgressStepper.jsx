import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Trail, Float } from '@react-three/drei'
import * as THREE from 'three'
import styled from 'styled-components'

const CanvasWrapper = styled.div`
  width: 100%;
  height: 160px;
  margin: 10px 0;
`

// 3D Step Sphere
function StepSphere({ position, isActive, isCompleted, label, index }) {
  const sphereRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (sphereRef.current) {
      if (isActive) {
        sphereRef.current.rotation.y = state.clock.elapsedTime * 1.5
        sphereRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.1
      }

      if (glowRef.current && isActive) {
        const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 1
        glowRef.current.scale.setScalar(pulse)
      }
    }
  })

  const color = isCompleted ? '#00BFA5' : isActive ? '#FFD700' : '#e0e0e0'
  const emissiveIntensity = isActive ? 0.8 : isCompleted ? 0.5 : 0

  return (
    <group>
      {/* Glow effect for active step */}
      {isActive && (
        <mesh ref={glowRef} position={position}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshBasicMaterial color="#FFD700" transparent opacity={0.3} />
        </mesh>
      )}

      {/* Main sphere */}
      <Float speed={isActive ? 2 : 0} rotationIntensity={isActive ? 0.5 : 0} floatIntensity={isActive ? 0.3 : 0}>
        <mesh ref={sphereRef} position={position}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={emissiveIntensity}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Checkmark for completed steps */}
      {isCompleted && (
        <Text
          position={[position[0], position[1], position[2] + 0.1]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          ✓
        </Text>
      )}

      {/* Label below sphere */}
      <Text
        position={[position[0], position[1] - 0.7, position[2]]}
        fontSize={0.25}
        color={isActive ? '#1E3A4C' : '#666666'}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#ffffff"
      >
        {label}
      </Text>
    </group>
  )
}

// Connecting Lines Between Steps
function ConnectionLine({ start, end, isActive }) {
  const points = []
  points.push(new THREE.Vector3(...start))
  points.push(new THREE.Vector3(...end))

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    return geometry
  }, [start, end])

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial
        attach="material"
        color={isActive ? '#1E3A4C' : '#e0e0e0'}
        linewidth={2}
      />
    </line>
  )
}

// Animated Progress Wave
function ProgressWave({ currentStep }) {
  const waveRef = useRef()

  useFrame((state) => {
    if (waveRef.current) {
      waveRef.current.rotation.z = state.clock.elapsedTime * 0.5
      waveRef.current.position.x = -2 + (currentStep / 3) * 4
    }
  })

  return (
    <mesh ref={waveRef} position={[-2, 0, -0.5]}>
      <torusGeometry args={[0.2, 0.05, 16, 100]} />
      <meshStandardMaterial color="#00BFA5" emissive="#00BFA5" emissiveIntensity={0.8} />
    </mesh>
  )
}

// Particle Trail
function ParticleTrail({ currentStep }) {
  const particlesRef = useRef()
  const particleCount = 30

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = -2 + (i / particleCount) * 4
      arr[i * 3 + 1] = Math.sin(i * 0.5) * 0.3
      arr[i * 3 + 2] = 0
    }
    return arr
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const posArray = particlesRef.current.geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.3) * 0.01
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00BFA5"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Main Component
const ThreeProgressStepper = ({ currentStep = 0 }) => {
  const steps = [
    { label: 'Stay', id: 0, position: [-2, 0, 0] },
    { label: 'Dine', id: 1, position: [-0.7, 0, 0] },
    { label: 'Leisure', id: 2, position: [0.7, 0, 0] },
    { label: 'Review', id: 3, position: [2, 0, 0] }
  ]

  return (
    <CanvasWrapper>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00BFA5" />

        {/* Connection Lines - only show for completed segments */}
        {steps.slice(0, -1).map((step, index) => {
          if (index < currentStep) {
            return (
              <ConnectionLine
                key={`line-${index}`}
                start={step.position}
                end={steps[index + 1].position}
                isActive={true}
              />
            )
          }
          return null
        })}

        {/* Step Spheres */}
        {steps.map((step) => (
          <StepSphere
            key={step.id}
            position={step.position}
            isActive={step.id === currentStep}
            isCompleted={step.id < currentStep}
            label={step.label}
            index={step.id}
          />
        ))}

        {/* Animated Effects - removed to clean up view */}
      </Canvas>
    </CanvasWrapper>
  )
}

export default ThreeProgressStepper
