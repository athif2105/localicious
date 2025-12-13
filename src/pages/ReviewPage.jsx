import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
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

const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 20px 0;
  text-align: center;
`

const PackageBox = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
`

const BoxTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
`

const PackageItem = styled.div`
  margin-bottom: 12px;
`

const ItemTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
`

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666666;
`

const ItemPrice = styled.span`
  font-weight: 600;
  color: #1a1a1a;
`

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 16px 0;
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 8px;
`

const AddOnButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #00BFA5;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;

  &:hover {
    background: #00a890;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 191, 165, 0.3);
  }
`

const ConfirmButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #1E3A4C;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.3s;

  &:hover {
    background: #162d3a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 76, 0.3);
  }
`

const SaveButton = styled.button`
  width: 100%;
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
    background: #f5f5f5;
  }
`

const ReviewPage = () => {
  const navigate = useNavigate()

  const packageItems = [
    {
      title: 'Stay Selected Ocean View Hotel',
      details: 'Double Room 2 Nights',
      price: 'RM 800'
    },
    {
      title: 'Dine 1: Tamarind Spring',
      details: 'Dinner for 2 Pax',
      price: 'RM 170'
    },
    {
      title: 'Dine 2: Hornbill Restaurant',
      details: 'Breakfast for 2 Pax',
      price: 'RM 130'
    },
    {
      title: 'Leisure Activity: Sunway Lagoon',
      details: 'Water & Theme Park',
      price: 'RM 220'
    }
  ]

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

        <ThreeProgressStepper currentStep={3} />

        <PageTitle>Review Checkout</PageTitle>

        <PackageBox>
          <BoxTitle>Your Package</BoxTitle>
          {packageItems.map((item, index) => (
            <PackageItem key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDetails>
                <span>{item.details}</span>
                <ItemPrice>{item.price}</ItemPrice>
              </ItemDetails>
            </PackageItem>
          ))}
          <Divider />
          <TotalRow>
            <span>Total</span>
            <span>RM 1320</span>
          </TotalRow>
        </PackageBox>

        <AddOnButton>
          <Plus size={20} />
          Add On
        </AddOnButton>

        <ConfirmButton onClick={() => navigate('/payment')}>
          Confirm & Pay
        </ConfirmButton>

        <SaveButton>
          Save for Later
        </SaveButton>
      </Content>
      <BottomNav />
    </Container>
  )
}

export default ReviewPage
