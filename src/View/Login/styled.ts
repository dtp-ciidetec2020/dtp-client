import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core';

export const LoginContainer = styled(Grid)`
  background: #ea1d24;
  width: 100%;
  height: 100vh;
`;

export const BackgroundLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

export const Form = styled(Paper)`
  width: 80%;
  padding: 18px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
