import React from 'react';
import { FormContainer } from './styled';

type FormType = {
  children: any;
  elevation?: number;
  handleEnterPress: () => void;
  width: string;
  height: string
};

const Form = ({ children, handleEnterPress, elevation, width, height }: FormType) => (
  <FormContainer
    width={width}
    height={height}
    elevation={elevation}
    onKeyDown={(e) => e.key === 'Enter' && handleEnterPress()}
  >
    {children}
  </FormContainer>
);

export default Form;
