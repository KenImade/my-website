import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${props => (props.isActive ? '#222222' : '#FFFFFF')};
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: ${props => (props.isActive ? '#FFFFFF' : '#222222')}; 
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  margin: 5px;
  margin-left: 0px;
  outline: none;
  padding: 6px 13px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:hover {
    background-color: ${props => (props.isActive ? '#111111' : '#e6f0ff')};
    color: ${props => (props.isActive ? '#e6f0ff' : '#111111')};
  }

  &:active {
    background-color: #F7F7F7;
    border-color: #000000;
    transform: scale(.96);
  }

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow .2s;
  }

  &:disabled {
    border-color: #DDDDDD;
    color: #DDDDDD;
    cursor: not-allowed;
    opacity: 1;
  }
`;

const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <ButtonStyled isActive={isActive} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};

export default FilterButton;