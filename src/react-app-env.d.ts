/// <reference types="react-scripts" />

declare module 'react-particles-js' {
    import * as React from 'react';
  
    export interface ParticlesProps {
      width?: any;
      params?: any;
    }
    const Particles: React.ComponentClass<ParticlesProps>;
    export default Particles;
  }
  
declare module 'vanta' {
    import * as React from 'react';

    export interface VantaProps {
        type?: any,
        el: any
    }
    const Vanta: VantaProps;
    export default Vanta;
}