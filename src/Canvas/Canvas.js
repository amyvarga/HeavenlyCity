import React, { useRef, useEffect } from 'react';

function Canvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight- 10;
    canvas.midWidth = canvas.width/2;
    canvas.midHeight = canvas.height/2;
    const circleRadius = canvas.width*0.25;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth=1;

    //circles
    ctx.beginPath();
    ctx.arc(canvas.midWidth, canvas.midHeight, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
    /*ctx.beginPath();
    ctx.setLineDash([5, 15]);
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
    ctx.stroke();*/

    //rectangle
    ctx.setLineDash([]);
    ctx.strokeRect(canvas.midWidth-circleRadius, canvas.midHeight-circleRadius, circleRadius*2, circleRadius*2);
    
    //triangle
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth-circleRadius, canvas.midHeight+circleRadius);
    ctx.lineTo(canvas.midWidth, (canvas.midHeight-(circleRadius*0.7)));
    ctx.lineTo(canvas.midWidth+circleRadius, canvas.midHeight+circleRadius);
    ctx.stroke();

    //heptagon
    //left lines
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(canvas.midWidth, canvas.midHeight+circleRadius);
    ctx.lineTo(canvas.midWidth-(circleRadius/1.275), canvas.midHeight+(circleRadius*0.62));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth-(circleRadius/1.275), canvas.midHeight+(circleRadius*0.62));
    ctx.lineTo(canvas.midWidth-(circleRadius/1.0275), canvas.midHeight-(circleRadius*0.215));
    ctx.stroke();
    //right lines
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth, canvas.midHeight+circleRadius);
    ctx.lineTo(canvas.midWidth+(circleRadius/1.275), canvas.midHeight+(circleRadius*0.62));
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(canvas.midWidth+(circleRadius/1.275), canvas.midHeight+(circleRadius*0.62));
    ctx.lineTo(canvas.midWidth+(circleRadius/1.0275), canvas.midHeight-(circleRadius*0.215));
    ctx.stroke();

    //heptagon guiding circles
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.arc(canvas.midWidth-(circleRadius/1.275), canvas.midHeight+(circleRadius*0.62), canvas.width*0.215, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth+(circleRadius/1.275), canvas.midHeight+(circleRadius*0.62), canvas.width*0.215, 0, 2*Math.PI);
    ctx.stroke();
  }, []);


  return (
    <canvas ref={canvasRef} />
  );
}

export default Canvas;