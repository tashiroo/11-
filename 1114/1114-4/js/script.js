'use strict';
// 時計の盤面を書いていく 太いメモリ
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
        // ６の倍数の時に以下のコードを適応させる
        if(angle % 30 === 0){
          // メモリの線を太くする
          ctx.lineWidth =2;
          // 前のメモリより長い線をひく
          ctx.lineTo(0, -this.r +10);
          ctx.font ="13px Arial";
          // 数字をメモリの位置に合わせる
          ctx.textAlign ="center";
          // 盤面に数字を表示させる 半径より25px
          ctx.fillText(angle /30 || 12, 0, -this.r +25);

        }else {
          ctx.lineTo(0,-this.r + 5);
        }

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