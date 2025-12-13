import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal, Check } from 'lucide-react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import ThreeProgressStepper from '../components/ThreeProgressStepper'

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
  margin: 0 -16px 16px -16px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`

const SearchField = styled.div`
  position: relative;
  margin-bottom: 16px;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px 14px 45px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 14px;
  color: #666666;
  background: #f8f8f8;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
    border-color: #00BFA5;
    background: #ffffff;
  }
`

const SearchIcon = styled(Search)`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
`

const FilterIcon = styled(SlidersHorizontal)`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #1a1a1a;
  cursor: pointer;
`

const HotelCard = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;
  background: #ffffff;
  position: relative;
`

const HotelImageContainer = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
  overflow: hidden;
`

const HotelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CheckmarkBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #00BFA5;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 191, 165, 0.4);

  svg {
    color: #ffffff;
  }
`

const HotelInfo = styled.div`
  padding: 14px;
`

const HotelName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 6px 0;
`

const HotelLocation = styled.p`
  font-size: 13px;
  color: #666666;
  margin: 0 0 10px 0;
`

const HotelDetails = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0 0 4px 0;
  line-height: 1.6;
`

const HotelPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 8px 0 0 0;
`

const PackageSummary = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
`

const SummaryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 12px 0;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #666666;
  margin-bottom: 4px;
`

const SummaryPrice = styled.span`
  font-weight: 600;
  color: #1a1a1a;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`

const BackButton = styled.button`
  flex: 1;
  padding: 14px;
  background: #ffffff;
  color: #1E3A4C;
  border: 2px solid #1E3A4C;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #1E3A4C;
    color: #ffffff;
  }
`

const NextButton = styled.button`
  flex: 1;
  padding: 14px;
  background: #1E3A4C;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #162d3a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 76, 0.3);
  }
`

const ViewPage = () => {
  const navigate = useNavigate()

  return (
    <Container
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <Content>
        <TitleContainer>
          <Title>Selected (Premium Budget)</Title>
        </TitleContainer>

        <ThreeProgressStepper currentStep={1} />

        <SearchField>
          <SearchIcon size={20} />
          <SearchInput
            type="text"
            placeholder="Select Hotels"
          />
          <FilterIcon size={20} />
        </SearchField>

        <HotelCard>
          <HotelImageContainer>
            <HotelImage src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" alt="Ocean View Hotel" />
            <CheckmarkBadge>
              <Check size={20} strokeWidth={3} />
            </CheckmarkBadge>
          </HotelImageContainer>
          <HotelInfo>
            <HotelName>Ocean View Hotel</HotelName>
            <HotelLocation>Kuala Lumpur</HotelLocation>
            <HotelDetails>Triple Room (Full Board)</HotelDetails>
            <HotelDetails>Spa Included (2 Pax)</HotelDetails>
            <HotelPrice>RM: 800</HotelPrice>
          </HotelInfo>
        </HotelCard>

        <PackageSummary>
          <SummaryTitle>Your Package</SummaryTitle>
          <SummaryItem>
            <span>Stay Selected Ocean View Hotel</span>
            <SummaryPrice>RM 800</SummaryPrice>
          </SummaryItem>
        </PackageSummary>

        <ButtonRow>
          <BackButton onClick={() => navigate(-1)}>Back</BackButton>
          <NextButton onClick={() => navigate('/review')}>Next</NextButton>
        </ButtonRow>
      </Content>
      <BottomNav />
    </Container>
  )
}

export default ViewPage
