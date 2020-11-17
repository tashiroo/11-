'use strict';

(() => {
  class Puzzle {
    constructor(canvas) {
     this.canvas = canvas;
     this.ctx = this.canvas.getContext("2d")
      
    }
  }

  const canvas = document.querySelector("canvas");
  if(typeof canvas.getContext === "undifined" ) {
    return;
  }

  new Puzzle(canvas);
})();