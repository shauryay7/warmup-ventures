import React from 'react';
import { useInView } from 'react-intersection-observer';
import './index.css';

const AnimatedHeading = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <h1 ref={ref} className={`heading ${inView ? 'visible' : ''}`}>
      Slide Up Heading
    </h1>
  );
};

export default AnimatedHeading;
