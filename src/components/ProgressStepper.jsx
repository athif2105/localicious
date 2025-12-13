import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 30px 0;
  position: relative;
`

const StepLine = styled.div`
  position: absolute;
  top: 14px;
  left: 30px;
  right: 30px;
  height: 2px;
  background: #e0e0e0;
  z-index: 0;
`

const StepLineProgress = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #1E3A4C;
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  flex: 1;
`

const StepCircle = styled(motion.div)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => props.$active || props.$completed ? '#1E3A4C' : '#ffffff'};
  border: 2px solid ${props => props.$active || props.$completed ? '#1E3A4C' : '#e0e0e0'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  transition: all 0.3s ease;
`

const CheckMark = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`

const StepLabel = styled.span`
  font-size: 12px;
  font-weight: ${props => props.$active ? '600' : '500'};
  color: ${props => props.$active ? '#1E3A4C' : '#999999'};
`

const ProgressStepper = ({ currentStep = 0 }) => {
  const steps = [
    { label: 'Stay', id: 0 },
    { label: 'Dine', id: 1 },
    { label: 'Leisure', id: 2 },
    { label: 'Review', id: 3 }
  ]

  const progressPercentage = (currentStep / (steps.length - 1)) * 100

  return (
    <StepperContainer>
      <StepLine>
        <StepLineProgress
          initial={{ width: '0%' }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </StepLine>
      {steps.map((step) => (
        <Step key={step.id}>
          <StepCircle
            $active={step.id === currentStep}
            $completed={step.id < currentStep}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: step.id * 0.1, type: 'spring' }}
          >
            {step.id < currentStep && <CheckMark>✓</CheckMark>}
          </StepCircle>
          <StepLabel $active={step.id === currentStep}>
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </StepperContainer>
  )
}

export default ProgressStepper
