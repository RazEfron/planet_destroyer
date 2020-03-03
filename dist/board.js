Bubble = require('./bubble');
Player = require('../dist/player');

class Board {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.drawGame = this.drawGame.bind(this);
        this.drawBackground = this.drawBackground.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.playerBallColision = this.playerBallColision.bind(this);

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
        this.playerHeight = 180;
        this.playerWidth = 180;
        this.playerX = (canvas.width - this.playerWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.interval = setInterval(this.drawGame, 10)
    }

    drawBackground() {
        debugger
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
        this.bubble.draw(this.bubbleX, this.bubbleY, this.ballRadius)
        this.gravitySpeed += this.gravity;
        this.bubbleX += this.bubbleDX;
        this.bubbleY += this.bubbleDY + this.gravitySpeed;
        let rockbottom = this.canvas.height - this.ballRadius;
        if (this.bubbleY > rockbottom) {
            this.bubbleY = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
        if (this.bubbleX + this.bubbleDX > this.canvas.width - this.ballRadius || this.bubbleX + this.bubbleDX < this.ballRadius) {
            this.bubbleDX = -this.bubbleDX;
        }

        //player
        if (this.rightPressed) {
            this.playerX += 7;
            if (this.playerX + this.playerWidth > this.canvas.width) {
                this.playerX = this.canvas.width - this.playerWidth;
            }
        }
        else if (this.leftPressed) {
            this.playerX -= 7;
            if (this.playerX < 0) {
                this.playerX = 0;
            }
        }
        this.player.draw(this.playerX, this.canvas.height - 132, this.playerWidth, this.playerHeight)
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

    playerBallColision() {
        
    }
}


module.exports = Board;