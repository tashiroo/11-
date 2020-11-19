'use strict';

// ballクラスを作ろう

(() => {
  class Ball {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = 30;
      this.y = 30;
      this.r =10;
    }

    update() {

    }

    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#fdfdfd";
      this.ctx.arc(this.x,this.y,this.r,0,2 * Math.PI);
      this.ctx.fill();

    }
  }
  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.ball = new Ball(this.canvas);
      this.loop();
    }

    loop(){
      this.update();
      this.draw();
    //requestAnimationFrameの中でthisを使うとundefindになってしまうのでアロー関数を使う 
      requestAnimationFrame(() => {
        this.loop()
      });
    }

    update() {
      this.ball.update()

    }

    draw() {
      this.ball.draw();

    }
  }
  const canvas = document.querySelector("canvas");
  if(typeof canvas.getContext === "undefined") {
    return;
  }


  new Game(canvas);
})();