import React, { useState } from 'react'
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

const PackageBox = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 16px;
`

const BoxTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 14px 0;
`

const PackageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #666666;
  margin-bottom: 8px;
`

const ItemPrice = styled.span`
  font-weight: 600;
  color: #1a1a1a;
`

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 14px 0;
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
`

const PromoSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`

const PromoInput = styled.input`
  flex: 1;
  padding: 14px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 14px;
  color: #1a1a1a;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
    border-color: #00BFA5;
  }
`

const PromoCode = styled.div`
  padding: 14px 16px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
`

const DiscountText = styled.p`
  font-size: 13px;
  color: #00BFA5;
  font-weight: 600;
  margin: 0 0 16px 0;
  text-align: right;
`

const FinalTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 24px;
`

const PaymentTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  text-align: center;
`

const PaymentMethodsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`

const PaymentButton = styled.button`
  flex: 1;
  padding: 16px 12px;
  background: #1E3A4C;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #162d3a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 76, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`

const InstructionText = styled.p`
  font-size: 12px;
  color: #666666;
  line-height: 1.6;
  text-align: center;
  margin: 0;
`

const CodeHighlight = styled.span`
  font-weight: 700;
  color: #1a1a1a;
`

const PaymentPage = () => {
  const navigate = useNavigate()
  const [promoCode] = useState('leis67p')

  const handlePayment = () => {
    navigate('/confirmation')
  }

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
          <Title>Payment</Title>
        </TitleContainer>

        <PackageBox>
          <BoxTitle>Your Package</BoxTitle>
          <PackageItem>
            <span>Stay Selected Ocean View</span>
            <ItemPrice>RM 800</ItemPrice>
          </PackageItem>
          <PackageItem>
            <span>Double Room 2 Nights Sp</span>
          </PackageItem>
          <PackageItem>
            <span>Dine 2: Hornbill Resta</span>
            <ItemPrice>RM 130</ItemPrice>
          </PackageItem>
          <PackageItem>
            <span>Leisure Activity: Sunway Lagoon</span>
            <ItemPrice>RM 220</ItemPrice>
          </PackageItem>
          <Divider />
          <TotalRow>
            <span>Total</span>
            <span>RM 1320</span>
          </TotalRow>
        </PackageBox>

        <PromoSection>
          <PromoInput type="text" placeholder="Input Promo Code" />
          <PromoCode>{promoCode}</PromoCode>
        </PromoSection>

        <DiscountText>- RM 25 off entire package</DiscountText>

        <FinalTotal>
          <span>Total Payable Amount</span>
          <span>RM 1295</span>
        </FinalTotal>

        <PaymentTitle>Select Payment Method</PaymentTitle>

        <PaymentMethodsRow>
          <PaymentButton onClick={handlePayment}>eWallet</PaymentButton>
          <PaymentButton onClick={handlePayment}>FPX</PaymentButton>
          <PaymentButton onClick={handlePayment}>Credit / Debit</PaymentButton>
        </PaymentMethodsRow>

        <InstructionText>
          Once payment is done, enter the confirmation code from your email to earn your point: <CodeHighlight>LEI356X</CodeHighlight>
        </InstructionText>
      </Content>
      <BottomNav />
    </Container>
  )
}

export default PaymentPage
