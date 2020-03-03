class Player {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw(x, y, width, height) {
        let player = new Image();
        player.src = 'src/images/player.png'
            this.ctx.drawImage(player, x, y, width, height);
            this.ctx.beginPath();
    }
}

module.exports = Player;
