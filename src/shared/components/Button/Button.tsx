import React from 'react';
import styled from 'styled-components';
import ButtonPropsType from './ButtonPropsType';

const ButtonContainer = styled.button`
border: none;
background-color: #0085FF;
color: white;
width: fit-content;
padding: 0.7rem 0.9rem;
border-radius: 0.2rem;
height: fit-content;
transition: all 0.25s ease-in-out;
font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: #0071D9;
  }
  &:disabled{
    background-color: #c5c5c5;
  }
`;

export default function Button({buttonText, handleButtonClick, disable=false}: ButtonPropsType) {

  return (
  <ButtonContainer onClick={handleButtonClick} disabled={disable}>
      {buttonText}
  </ButtonContainer>
  );
}
