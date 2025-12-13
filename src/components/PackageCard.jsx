import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Volume2, VolumeX, ArrowRight } from 'lucide-react'

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  position: relative;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`

const CardContent = styled.div`
  padding: 16px;
  position: relative;
`

const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  letter-spacing: 0.2px;
`

const CardDescription = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
  margin: 0;
  padding-right: 40px;
`

const AudioButton = styled(motion.button)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.$isPlaying ? '#00BFA5' : '#1a1a1a'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  svg {
    color: #ffffff;
  }
`

const SelectBadge = styled(motion.div)`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 191, 165, 0.95);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 8px 24px rgba(0, 191, 165, 0.4);
  z-index: 5;
  pointer-events: none;
`

const PackageCard = ({ package: pkg }) => {
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const femaleVoiceRef = useRef(null)

  // Pre-load voices on component mount to avoid delay
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()

      // Priority list for female voices (most natural sounding first)
      const femaleVoice = voices.find(voice =>
        voice.lang.startsWith('en') && (
          voice.name.includes('Google UK English Female') ||
          voice.name.includes('Microsoft Zira') ||
          voice.name.includes('Samantha') ||
          voice.name.includes('Karen') ||
          voice.name.includes('Victoria') ||
          voice.name.includes('Female') ||
          voice.name.toLowerCase().includes('woman')
        )
      )

      // Fallback to any English female-sounding voice
      if (!femaleVoice) {
        femaleVoiceRef.current = voices.find(voice =>
          voice.lang.startsWith('en') && !voice.name.toLowerCase().includes('male')
        )
      } else {
        femaleVoiceRef.current = femaleVoice
      }
    }

    // Load voices immediately
    loadVoices()

    // Also load on voiceschanged event (for browsers that load voices async)
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
    }
  }, [])

  const handleCardClick = () => {
    // Navigate to search page with package type
    const packageType = pkg.title.includes('Low') ? 'low' : 'premium'
    navigate(`/search/${packageType}`)
  }

  const handleSpeak = (e) => {
    // Stop propagation to prevent card click
    e.stopPropagation()

    // Cancel any ongoing speech immediately
    window.speechSynthesis.cancel()

    if (isPlaying) {
      setIsPlaying(false)
      return
    }

    // Create speech text
    const textToSpeak = `${pkg.title}. ${pkg.description}`

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(textToSpeak)

    // Configure voice settings for natural, female voice
    utterance.rate = 0.95 // Natural speed
    utterance.pitch = 1.15 // Higher pitch for female voice
    utterance.volume = 1

    // Use pre-loaded female voice
    if (femaleVoiceRef.current) {
      utterance.voice = femaleVoiceRef.current
    }

    // Event handlers
    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    // Speak immediately
    window.speechSynthesis.speak(utterance)
  }

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        rotateX: -3,
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
        z: 50
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      <ImageContainer>
        <img
          src={pkg.image}
          alt={pkg.title}
        />
        {isHovered && (
          <SelectBadge
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Tap to Select
            <ArrowRight size={16} />
          </SelectBadge>
        )}
      </ImageContainer>
      <CardContent>
        <CardTitle>{pkg.title}</CardTitle>
        <CardDescription>{pkg.description}</CardDescription>
        <AudioButton
          $isPlaying={isPlaying}
          onClick={handleSpeak}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <VolumeX size={18} strokeWidth={2.5} />
          ) : (
            <Volume2 size={18} strokeWidth={2.5} />
          )}
        </AudioButton>
      </CardContent>
    </Card>
  )
}

export default PackageCard
