import React from 'react'
import styled from 'styled-components'
import { Home, Route, Gift, Calendar, ThumbsUp } from 'lucide-react'

const NavContainer = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1E3A4C;
  padding: 12px 20px 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  z-index: 20;
`

const NavItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  transition: all 0.3s ease;
  position: relative;

  svg {
    color: ${props => props.$active ? '#00BFA5' : '#ffffff'};
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  ${props => props.$active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      width: 4px;
      height: 4px;
      background: #00BFA5;
      border-radius: 50%;
    }
  `}
`

const BottomNav = () => {
  return (
    <NavContainer>
      <NavItem>
        <Home size={22} strokeWidth={2} />
      </NavItem>
      <NavItem>
        <Route size={22} strokeWidth={2} />
      </NavItem>
      <NavItem $active>
        <Gift size={22} strokeWidth={2} />
      </NavItem>
      <NavItem>
        <Calendar size={22} strokeWidth={2} />
      </NavItem>
      <NavItem>
        <ThumbsUp size={22} strokeWidth={2} />
      </NavItem>
    </NavContainer>
  )
}

export default BottomNav
