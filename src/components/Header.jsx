import React from 'react'
import styled from 'styled-components'
import { ChevronLeft, Bell, User } from 'lucide-react'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 16px 16px 16px;
  position: relative;
  z-index: 101;
`

const BackButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  svg {
    color: #ffffff;
  }
`

const HeaderTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  h1 {
    font-size: 17px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
    letter-spacing: 0.2px;
  }
`

const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const IconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  svg {
    color: #ffffff;
  }
`

const NotificationDot = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background: #ff3b30;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
`

const Header = () => {
  return (
    <HeaderContainer>
      <BackButton>
        <ChevronLeft size={20} strokeWidth={2.5} />
      </BackButton>

      <HeaderTitle>
        <h1>Package Builder</h1>
      </HeaderTitle>

      <HeaderActions>
        <IconButton>
          <Bell size={18} strokeWidth={2} />
          <NotificationDot />
        </IconButton>
        <IconButton>
          <User size={18} strokeWidth={2} />
        </IconButton>
      </HeaderActions>
    </HeaderContainer>
  )
}

export default Header
