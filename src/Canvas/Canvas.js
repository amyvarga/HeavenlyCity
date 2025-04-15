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
    const circleCircum = 2*Math.PI*circleRadius;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth=1;

    //circles and rectangle
    ctx.beginPath();
    ctx.arc(canvas.midWidth, canvas.midHeight, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth, canvas.midHeight, circleRadius*0.8, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth, canvas.midHeight, circleRadius*0.5, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(canvas.midWidth-circleRadius, canvas.midHeight-circleRadius, circleRadius*2, circleRadius*2);
    ctx.fillStyle = "#f8ad9d";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(canvas.midWidth-(circleRadius*0.8), canvas.midHeight-(circleRadius*0.8), circleRadius*1.6, circleRadius*1.6);
    ctx.fillStyle = "#fbc4ab";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(canvas.midWidth-(circleRadius*0.35), canvas.midHeight-(circleRadius*0.35), circleRadius*0.7, circleRadius*0.7);
    ctx.fillStyle = "#f8ad9d";
    ctx.fill();
    

    //top triangle
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth-circleRadius, canvas.midHeight-circleRadius);
    ctx.lineTo(canvas.midWidth, canvas.midHeight+(circleRadius*0.7));
    ctx.lineTo(canvas.midWidth+circleRadius, canvas.midHeight-circleRadius);
    ctx.fillStyle = "#f08080";
    ctx.fill();
    //heptagons
    ctx.beginPath();
    /*no.9*/ ctx.moveTo(canvas.midWidth, canvas.midHeight-circleRadius);
    /*no.14*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.124), canvas.midHeight-(circleCircum*0.099));
    /*no.12*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.155), canvas.midHeight+(circleCircum*0.034));
    /*no.10*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.07), canvas.midHeight+(circleCircum*0.1425));
    /*no.8*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.07), canvas.midHeight+(circleCircum*0.1425));
    /*no.13*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.155), canvas.midHeight+(circleCircum*0.034));
    /*no.11*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.124), canvas.midHeight-(circleCircum*0.099));
    /*no.9*/ ctx.lineTo(canvas.midWidth, canvas.midHeight-circleRadius);
    ctx.strokeStyle = "#ffdab9";
    ctx.stroke();
    //hexagram
    /*no.8*/ ctx.moveTo(canvas.midWidth-(circleCircum*0.07), canvas.midHeight+(circleCircum*0.1425));
    /*no.14*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.124), canvas.midHeight-(circleCircum*0.099));
    /*no.13*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.155), canvas.midHeight+(circleCircum*0.034));
    /*no.12*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.155), canvas.midHeight+(circleCircum*0.034));
    /*no.11*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.124), canvas.midHeight-(circleCircum*0.099));
    /*no.10*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.07), canvas.midHeight+(circleCircum*0.1425));
    /*no.9*/ ctx.lineTo(canvas.midWidth, canvas.midHeight-circleRadius);
    /*no.8*/ ctx.moveTo(canvas.midWidth-(circleCircum*0.07), canvas.midHeight+(circleCircum*0.1425));
    ctx.stroke();
    //small circles
    ctx.beginPath();
    /*no.10*/ ctx.arc(canvas.midWidth+(circleCircum*0.07), canvas.midHeight+(circleCircum*0.1425), canvas.width*0.05, 0, 2*Math.PI);
    ctx.fillStyle = "#84dcc6 ";
    ctx.fill();
    ctx.beginPath();
    /*no.8*/ ctx.arc(canvas.midWidth-(circleCircum*0.07), canvas.midHeight+(circleCircum*0.1425), canvas.width*0.05, 0, 2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    /*no.9*/ ctx.arc(canvas.midWidth, canvas.midHeight-circleRadius, canvas.width*0.05, 0, 2*Math.PI);
    ctx.fill();

    //right triangle
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth+circleRadius, canvas.midHeight-circleRadius);
    ctx.lineTo(canvas.midWidth-(circleRadius*0.7), canvas.midHeight);
    ctx.lineTo(canvas.midWidth+circleRadius, canvas.midHeight+circleRadius);
    //ctx.strokeStyle = "green";
    ctx.stroke();
    //heptagon
    ctx.beginPath();
    /*no.23*/ ctx.moveTo(canvas.midWidth+circleRadius, canvas.midHeight);
    /*no.25*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.099), canvas.midHeight+(circleCircum*0.124));
    /*no.27*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.034), canvas.midHeight+(circleCircum*0.155));
    /*no.22*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.1425), canvas.midHeight+(circleCircum*0.07));
    /*no.24*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.1425), canvas.midHeight-(circleCircum*0.07));
    /*no.26*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.034), canvas.midHeight-(circleCircum*0.155));
    /*no.28*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.099), canvas.midHeight-(circleCircum*0.124));
    /*no.23*/ ctx.lineTo(canvas.midWidth+circleRadius, canvas.midHeight);
    ctx.stroke();
    //hexagon
    /*no.22*/ ctx.moveTo(canvas.midWidth-(circleCircum*0.1425), canvas.midHeight+(circleCircum*0.07));
    /*no.28*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.099), canvas.midHeight-(circleCircum*0.124));
    /*no.27*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.034), canvas.midHeight+(circleCircum*0.155));
    /*no.26*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.034), canvas.midHeight-(circleCircum*0.155));
    /*no.25*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.099), canvas.midHeight+(circleCircum*0.124));
    /*no.24*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.1425), canvas.midHeight-(circleCircum*0.07));
    /*no.23*/ ctx.lineTo(canvas.midWidth+circleRadius, canvas.midHeight);
    /*no.22*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.1425), canvas.midHeight+(circleCircum*0.07));
    ctx.stroke();
    //small circles
    ctx.beginPath();
    /*no.22*/ ctx.arc(canvas.midWidth-(circleCircum*0.1425), canvas.midHeight+(circleCircum*0.07), canvas.width*0.05, 0, 2*Math.PI);
    ctx.fillStyle = "#84dcc6 ";
    ctx.fill();
    ctx.beginPath();
    /*no.23*/ ctx.arc(canvas.midWidth+circleRadius, canvas.midHeight, canvas.width*0.05, 0, 2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    /*no.24*/ ctx.arc(canvas.midWidth-(circleCircum*0.1425), canvas.midHeight-(circleCircum*0.07), canvas.width*0.05, 0, 2*Math.PI);
    ctx.fill();

    //left triangle
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth+circleRadius, canvas.midHeight+circleRadius);
    ctx.lineTo(canvas.midWidth, (canvas.midHeight-(circleRadius*0.7)));
    ctx.lineTo(canvas.midWidth-circleRadius, canvas.midHeight+circleRadius);
    //ctx.strokeStyle = "blue";
    ctx.stroke();
    //heptagon
    ctx.beginPath();
    /*no.16*/ ctx.moveTo(canvas.midWidth-circleRadius, canvas.midHeight);
    /*no.18*/ctx.lineTo(canvas.midWidth-(circleCircum*0.099), canvas.midHeight-(circleCircum*0.124));
    /*no.20*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.034), canvas.midHeight-(circleCircum*0.155));
    /*no.15*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.1425), canvas.midHeight-(circleCircum*0.07));
    /*no.17*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.1425), canvas.midHeight+(circleCircum*0.07));
    /*no.19*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.034), canvas.midHeight+(circleCircum*0.155));
    /*no.21*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.099), canvas.midHeight+(circleCircum*0.124));
    /*no.16*/ ctx.lineTo(canvas.midWidth-circleRadius, canvas.midHeight);
    ctx.stroke();
    //heptagram
    /*no.15*/ ctx.moveTo(canvas.midWidth+(circleCircum*0.1425), canvas.midHeight-(circleCircum*0.07));
    /*no.21*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.099), canvas.midHeight+(circleCircum*0.124));
    /*no.20*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.034), canvas.midHeight-(circleCircum*0.155));
    /*no.19*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.034), canvas.midHeight+(circleCircum*0.155));
    /*no.18*/ctx.lineTo(canvas.midWidth-(circleCircum*0.099), canvas.midHeight-(circleCircum*0.124));
    /*no.17*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.1425), canvas.midHeight+(circleCircum*0.07));
    /*no.16*/ ctx.lineTo(canvas.midWidth-circleRadius, canvas.midHeight);
    /*no.15*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.1425), canvas.midHeight-(circleCircum*0.07));
    ctx.stroke();
     //small circles
     ctx.beginPath();
     
     /*no.15*/ ctx.arc(canvas.midWidth+(circleCircum*0.1425), canvas.midHeight-(circleCircum*0.07), canvas.width*0.05, 0, 2*Math.PI);
     ctx.fillStyle = "#84dcc6 ";
     ctx.fill();
     ctx.beginPath();
     /*no.17*/ ctx.arc(canvas.midWidth+(circleCircum*0.1425), canvas.midHeight+(circleCircum*0.07), canvas.width*0.05, 0, 2*Math.PI);
     ctx.fill();
     ctx.beginPath();
     /*no.16*/ ctx.arc(canvas.midWidth-circleRadius, canvas.midHeight, canvas.width*0.05, 0, 2*Math.PI);
     ctx.fill();

    //bottom triangle
    ctx.beginPath();
    ctx.moveTo(canvas.midWidth-circleRadius, canvas.midHeight+circleRadius);
    ctx.lineTo(canvas.midWidth+(circleRadius*0.7), canvas.midHeight);
    ctx.lineTo(canvas.midWidth-circleRadius, canvas.midHeight-circleRadius);
    //ctx.strokeStyle = "purple";
    ctx.stroke();
    //heptagon
    ctx.beginPath();
    /*no.7*/ ctx.moveTo(canvas.midWidth, canvas.midHeight+circleRadius);
    /*no.5*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.124), canvas.midHeight+(circleCircum*0.099));
    /*no.3*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.155), canvas.midHeight-(circleCircum*0.034));
    /*no.1*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.07), canvas.midHeight-(circleCircum*0.1425));
    /*no.6*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.07), canvas.midHeight-(circleCircum*0.1425));
    /*no.4*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.155), canvas.midHeight-(circleCircum*0.034));
    /*no.2*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.124), canvas.midHeight+(circleCircum*0.099));
    /*no.7*/ ctx.lineTo(canvas.midWidth, canvas.midHeight+circleRadius);
    ctx.stroke();
    //heptagram
     ctx.beginPath();
    /*no.1*/ ctx.moveTo(canvas.midWidth-(circleCircum*0.07), canvas.midHeight-(circleCircum*0.1425));
    /*no.7*/ ctx.lineTo(canvas.midWidth, canvas.midHeight+circleRadius);
    /*no.6*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.07), canvas.midHeight-(circleCircum*0.1425));
    /*no.5*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.124), canvas.midHeight+(circleCircum*0.099));
    /*no.4*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.155), canvas.midHeight-(circleCircum*0.034));
    /*no.3*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.155), canvas.midHeight-(circleCircum*0.034));
    /*no.2*/ ctx.lineTo(canvas.midWidth+(circleCircum*0.124), canvas.midHeight+(circleCircum*0.099));
    /*no.1*/ ctx.lineTo(canvas.midWidth-(circleCircum*0.07), canvas.midHeight-(circleCircum*0.1425));
    ctx.stroke();
    //small circles
    ctx.beginPath();
    /*no.1*/ ctx.arc(canvas.midWidth-(circleCircum*0.07), canvas.midHeight-(circleCircum*0.1425), canvas.width*0.05, 0, 2*Math.PI);
    ctx.fillStyle = "#84dcc6 ";
    ctx.fill();
    ctx.beginPath();
    /*no.6*/ ctx.arc(canvas.midWidth+(circleCircum*0.07), canvas.midHeight-(circleCircum*0.1425), canvas.width*0.05, 0, 2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    /*no.7*/ ctx.arc(canvas.midWidth, canvas.midHeight+circleRadius, canvas.width*0.05, 0, 2*Math.PI);
    ctx.fill();
   
    
      
    //Guiding circles
    //top 
    /*ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.arc(canvas.midWidth-(circleRadius*0.973), canvas.midHeight-(circleRadius*0.215), canvas.width*0.215, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth+(circleRadius*0.973), canvas.midHeight-(circleRadius*0.215), canvas.width*0.215, 0, 2*Math.PI);
    ctx.stroke();
    //bottom
    ctx.beginPath();
    ctx.arc(canvas.midWidth-(circleRadius*0.784), canvas.midHeight+(circleRadius*0.62), canvas.width*0.215, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.midWidth+(circleRadius*0.784), canvas.midHeight+(circleRadius*0.62), canvas.width*0.215, 0, 2*Math.PI);
    ctx.stroke();*/

  }, []);

  return (
    <canvas ref={canvasRef} />
  );
}

export default Canvas;