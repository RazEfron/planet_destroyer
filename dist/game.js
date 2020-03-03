Board = require('../dist/board');


class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx
    }
    
    gameLoop() {
        board = new Board(this.canvas, this.ctx)
        document.addEventListener("keydown", board.keyDownHandler, false);
        document.addEventListener("keyup", board.keyUpHandler, false);
    }

    


}

module.exports = Game;