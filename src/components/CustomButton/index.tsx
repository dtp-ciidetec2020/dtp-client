import React from 'react';
import { CustomButtonContainer } from './styled';

type ButtonType = {
  label: string;
  handleClick: () => void;
};

const CustomButton = ({ label, handleClick }: ButtonType) => {
  return <CustomButtonContainer onClick={() => handleClick()}>{label}</CustomButtonContainer>;
};

export default CustomButton;
