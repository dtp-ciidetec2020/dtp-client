import styled from 'styled-components';
import { Button } from '@material-ui/core';

type CustomButtonContainerType = {
  background: string;
};

export const CustomButtonContainer = styled(Button)`
  border: 5px;
`;
