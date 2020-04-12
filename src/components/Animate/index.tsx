import React from 'react';
import { AnimationContainer, AnimationType } from './styled';

type AnimateType = {
  children: any;
  animationProps: AnimationType;
};

const Animate = ({ children, animationProps }: AnimateType) => (
  <AnimationContainer
    width={animationProps.width}
    animation={animationProps.animation}
    duration={animationProps.duration}
  >
    {children}
  </AnimationContainer>
);

export default Animate;
