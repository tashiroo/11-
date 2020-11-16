'use strict'

(() => {

  class Maze{
    constructor(canvas) {
      this.ctx = canvas.getContext("2d")
      // 5*5のマスを作る、中の数字が1なら壁０なら通路としておく
      this.date = [
        [1, 1, 1, 1, 1]
        [1, 0, 0, 0, 1]
        [1, 0, 1, 0, 1]
        [1, 0, 0, 0, 1]
        [1, 1, 1, 1, 1]
      ];
    }
    render() {
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {

        }
      }
    }
  }

    const canvas = document.querySelector("canvas");
    if(typeof canvas.getContext === "undifined"){
      return;
    }
    
    const maze = new Maze(canvas);
    Maze.render();
  })();