Board = require('../dist/board');


class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx
        this.lastTime = 0;
        this.board = new Board(this.canvas, this.ctx)
        this.gameLoop = this.gameLoop.bind(this);
    }
    
    gameLoop(timeStamp) {
        let deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;

        this.board.updateGame(deltaTime) 
        this.board.drawGame()

        requestAnimationFrame(this.gameLoop)
    }
    


}

module.exports = Game;