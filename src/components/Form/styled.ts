import styled from 'styled-components';
import { Paper } from '@material-ui/core';

type FormContainerType = {
  elevation?: number;
  width: string;
  height: string;
};

export const FormContainer = styled(Paper)<FormContainerType>`
  width: ${({ width }) => width};
  padding: 18px;
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
`;
