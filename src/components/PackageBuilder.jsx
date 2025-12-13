import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Header from './Header'
import PackageCard from './PackageCard'
import BottomNav from './BottomNav'

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
  padding: 0 16px 80px 16px;
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
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12);
  position: sticky;
  top: 0;
  z-index: 10;
`

const Title = styled.h1`
  font-size: 17px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
  margin: 0;
  letter-spacing: 0.3px;
`

const packagesData = [
  {
    id: 1,
    title: 'Low Budget Package',
    description: '3 night stay (Buffet breakfast) Camping dinner Arrangement and Hiking',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&h=500&fit=crop'
  },
  {
    id: 2,
    title: 'Premium Budget Package',
    description: '7 night stay (Buffet breakfast) Camping dinner Arrangement and one picnic arrangement',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop'
  }
]

const PackageBuilder = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <Content>
        <TitleContainer>
          <Title>Build Your Own Package</Title>
        </TitleContainer>
        {packagesData.map((pkg) => (
          <PackageCard key={pkg.id} package={pkg} />
        ))}
      </Content>
      <BottomNav />
    </Container>
  )
}

export default PackageBuilder
