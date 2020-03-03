Bubble = require('./bubble');
Player = require('../dist/player');
InputHandler = require('../dist/input_handle');

class Board {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.drawGame = this.drawGame.bind(this);
        this.drawBackground = this.drawBackground.bind(this);

        //bubble
        this.bubble = new Bubble(canvas, ctx)
        this.bubbleX = canvas.width / 2;
        this.bubbleY = 50;
        this.bubbleDX = 5;
        this.bubbleDY = 0;
        this.ballRadius = 40;
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        this.bounce = 1.001;
        

        //player
        this.player = new Player(canvas, ctx)
        this.inputHandler = new InputHandler(this.player)
    }

    drawBackground() {
        let background = new Image();
        background.src = 'src/images/background_level_one.jpg'
        this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
    }

    drawGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //background
        this.drawBackground()
        //bubble
        // this.bubble.draw(this.bubbleX, this.bubbleY, this.ballRadius)
        // this.gravitySpeed += this.gravity;
        // this.bubbleX += this.bubbleDX;
        // this.bubbleY += this.bubbleDY + this.gravitySpeed;
        // let rockbottom = this.canvas.height - this.ballRadius;
        // if (this.bubbleY > rockbottom) {
        //     this.bubbleY = rockbottom;
        //     this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        // }
        // if (this.bubbleX + this.bubbleDX > this.canvas.width - this.ballRadius || this.bubbleX + this.bubbleDX < this.ballRadius) {
        //     this.bubbleDX = -this.bubbleDX;
        // }

        this.player.draw()
    }

    updateGame(deltaTime) {
        this.player.update(deltaTime)
    }

    playerBallColision() {
        
    }
}


module.exports = Board;