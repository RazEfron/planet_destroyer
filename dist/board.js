Bubble = require('./bubble');
Player = require('../dist/player');

class Board {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.draw = this.draw.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);

        //bubble
        this.bubble = new Bubble(canvas, ctx)
        this.bubbleX = canvas.width / 2;
        this.bubbleY = canvas.height - 30;
        this.bubbleDX = 2;
        this.bubbleDY = -2;
        this.ballRadius = 10;

        //player
        this.player = new Player(canvas, ctx)
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - this.paddleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;

        this.interval = setInterval(this.draw, 10)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //bubble
        this.bubble.draw(this.bubbleX, this.bubbleY, this.ballRadius)
        this.bubbleX += this.bubbleDX
        this.bubbleY += this.bubbleDY
        if (this.bubbleX + this.bubbleDX > this.canvas.width - this.ballRadius || this.bubbleX + this.bubbleDX < this.ballRadius) {
            this.bubbleDX = -this.bubbleDX;
        }
        if (this.bubbleY + this.bubbleDY > this.canvas.height - this.ballRadius || this.bubbleY + this.bubbleDY < this.ballRadius) {
            this.bubbleDY = -this.bubbleDY;
        }

        // this.gravity = 0.6;
        // this.gravitySpeed = 0;
        // this.bounce = 1;
        // this.newPos = function () {
        //     this.gravitySpeed += this.gravity;
        //     this.x += this.speedX;
        //     this.y += this.speedY + this.gravitySpeed;
        //     this.hitBottom();
        // }
        // this.hitBottom = function () {
        //     var rockbottom = myGameArea.canvas.height - this.height;
        //     if (this.y > rockbottom) {
        //         this.y = rockbottom;
        //         this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        //     }



        //player
        if (this.rightPressed) {
            this.paddleX += 7;
            if (this.paddleX + this.paddleWidth > this.canvas.width) {
                this.paddleX = this.canvas.width - this.paddleWidth;
            }
        }
        else if (this.leftPressed) {
            this.paddleX -= 7;
            if (this.paddleX < 0) {
                this.paddleX = 0;
            }
        }
        this.player.draw(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight)
    }

    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
}

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
}
}


module.exports = Board;