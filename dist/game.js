Board = require('../dist/board');
InputHandler = require('../dist/input_handle');
Laser = require('../dist/laser');
Bubble = require('./bubble');

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
        
        this.start = this.start.bind(this);
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.collision = this.collision.bind(this);
        this.togglePause = this.togglePause.bind(this);
        this.loseLife = this.loseLife.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.shoot = this.shoot.bind(this);
        
        this.lives = [0, 1, 2, 3, 4];
        this.lasers = []
        this.bubbles = [{size: 4}]
    }
    
    start() {
        if (this.gameState === GAMESTATE.MENU) {
            this.gameState = GAMESTATE.RUNNING;
        }

        if (this.gameState === GAMESTATE.GAMEOVER) {
            this.lives = [0, 1, 2, 3, 4];
            this.board = new Board(this.canvas, this.ctx, this);
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
            
            return  ;
        } 
        this.count += 1;
        this.collision();
        this.gameOver();
        this.board.updateGame();
    }
    
    collision() {
        const { player, bubble } = this.board;
        const playerX = player.position.x + 35;
        const playerY = player.position.y + 65;
        const rightPointPlayerX = playerX + 115;
        //bubble positions
        const bubbleX = bubble.x + 40;
        const bubbleY = bubble.y + 40;
        const radius = 67;
        const bubbleCenterX = bubbleX + radius
        const bubbleCenterY = bubbleY + radius
        //cheking left of player
        const distLeftX = playerX - bubbleCenterX;
        const distLeftY = playerY - bubbleCenterY;
        const distanceLeft = Math.hypot(distLeftX, distLeftY)
        //cheking right of player
        const distRightX = rightPointPlayerX - bubbleCenterX;
        const distRightY = playerY - bubbleCenterY;
        const distanceRight = Math.hypot(distRightX, distRightY)
        //cheking middle of player
        const distMidX = (playerX + 67.5) - bubbleCenterX;
        const distMidY = playerY - bubbleCenterY;
        const distanceMiddle = Math.hypot(distMidX, distMidY)
        if (distanceLeft <= radius || distanceRight <= radius || distanceMiddle <= radius) {
            this.loseLife()
        }
        this.lasers.forEach(shot => {
            // debugger
            //cheking laser and bubble collision
            const laserPointX = shot.x + 13
            const laserPointY = shot.y + 7
            const distLaserX = laserPointX - bubbleCenterX;
            const distLaserY = laserPointY - bubbleCenterY;
            const distanceLaserPoint = Math.hypot(distLaserX, distLaserY)

            if (distanceLaserPoint <= radius) {
                debugger
            }
        })
    }

    togglePause() {
        if (this.gameState === GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        } else if (this.gameState === GAMESTATE.RUNNING) {
            this.gameState = GAMESTATE.PAUSED;
        }
    }

    loseLife() {
        this.lives.pop();
        this.board = new Board(this.canvas, this.ctx, this);
        this.gameState = GAMESTATE.RUNNING;
    }

    gameOver() {
        if (this.lives.length === 0) {
            this.gameState = GAMESTATE.GAMEOVER
        }
    }

    shoot() {
        if (this.gameState === GAMESTATE.RUNNING) {
            this.lasers.push(new Laser(this.canvas, this.ctx, this))
        }
    }

}

module.exports = Game;