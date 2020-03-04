class Laser {
    constructor(canvas, ctx, game) {
        debugger
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.x = this.game.board.player.position.x + 85;
        this.y = this.canvas.height - 100;
        this.speedY = 5;

        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);

    }

    draw() {
        this.ctx.fillRect(this.x, this.y, 10, 50)
    }

    update() {
        this.y -= this.speedY;
    }
}

module.exports = Laser;