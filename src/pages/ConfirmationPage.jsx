import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 30px 30px 0 0;
  padding: 0 16px 100px 16px;
  margin-top: 10px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const TitleContainer = styled.div`
  background: #ffffff;
  padding: 16px;
  margin: 0 -16px 20px -16px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`

const CheckmarkContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 20px 0;
`

const CheckmarkCircle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ffffff;
  border: 4px solid #00BFA5;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 191, 165, 0.3);
  position: relative;

  &::after {
    content: '✓';
    font-size: 60px;
    color: #1E3A4C;
    font-weight: bold;
  }
`

const SuccessTitle = styled(motion.h1)`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin: 20px 0 10px 0;
  position: relative;
`

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  background: ${props => props.$color};
  opacity: 0.8;
`

const GraffitiStar = styled(motion.div)`
  position: absolute;
  font-size: ${props => props.$size}px;
  opacity: 0.7;
`

const PointsText = styled(motion.p)`
  font-size: 16px;
  font-weight: 600;
  color: #00BFA5;
  text-align: center;
  margin: 0 0 24px 0;
`

const ConfirmationBox = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  background: #f8f8f8;
`

const ConfirmMessage = styled.p`
  font-size: 13px;
  color: #666666;
  text-align: center;
  margin: 0 0 16px 0;
  line-height: 1.6;
`

const DateText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 16px 0;
`

const BookingNumber = styled.p`
  font-size: 14px;
  color: #1a1a1a;
  text-align: center;
  margin: 0;

  strong {
    font-weight: 700;
    color: #1E3A4C;
  }
`

const ThumbnailCard = styled.div`
  display: flex;
  gap: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
  background: #ffffff;
`

const ThumbnailImage = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  background: linear-gradient(135deg, #1E3A4C, #00BFA5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const VRBadge = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 6px;
  border-radius: 6px;
  text-align: center;
`

const ThumbnailImageActual = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PackageDetails = styled.div`
  flex: 1;
`

const DetailText = styled.p`
  font-size: 13px;
  color: #666666;
  margin: 0 0 6px 0;
`

const PriceText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 8px 0 0 0;
`

const DownloadButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #1E3A4C;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #162d3a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 76, 0.3);
  }
`

const ConfirmationPage = () => {
  const navigate = useNavigate()

  return (
    <Container
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <Header />
      <Content>
        <TitleContainer>
          <Title>Booking Confirmation</Title>
        </TitleContainer>

        <CheckmarkContainer>
          <CheckmarkCircle
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          />
        </CheckmarkContainer>

        <SuccessTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Floating particles around text */}
          <FloatingParticle
            $size={8}
            $color="#FFD700"
            style={{ top: '-15px', left: '10%' }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <FloatingParticle
            $size={6}
            $color="#00BFA5"
            style={{ top: '-10px', right: '15%' }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <FloatingParticle
            $size={10}
            $color="#FF6B9D"
            style={{ top: '5px', left: '5%' }}
            animate={{
              y: [0, -8, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
          />
          <FloatingParticle
            $size={7}
            $color="#4ECDC4"
            style={{ bottom: '0px', right: '10%' }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9
            }}
          />

          {/* Graffiti stars */}
          <GraffitiStar
            $size={24}
            style={{ top: '-20px', left: '2%' }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨
          </GraffitiStar>
          <GraffitiStar
            $size={20}
            style={{ top: '-15px', right: '5%' }}
            animate={{
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            ⭐
          </GraffitiStar>
          <GraffitiStar
            $size={18}
            style={{ bottom: '-10px', left: '8%' }}
            animate={{
              y: [0, -5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            💫
          </GraffitiStar>
          <GraffitiStar
            $size={22}
            style={{ bottom: '-5px', right: '12%' }}
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
          >
            🎉
          </GraffitiStar>

          Your Booking is Confirmed!
        </SuccessTitle>

        <PointsText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          1000 points earned!
        </PointsText>

        <ConfirmationBox>
          <ConfirmMessage>
            You have successfully booked the premium budget package
          </ConfirmMessage>
          <DateText>
            From 10 Nov, 2026 to 13 Nov, 2026 (2 nights)
          </DateText>
          <BookingNumber>
            Booking Number: <strong>PREM12637</strong>
          </BookingNumber>
        </ConfirmationBox>

        <ThumbnailCard>
          <ThumbnailImage>
            <ThumbnailImageActual src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop" alt="Package" />
            <VRBadge>VR Tour (Full package)</VRBadge>
          </ThumbnailImage>
          <PackageDetails>
            <DetailText><strong>Ocean View Hotel Tamarind Springs KL</strong></DetailText>
            <DetailText>Hornbill Restaurant and Cafe</DetailText>
            <DetailText>Sunway Lagoon</DetailText>
            <PriceText>RM: 1295 <span style={{ fontSize: '11px', fontWeight: '400', color: '#666' }}>(Paid full amount with Debit card)</span></PriceText>
          </PackageDetails>
        </ThumbnailCard>

        <DownloadButton onClick={() => navigate('/')}>
          Download Digital Receipt
        </DownloadButton>
      </Content>
      <BottomNav />
    </Container>
  )
}

export default ConfirmationPage
