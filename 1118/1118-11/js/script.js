'use strict';
// マジックナンバーを定数にしよう

(() => {
  class PuzzleRenderer {
    constructor(puzzle,canvas) {
      this.puzzle = puzzle;
      this.canvas = canvas;
      
      this.ctx = this.canvas.getContext("2d");
      this.TILE_SIZE = 70;
      this.img = document.createElement("img");
      this.img.src = "img/animal1.png";
      this.img.addEventListener("load", () => {
        this.render();
      });
      this.canvas.addEventListener("click", e => {
        if(this.puzzle.getCompletedStatus() === true){
          return;
        }
        const rect = this.canvas.getBoundingClientRect();
        const col = Math.floor((e.clientX - rect.left) / this.TILE_SIZE);
        const row = Math.floor((e.clientY - rect.top) / this.TILE_SIZE);
        this.puzzle.swapTiles(col,row);
        this.render();
        
        if(this.puzzle.isComplete() === true){
          this.puzzle.setCompletedStatus(true);
          this.renderGameClear();
        }
      });
    }
      renderGameClear(){
        this.ctx.fillStyle = "rgba(0,0,0,0.4)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = "28px Arial";
        this.ctx.fillStyle ="#ffffff"
        this.ctx.fillText("GAME CLEAR!!", 40,150);
      }
  
      render () {
        for (let row = 0; row < this.puzzle.getBoardSize(); row++) {
          for (let col =0; col < this.puzzle.getBoardSize(); col++) {
            this.renderTile(this.puzzle.getTile(row,col),col ,row);
          }
        }
      }
  
      renderTile(n,col,row) {
        if(n === this.puzzle.getBlankIndex()) {
          this.ctx.fillStyle = "#eeeeee";
          this.ctx.fillRect(col * this.TILE_SIZE, row * this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE);
        } else {

          this.ctx.drawImage(
            this.img,
            (n % this.puzzle.getBoardSize()) * this.TILE_SIZE,Math.floor(n /this.puzzle.getBoardSize()) * this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE,
            col * this.TILE_SIZE, row * this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE
            );
          }
      }
  }


  class Puzzle {
    constructor(level) {
     this.level = level;
     this.tiles = [
       [0, 1, 2, 3],
       [4, 5, 6, 7],
       [8, 9, 10, 11],
       [12, 13, 14, 15],
      ];
      this.UDLR = [
        [0,-1],
        [0,1],
        [-1,0],
        [1,0],
      ];
      this.isCompleted = false;
      this.BOARD_SIZE = this.tiles.length;
      this.BLANK_INDEX = this.BOARD_SIZE ** 2 -1;
            do {
              this.shuffle(this.level);
            } while (this.isComplete() === true);
          }
      getBoardSize(){
          return  this.BOARD_SIZE;
      }

      getBlankIndex(){
          return this.BLANK_INDEX;
      }

    getCompletedStatus() {
      return this.isCompleted;
    }
    setCompletedStatus(value) {
      this.isCompleted = value;
    }

    getTile(row,col) {
      return this.tiles[row][col];
    }

    shuffle(n) {
      let blankCol = 3;
      let blankRow = 3;

      for(let i = 0; i< n ; i++) {
        let destCol;
        let destRow;
        do{
          const dir = Math.floor(Math.random() * 4);
          destCol = blankCol + this.UDLR[dir][0];
          destRow = blankRow + this.UDLR[dir][1];

            }while(this.isOutside(destCol,destRow) === true);
              [this.tiles[blankRow][blankCol],
              this.tiles[destRow][destCol],
            ] = [
              this.tiles[destRow][destCol],
                this.tiles[blankRow][blankCol],
            ];
            [blankCol,blankRow] = [destCol,destRow];
      }
    }

    swapTiles(col,row) {
      if(this.tiles[row][col] === 15){
        return;
      }

      for(let i = 0; i < 4; i++) {
        const destCol = col + this.UDLR[i][0];
        const destRow = row + this.UDLR[i][1];

        if (
          this.isOutside(destCol,destRow) === true
        ) {
          continue;
          }

        if(this.tiles[destRow][destCol] === 15) {
          [this.tiles[row][col],
        this.tiles[destRow][destCol],
          ] = [
            this.tiles[destRow][destCol],
            this.tiles[row][col],
          ];
          break;
        }
      }
    }
    isOutside(destCol,destRow){
      return(
        destCol < 0 || destCol > 3 ||
        destRow < 0 || destRow > 3);
    }

    isComplete() {
      let i = 0;
      for (let row = 0;row < 4;row++) {
        for (let col = 0;col < 4; col++ ) {
            if(this.tiles[row][col] !== i++) {
              return false;
            }
        }
      }
      return true;
    }

    
  }

  const canvas = document.querySelector("canvas");
  if(typeof canvas.getContext === "undefined" ) {
    return;
  }

  new PuzzleRenderer(new Puzzle(2) ,canvas);
})();