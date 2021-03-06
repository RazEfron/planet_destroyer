Board = require('../dist/board');
InputHandler = require('../dist/input_handle');
Laser = require('../dist/laser');
Bubble = require('./bubble');
Level = require('./levels');
Gift = require('./gifts');
Sound = require('./sound');
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
        
        this.lives = [1,1,1,1,1];
        this.lasers = []
        this.levels = new Level(this)
        this.currentLevel = 1;
        this.level = this.levels.setup[this.currentLevel]
        this.createBubbles()
        this.board = new Board(this.canvas, this.ctx, this);

        this.score = 0;
        this.gifts = []
        localStorage.setItem("highscore", 0);
        this.unmute = true;
    }
    
    start() {
        if (this.gameState === GAMESTATE.MENU) {
            this.gameState = GAMESTATE.RUNNING;
        }

        if (this.gameState === GAMESTATE.GAMEOVER) {
            this.createBubbles()
            this.lives = [1,1,1,1,1];
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
            this.ctx.fillText("Press Enter to start a new game", this.canvas.width / 2, this.canvas.height / 2);
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
            this.ctx.fillText("GAME OVER", this.canvas.width / 2, 160);
            this.ctx.fillText("Press Enter to start a new game", this.canvas.width / 2, this.canvas.height / 2 + 100);
            this.ctx.font = "30px Arial";
            this.ctx.textAlign = "center";
            let highScore = localStorage.getItem("highscore");
            this.ctx.fillText(`High Score ${highScore}`, this.canvas.width / 2, this.canvas.height / 2);
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
        this.gifts.forEach((gift, idx) => {
            if (gift.delete) {
                this.gifts.splice(idx, 1)
            }
        })
    }
    
    collision() {
        const { player } = this.board;
        const playerX = player.position.x + 35;
        const playerY = player.position.y + 65;
        const rightPointPlayerX = playerX + 73;
        let sound

        this.gifts.forEach(gift => {
            if (gift.y + gift.height / 2 >= playerY) {
                if ((gift.x >= playerX && gift.x <= rightPointPlayerX) || (gift.x + gift.width >= playerX && gift.x + gift.width <= rightPointPlayerX)) {
                    gift.delete = true;
                    debugger
                    if (gift.randomNumber >= 980 && this.lives.length < 5) {//lives
                        sound = new Sound("src/sounds/heart.mp3");
                        if (this.unmute) sound.play();
                        this.lives.push(1)
                    } else if (gift.randomNumber >= 850) {//coinBag
                        sound = new Sound("src/sounds/coinSound.mp3");
                       if (this.unmute) sound.play();
                        this.score += 750
                    } else if (gift.randomNumber >= 650) {// coinStack
                        sound = new Sound("src/sounds/coinSound.mp3");
                       if (this.unmute) sound.play();
                        this.score += 500
                    }
                    else if (gift.randomNumber >= 450){// goldCoin
                        sound = new Sound("src/sounds/coinSound.mp3");
                       if (this.unmute) sound.play();
                        this.score += 100
                    }
                }
            }
        })

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
            this.lasers.forEach((shot, laserIdx) => {
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
                    this.explodeBubble(bubble, idx, laserIdx)
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
        let sound = new Sound("src/sounds/lifeLostSound.mp3");
       if (this.unmute) sound.play();
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
            let sound = new Sound("src/sounds/gameOverSound.mp3");
           if (this.unmute) sound.play();
            this.gameState = GAMESTATE.GAMEOVER;
            this.currentLevel = 1;
            this.lives = [1,1,1,1,1]
            let storagedHighScore = localStorage.getItem("highscore");
            // debugger
            if (this.score > parseInt(storagedHighScore)) {
                localStorage.setItem("highscore", this.score);
            }
            this.score = 0;
            this.restartLevel();
        }
    }

    shoot() {
        if (this.gameState === GAMESTATE.RUNNING) {
            let laser = new Laser(this.canvas, this.ctx, this)
            // laser.sound.play()
                this.lasers.push(laser)
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

    explodeBubble(bubble, bubbleIdx, laserIdx) {
        let sound = new Sound("src/sounds/explosionSound.mp3");
       if (this.unmute) sound.play();
        this.score += 250;
        // this.lasers = [];
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
        this.level.splice(bubbleIdx, 1);
        
        if (bubble.size !== 1) {
            this.level.push({ size: bubble.size - 1, x: bubble.x, y: bubble.y, bubbleDX: bubble.bubbleDX + 0.5, bubbleDY: bubble.bubbleDY });
            this.level.push({ size: bubble.size - 1, x: bubble.x, y: bubble.y, bubbleDX: -bubble.bubbleDX - 0.5, bubbleDY: -bubble.bubbleDY});
        }
        if (this.level.length === 0) {
            this.levelCleared();
        }
        this.dropGift(bubble.x, bubble.y)
        this.createBubbles();
        this.lasers.splice(laserIdx, 1);
    }
    
    levelCleared() {
        this.currentLevel += 1;
        this.restartLevel();
        this.gameState = GAMESTATE.LEVELDONE;
        setTimeout(() => { this.gameState = GAMESTATE.RUNNING }, 1000);
    }

    dropGift(x, y) {
        this.gifts.push(new Gift(x, y, this))
        
    }
}

module.exports = Game;