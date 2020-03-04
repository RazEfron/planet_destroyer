Board = require('../dist/board');
InputHandler = require('../dist/input_handle');
Laser = require('../dist/laser');

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameState = GAMESTATE.MENU;
        this.board = new Board(this.canvas, this.ctx, this);
        this.handleInput = new InputHandler(this);
        this.lives = [0, 1, 2, 3, 4];

        this.start = this.start.bind(this);
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.collision = this.collision.bind(this);
        this.togglePause = this.togglePause.bind(this);
        this.loseLife = this.loseLife.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.shoot = this.shoot.bind(this);

        this.shots = []
    }
    
    start() {
        if (this.gameState === GAMESTATE.MENU) {
            this.gameState = GAMESTATE.RUNNING;
        }

        if (this.gameState === GAMESTATE.GAMEOVER) {
            this.lives = [0, 1, 2, 3, 4];
            this.board = new Board(this.canvas, this.ctx, this);
            // this.handleInput.player = this.board.player;
            // this.handleInput = null;
            // this.handleInput = new InputHandler(this.board.player, this);
            this.gameState = GAMESTATE.RUNNING;
        }
        
    }

    draw() {
        this.board.drawGame();
        if (this.gameState === GAMESTATE.MENU) {
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            this.ctx.fill();
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Press N to start a new game", this.canvas.width / 2, this.canvas.height / 2);
        }
        if (this.gameState === GAMESTATE.PAUSED) {
            debugger
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            this.ctx.fill();
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Paused", this.canvas.width / 2, this.canvas.height / 2);
        }
        if (this.gameState === GAMESTATE.GAMEOVER) {
            
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgba(0,0,0,1)";
            this.ctx.fill();
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("GAME OVER", this.canvas.width / 2, this.canvas.height / 2);
            this.ctx.fillText("Press N to start a new game", this.canvas.width / 2, this.canvas.height / 2 + 100);
        }
    }

    update() {
        if (this.gameState === GAMESTATE.PAUSED || 
            this.gameState === GAMESTATE.GAMEOVER ||
            this.gameState === GAMESTATE.MENU) {
            debugger
            return  ;
        } 
        this.count += 1;
        this.collision();
        this.gameOver();
        this.board.updateGame();
    }
    
    collision() {
        const { player, bubble } = this.board;
        let bubbleBottom = bubble.y + 145;
        let topPlayer = player.position.y + 30;
        leftOfPlayer = player.position.x + 35;
        rightOfPlayer = leftOfPlayer + player.width - 105;
        leftOfBubble = bubble.x + 35;
        rightOfBubble = leftOfBubble + 135;
        if (bubbleBottom >= topPlayer) {
            if ((leftOfPlayer >= leftOfBubble && leftOfPlayer <= rightOfBubble) || (rightOfPlayer <= rightOfBubble && rightOfPlayer >= leftOfBubble)) {
                debugger
                this.loseLife();
            }
        }
    }

    togglePause() {
        debugger;
        if (this.gameState === GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        } else if (this.gameState === GAMESTATE.RUNNING) {
            this.gameState = GAMESTATE.PAUSED;
        }
    }

    loseLife() {
        this.lives.pop();
        this.board = new Board(this.canvas, this.ctx, this);
        // this.handleInput.player = this.board.player;
        // this.handleInput = null;
        // this.handleInput = new InputHandler(this.board.player, this);
        this.gameState = GAMESTATE.RUNNING;
    }

    gameOver() {
        if (this.lives.length === 0) {
            this.gameState = GAMESTATE.GAMEOVER
        }
    }

    shoot() {
        if (this.gameState === GAMESTATE.RUNNING) {
            this.shots.push(new Laser(this.canvas, this.ctx, this))
        }
    }

    // stopShooting() {
    //     this.shooting = false;
    // }
}

module.exports = Game;