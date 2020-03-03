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
        this.collision()
        requestAnimationFrame(this.gameLoop)
    }
    
    collision() {
        const { player, bubble } = this.board;
        debugger
        let bubbleBottom = bubble.y + 175;
        let topPlayer = player.position.y + 30;
        leftOfPlayer = player.position.x + 35;
        rightOfPlayer = leftOfPlayer + player.width - 105;
        leftOfBubble = bubble.x + 35;
        rightOfBubble = leftOfBubble + 135
        if (bubbleBottom >= topPlayer) {
            if ((leftOfPlayer >= leftOfBubble && leftOfPlayer <= rightOfBubble) || (rightOfPlayer <= rightOfBubble && rightOfPlayer >= leftOfBubble)) {
                console.log("colision")
            }
        }
    }

}

module.exports = Game;