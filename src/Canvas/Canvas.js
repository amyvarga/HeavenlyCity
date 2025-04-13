import React, { useRef, useEffect } from 'react';

function Canvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight- 10;
    canvas.midWidth = canvas.width/2;
    canvas.midHeight = canvas.height/2;
    const circleRadius = canvas.width*0.15;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth=1;

    //circles
    ctx.beginPath();
    ctx.arc(canvas.midWidth, canvas.midHeight, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth+circleRadius, canvas.midHeight, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth-circleRadius, canvas.midHeight, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth, canvas.midHeight+circleRadius, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth, canvas.midHeight-circleRadius, circleRadius, 0, 2*Math.PI);
    ctx.stroke();

    //rectangle
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth-circleRadius, canvas.midHeight-circleRadius);
    ctx.lineTo(canvas.midWidth-circleRadius, canvas.midHeight+circleRadius);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth+circleRadius, canvas.midHeight-circleRadius);
    ctx.lineTo(canvas.midWidth+circleRadius, canvas.midHeight+circleRadius);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth-circleRadius, canvas.midHeight-circleRadius);
    ctx.lineTo(canvas.midWidth+circleRadius, canvas.midHeight-circleRadius);
    ctx.stroke();
    ctx.moveTo(canvas.midWidth+circleRadius, canvas.midHeight+circleRadius);
    ctx.lineTo(canvas.midWidth-circleRadius, canvas.midHeight+circleRadius);
    ctx.stroke();

  }, []);


  return (
    <canvas ref={canvasRef} />
  );
}

export default Canvas;