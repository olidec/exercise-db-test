import React, { useEffect, useRef } from 'react';
// import 'katex/dist/katex.min.css';
// import katex from 'katex';

export default function EquationRenderer(latex){
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      katex.render(latex, containerRef.current, {
        throwOnError: false,  // Set to true if you want to handle errors
      });
    }
  }, [latex]);

  return <div ref={containerRef} />;
};
