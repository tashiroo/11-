'use strict';
// 時計の盤面を書いていく
{
  class Clock {
    constructor(){
      this.r =100;

    }
    drawFace() {
      const canvas = document.querySelector("canvas");
      if(typeof canvas.getContext === "undefined") {
        return;
      }
      const ctx = canvas.getContext("2d");

      const width = canvas.width;
      const height = canvas.height;

      for(let angle = 0 ;angle < 360;angle += 6){
        ctx.save();
        ctx.translate(width /2,height /2);
        ctx.rotate(Math.PI /180 * angle);


        ctx.beginPath();
        ctx.moveTo(0,-this.r);
        ctx.lineTo(0,-this.r + 5);

        ctx.stroke();

        ctx.restore();
      }
    }
    run(){
      this.drawFace();
    }

  }

  const clock = new Clock();
  clock.run();
}