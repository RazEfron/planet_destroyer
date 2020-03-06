class Laser {
    constructor(canvas, ctx, game) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.x = this.game.board.player.position.x + 75;
        this.y = this.canvas.height - 100;
        this.speedY = 10;

        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);

        this.sound = new sound("/Users/razefron/Desktop/bubble_trouble/src/sounds/burp.mp3");

    }

    draw() {
        let laser = new Image();
        laser.src = 'src/images/laser.png'
        this.ctx.beginPath();
        this.ctx.drawImage(laser, this.x, this.y, 30, 90);
        this.ctx.closePath();
    }

    update() {
        this.y -= this.speedY;
    }
}

module.exports = Laser;