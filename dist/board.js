Bubble = require('./bubble');
Player = require('../dist/player');
Laser = require('../dist/laser');

class Board {
    constructor(canvas, ctx, game) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.drawGame = this.drawGame.bind(this);
        this.drawBackground = this.drawBackground.bind(this);

        //bubble
        // this.bubble = new Bubble(canvas, ctx, {

        // });
        
        //player
        this.player = new Player(canvas, ctx);
    }

    drawBackground() {
        let background = new Image();
        background.src = `src/images/background_level_${this.game.currentLevel}.jpg`
        this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
    }

    drawGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.game.bubbles.forEach(bubble => bubble.draw(bubble.size));
        this.player.draw();
        this.drawLives();
        this.game.lasers.forEach(shot => shot.draw());
        this.drawText();
        this.game.gifts.forEach(gift => {
            if (!gift.delete) {
                gift.draw()
            }
        });
    }

    updateGame() {
        this.player.update();
        this.game.bubbles.forEach(bubble => bubble.update());
        this.game.lasers.forEach(shot => shot.update());
        this.game.gifts.forEach(gift => {
            if (!gift.delete) {
                gift.update()
            }
        });
    }

    drawLives() {
        let heart = new Image();
        heart.src = 'src/images/heart.png';
        this.game.lives.forEach((heartCount, idx) => {
            this.ctx.drawImage(heart, 620 + idx * 40, 0, 100, 100);
        });
    }

    drawText() {
        this.ctx.font = "30px Arial";
        this.ctx.textAlign = "start";
        this.ctx.fillText(`Score: ${this.game.score}`, 40, 50);
        this.ctx.font = "20px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Level ${this.game.currentLevel}`, this.canvas.width / 2, 30);
    }

    drawGifts() {

    }
}


module.exports = Board;