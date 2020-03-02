class Player {
    constructor(paddleHeight, paddleWidth, paddleX, canvas) {
        this.paddleHeight = paddleHeight;
        this.paddleWidth = paddleWidth;
        this.paddleX = paddleX;
        this.canvas = canvas;
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
}

    drawPlayer(ctx) {
        ctx.beginPath();
        ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

module.exports = Player;
