import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Text, OrbitControls, Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import styled from 'styled-components'

extend({ TextGeometry })

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
`

// Exploding Confetti Particles
function ExplosionConfetti() {
  const particlesRef = useRef()
  const particleCount = 300

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const radius = Math.random() * 3 + 1

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  const velocities = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 0.1,
        y: (Math.random() - 0.5) * 0.1,
        z: (Math.random() - 0.5) * 0.1,
      })
    }
    return temp
  }, [])

  const colors = useMemo(() => {
    const temp = []
    const colorPalette = [
      new THREE.Color('#00BFA5'),
      new THREE.Color('#FFD700'),
      new THREE.Color('#FF69B4'),
      new THREE.Color('#00CED1'),
      new THREE.Color('#FF6347'),
      new THREE.Color('#9370DB')
    ]
    for (let i = 0; i < particleCount; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      temp.push(color.r, color.g, color.b)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array
      const time = state.clock.elapsedTime

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Explosion effect
        positions[i3] += velocities[i].x
        positions[i3 + 1] += velocities[i].y - 0.002 // Gravity
        positions[i3 + 2] += velocities[i].z

        // Spiral motion
        positions[i3] += Math.sin(time + i) * 0.005
        positions[i3 + 1] += Math.cos(time + i) * 0.005
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.rotation.y = time * 0.1
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
        size={0.2}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Giant 3D Checkmark
function Giant3DCheckmark() {
  const checkRef = useRef()

  useFrame((state) => {
    if (checkRef.current) {
      checkRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      checkRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  const shape = useMemo(() => {
    const checkShape = new THREE.Shape()
    checkShape.moveTo(0, 0)
    checkShape.lineTo(0.3, -0.5)
    checkShape.lineTo(1, 0.5)
    checkShape.lineTo(0.85, 0.65)
    checkShape.lineTo(0.3, -0.2)
    checkShape.lineTo(0.15, 0.15)
    checkShape.lineTo(0, 0)
    return checkShape
  }, [])

  return (
    <mesh ref={checkRef} position={[0, 0.5, 0]}>
      <extrudeGeometry args={[shape, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.1 }]} />
      <meshStandardMaterial
        color="#00BFA5"
        emissive="#00BFA5"
        emissiveIntensity={0.8}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  )
}

// Rotating Rings
function RotatingRings() {
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (ring1.current) ring1.current.rotation.x = time * 0.5
    if (ring2.current) ring2.current.rotation.y = time * 0.7
    if (ring3.current) ring3.current.rotation.z = time * 0.4
  })

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00BFA5" emissive="#00BFA5" emissiveIntensity={0.5} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[2.6, 0.05, 16, 100]} />
        <meshStandardMaterial color="#FF69B4" emissive="#FF69B4" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

// 3D Text in Scene
function Success3DText() {
  return (
    <group position={[0, -2, 0]}>
      <Text
        fontSize={0.5}
        color="#1a1a1a"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#00BFA5"
      >
        Your Booking is Confirmed!
      </Text>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.3}
        color="#00BFA5"
        anchorX="center"
        anchorY="middle"
      >
        1000 points earned!
      </Text>
    </group>
  )
}

// Main Scene
const ThreeCelebration = () => {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#ffffff']} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00BFA5" />
        <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.3} penumbra={1} color="#FFD700" />

        {/* Background Stars */}
        <Stars radius={50} depth={50} count={2000} factor={4} fade speed={2} />

        {/* Sparkles */}
        <Sparkles count={100} scale={10} size={3} speed={0.5} color="#FFD700" />

        {/* Main Elements */}
        <Giant3DCheckmark />
        <RotatingRings />
        <ExplosionConfetti />
        <Success3DText />

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </CanvasContainer>
  )
}

export default ThreeCelebration
