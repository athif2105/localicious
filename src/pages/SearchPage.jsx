import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ChevronLeft, Bell, User, Search, Plus, Minus, SlidersHorizontal } from 'lucide-react'
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

const DateRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

const DateField = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #ffffff;
  gap: 8px;
`

const DateInput = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
  background: transparent;

  &:focus {
    outline: none;
  }
`

const CalendarIconText = styled.span`
  font-size: 18px;
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #1E3A4C;
  border-radius: 12px;
  margin-bottom: 12px;
`

const CounterLabel = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`

const CounterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const CounterButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    color: #1E3A4C;
    width: 16px;
    height: 16px;
  }
`

const CounterValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  min-width: 30px;
  text-align: center;
`

const SearchButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #1E3A4C;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
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

const SearchPage = () => {
  const navigate = useNavigate()
  const { packageType } = useParams()
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('10 Nov, 2026')
  const [checkOut, setCheckOut] = useState('13 Nov, 2026')

  const handleSearch = () => {
    navigate('/view')
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
          <Title>Selected ({packageType === 'low' ? 'Low Budget' : 'Premium Budget'})</Title>
        </TitleContainer>

        <ThreeProgressStepper currentStep={0} />

        <SearchField>
          <SearchIcon size={20} />
          <SearchInput
            type="text"
            placeholder="Search Destinations"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <FilterIcon size={20} />
        </SearchField>

        <DateRow>
          <DateField>
            <CalendarIconText>📅</CalendarIconText>
            <DateInput
              type="text"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </DateField>
          <DateField>
            <CalendarIconText>📅</CalendarIconText>
            <DateInput
              type="text"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </DateField>
        </DateRow>

        <Counter>
          <CounterLabel>Adult</CounterLabel>
          <CounterControls>
            <CounterButton onClick={() => setAdults(Math.max(1, adults - 1))}>
              <Minus />
            </CounterButton>
            <CounterValue>{adults}</CounterValue>
            <CounterButton onClick={() => setAdults(adults + 1)}>
              <Plus />
            </CounterButton>
          </CounterControls>
        </Counter>

        <Counter>
          <CounterLabel>Children</CounterLabel>
          <CounterControls>
            <CounterButton onClick={() => setChildren(Math.max(0, children - 1))}>
              <Minus />
            </CounterButton>
            <CounterValue>{children}</CounterValue>
            <CounterButton onClick={() => setChildren(children + 1)}>
              <Plus />
            </CounterButton>
          </CounterControls>
        </Counter>

        <SearchButton onClick={handleSearch}>
          Search
        </SearchButton>
      </Content>
      <BottomNav />
    </Container>
  )
}

export default SearchPage
