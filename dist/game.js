Board = require('../dist/board');
InputHandler = require('../dist/input_handle');
Laser = require('../dist/laser');
Bubble = require('./bubble');
Level = require('./levels');

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    LEVELDONE: 4
};

class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameState = GAMESTATE.MENU;
        this.handleInput = new InputHandler(this);
        
        this.start = this.start.bind(this);
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
        this.collision = this.collision.bind(this);
        this.togglePause = this.togglePause.bind(this);
        this.loseLife = this.loseLife.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.shoot = this.shoot.bind(this);
        this.createBubbles = this.createBubbles.bind(this);
        this.explodeBubble = this.explodeBubble.bind(this);
        
        this.lives = [4, 3, 2, 1, 0];
        this.lasers = []
        this.levels = new Level(this)
        this.currentLevel = 1
        this.level = this.levels.setup[this.currentLevel]
        this.createBubbles()
        this.board = new Board(this.canvas, this.ctx, this);

        this.score = 0
    }
    
    start() {
        if (this.gameState === GAMESTATE.MENU) {
            this.gameState = GAMESTATE.RUNNING;
        }

        if (this.gameState === GAMESTATE.GAMEOVER) {
            this.createBubbles()
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
        if (this.gameState === GAMESTATE.LEVELDONE) {

            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgba(0,0,0,1)";
            this.ctx.fill();
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText(`LEVEL ${this.currentLevel}`, this.canvas.width / 2, this.canvas.height / 2);
        }
    }

    update() {
        if (this.gameState === GAMESTATE.PAUSED || 
            this.gameState === GAMESTATE.GAMEOVER ||
            this.gameState === GAMESTATE.MENU ||
            this.gameState === GAMESTATE.LEVELDONE) {
            return;
        } 

        this.collision();
        this.gameOver();
        this.board.updateGame();
    }
    
    collision() {
        const { player } = this.board;
        const playerX = player.position.x + 35;
        const playerY = player.position.y + 65;
        const rightPointPlayerX = playerX + 73;

        this.bubbles.some((bubble, idx) => {
            let radius = bubble.width / 4.5;
            const bubbleCenterX = bubble.bubbleX + radius
            const bubbleCenterY = bubble.bubbleY + radius
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
                return true
            }
            if (bubble.size === 1 && bubbleCenterX >= playerX && bubbleCenterX <= rightPointPlayerX && bubbleCenterY >= playerY) {
                this.loseLife()
                return true
            }
            this.lasers.forEach(shot => {
                //cheking laser and bubble collision
                const laserPointX = shot.x + 13
                const laserPointY = shot.y + 7
                const distLaserX = laserPointX - bubbleCenterX;
                const distLaserY = laserPointY - bubbleCenterY;
                const distLaserDownY = laserPointY + 70 - bubbleCenterY;
                const distLaserMidY = laserPointY + 35 - bubbleCenterY;
                const distanceLaserUpperPoint = Math.hypot(distLaserX, distLaserY)
                const distanceLaserDownPoint = Math.hypot(distLaserX, distLaserDownY)
                const distanceLaserMidPoint = Math.hypot(distLaserX, distLaserMidY)
                
                if (distanceLaserUpperPoint <= radius || distanceLaserDownPoint <= radius || distanceLaserMidPoint <= radius) {
                    
                    console.log("collision")
                    this.explodeBubble(bubble, idx)
                }
            })
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
        this.restartLevel();
        this.createBubbles();
        this.board = new Board(this.canvas, this.ctx, this);
        this.gameState = GAMESTATE.RUNNING;
    }

    restartLevel(){
        this.levels = new Level(this);
        this.level = this.levels.setup[this.currentLevel]
    }

    gameOver() {
        if (this.lives.length === 0) {
            debugger
            this.gameState = GAMESTATE.GAMEOVER;
            this.currentLevel = 1;
            this.restartLevel()
        }
    }

    shoot() {
        if (this.gameState === GAMESTATE.RUNNING) {
                this.lasers.push(new Laser(this.canvas, this.ctx, this))
        }
    }

    createBubbles() {
        this.bubbles = this.level.map(bubble => {
            if (bubble.size === 5) {
                return new Bubble(this.canvas, this.ctx, 5, {
                    x: bubble.x,
                    y: bubble.y,
                    height: 300, 
                    width: 300, 
                    bubbleDX: bubble.bubbleDX,
                    bubbleDY: bubble.bubbleDY,
                    gravity: 0.1,
                    gravitySpeed: 0,
                    bounce: 1.005
                })
            }   else if (bubble.size === 4) {
                return new Bubble(this.canvas, this.ctx, 4, {
                    x: bubble.x,
                    y: bubble.y,
                    height: 250,
                    width: 250,
                    bubbleDX: bubble.bubbleDX,
                    bubbleDY: bubble.bubbleDY,
                    gravity: 0.1,
                    gravitySpeed: 0,
                    bounce: 1.005
                })
            } else if (bubble.size === 3) {
                return new Bubble(this.canvas, this.ctx, 3, {
                    x: bubble.x,
                    y: bubble.y,
                    height: 200,
                    width: 200,
                    bubbleDX: bubble.bubbleDX,
                    bubbleDY: bubble.bubbleDY,
                    gravity: 0.1,
                    gravitySpeed: 0,
                    bounce: 1.005
                })
            } else if (bubble.size === 2) {
                return new Bubble(this.canvas, this.ctx, 2, {
                    x: bubble.x,
                    y: bubble.y,
                    height: 150,
                    width: 150,
                    bubbleDX: bubble.bubbleDX,
                    bubbleDY: bubble.bubbleDY,
                    gravity: 0.1,
                    gravitySpeed: 0,
                    bounce: 1.005
                })
            } else if (bubble.size === 1) {
                return new Bubble(this.canvas, this.ctx, 1, {
                    x: bubble.x,
                    y: bubble.y,
                    height: 75,
                    width: 75,
                    bubbleDX: bubble.bubbleDX,
                    bubbleDY: bubble.bubbleDY,
                    gravity: 0.1,
                    gravitySpeed: 0,
                    bounce: 1.005
                })
            }

        })
    }

    explodeBubble(bubble, idx) {
        this.score += 250;
        this.lasers = [];
        this.level.forEach((levelBubble, idx1) => {
            this.bubbles.forEach((bubble, idx2) => {
                if (idx1 === idx2) {
                    levelBubble.x = bubble.x;
                    levelBubble.y = bubble.y;
                    levelBubble.bubbleDX = bubble.bubbleDX;
                    levelBubble.bubbleDY = bubble.bubbleDY;
                }
            })
        })
        this.level.splice(idx, 1);
        
        if (bubble.size !== 1) {
            this.level.push({ size: bubble.size - 1, x: bubble.x, y: bubble.y, bubbleDX: bubble.bubbleDX, bubbleDY: bubble.bubbleDY });
            this.level.push({ size: bubble.size - 1, x: bubble.x, y: bubble.y, bubbleDX: -bubble.bubbleDX, bubbleDY: -bubble.bubbleDY});
        }
        if (this.level.length === 0) {
            this.levelCleared();
        }
        this.createBubbles();
    }
    
    levelCleared() {
        this.currentLevel += 1;
        this.restartLevel();
        this.gameState = GAMESTATE.LEVELDONE;
        setTimeout(() => { this.gameState = GAMESTATE.RUNNING }, 1000);
    }
}

module.exports = Game;