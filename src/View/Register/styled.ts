import styled from 'styled-components';
import Particles from 'react-particles-js';

type ParticlesTypes = {
  params: any;
};

export const ParticlesContainer = styled(Particles)<ParticlesTypes>`
height: 100vh !important;
width: 100vw !important;
position: fixed;
  div {
    background: yellow !important;
  }
`;

export const RegisterContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #8E8D8E;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignText = styled.i`
  cursor: pointer;
  color: #027CFF;
`;
