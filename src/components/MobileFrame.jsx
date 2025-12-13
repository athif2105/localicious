import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const FrameContainer = styled(motion.div)`
  width: 390px;
  height: 844px;
  background: #1a1a1a;
  border-radius: 50px;
  padding: 12px;
  box-shadow:
    0 0 0 12px #2a2a2a,
    0 0 0 14px #1a1a1a,
    0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
`

const Notch = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 30px;
  background: #000000;
  border-radius: 0 0 20px 20px;
  z-index: 100;
`

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: url('/twin.jpg') center top no-repeat;
  background-size: cover;
  border-radius: 40px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 100%);
    pointer-events: none;
    z-index: 0;
  }
`

const HomeIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  z-index: 100;
`

const MobileFrame = ({ children }) => {
  return (
    <FrameContainer
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Notch />
      <Screen>
        {children}
      </Screen>
      <HomeIndicator />
    </FrameContainer>
  )
}

export default MobileFrame
