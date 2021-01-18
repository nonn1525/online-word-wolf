import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter className='flex center'>
      <p>Thank you for playing!!</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #00AD9F;
  padding: 8px 0;
  position: absolute;
  bottom: 0;
  left: 0;
`
