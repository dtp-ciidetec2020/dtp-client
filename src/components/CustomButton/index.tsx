import React from 'react';
import { CustomButtonContainer } from './styled';

type ButtonType = {
  label?: string;
  handleClick: () => void;
  fullWidth?: boolean;
  type: 'primary' | 'secondary';
  margin?: string;
  dissabled?: boolean;
  padding?: string;
};

const CustomButton = ({
  label,
  handleClick,
  fullWidth,
  type = 'primary',
  margin = '0px',
  dissabled = false,
  padding,
}: ButtonType) => {
  return (
    <CustomButtonContainer
      fullWidth={fullWidth}
      variant="contained"
      color={type}
      disabled={dissabled}
      margin={margin}
      padding={padding}
      onClick={() => handleClick()}
    >
      {label}
    </CustomButtonContainer>
  );
};

export default CustomButton;
