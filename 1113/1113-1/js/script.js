'use strict'

(() => {
  class Icon{constructor(canvas){

  }
  run(){

  }

  }
  const canvas = document.querySelector("canvas");
  if(typeof canvas.getContext === "undefined") {
    return;
  }

  const icon = new Icon(canvas);
  icon.run();
})();