import styled from 'styled-components';
import { Button } from '@material-ui/core';

type ButtonType = {
  margin?: string;
  padding?: string;
};

export const CustomButtonContainer = styled(Button)<ButtonType>`
  border: 5px;
  margin: ${({ margin }) => margin} !important;
  padding: ${({ padding }) => padding} !important;
`;
