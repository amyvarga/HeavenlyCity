import React, { useRef, useEffect } from 'react';

function Canvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext('2d');

    // Start drawing
    context.beginPath();
    context.arc(110,100,40,0,2*Math.PI);
    context.stroke();

  }, []);


  return (
    <canvas ref={canvasRef} />
  );
}

export default Canvas;