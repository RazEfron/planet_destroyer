class Player {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.width = 180; // 110
        this.height = 180; // 110

        this.maxSpeed = 10;
        this.speed = 0

        this.position = {
            x: this.canvas.width / 2 - this.width / 2,
            y: this.canvas.height - this.height + 35
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    draw() {
        let player = new Image();
        player.src = 'src/images/player.png'
        this.ctx.beginPath();
        this.ctx.drawImage(player, this.position.x, this.position.y, this.width, this.height);
        this.ctx.closePath();

    }

    update() {

        this.position.x += this.speed;

        if (this.position.x < -30) {
            this.position.x = -30
        }

        if (this.position.x + this.width > this.canvas.width + 30) {
            this.position.x = this.canvas.width - this.width + 30
        }
    }

    stop() {
        this.speed = 0;
    }
}

module.exports = Player;
