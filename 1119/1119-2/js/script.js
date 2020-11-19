'use strict';

// ゲームループをしよう

(() => {
  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
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

    }

    draw() {
      console.log(new Date());

    }
  }
  const canvas = document.querySelector("canvas");
  if(typeof canvas.getContext === "undefined") {
    return;
  }


  new Game(canvas);
})();