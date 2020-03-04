Board = require('../dist/board');
InputHandler = require('../dist/input_handle');

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx
        this.lastTime = 0;
        this.board = new Board(this.canvas, this.ctx)
        this.gameLoop = this.gameLoop.bind(this);
        this.togglePause = this.togglePause.bind(this);
        this.gameState = 1;
    }

    draw() {
        this.board.drawGame();
    }

    update() {
        this.board.updateGame(deltaTime);
    }
    
    gameLoop(timeStamp) {
        let deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        this.collision();
        new InputHandler(this.board.player, this);
        requestAnimationFrame(this.gameLoop);
    }
    
    collision() {
        const { player, bubble } = this.board;
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

    togglePause() {
        if (this.gameState === GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING
        } else {
            this.gameState = GAMESTATE.PAUSED
        }
    }

}

module.exports = Game;