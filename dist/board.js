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
        this.bubble = new Bubble(canvas, ctx);
        
        //player
        this.player = new Player(canvas, ctx);
    }

    drawBackground() {
        let background = new Image();
        background.src = 'src/images/background_level_one.jpg'
        this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
    }

    drawGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.bubble.draw();
        this.player.draw();
        this.drawLives();
        this.game.lasers.forEach(shot => shot.draw())
    }

    updateGame() {
        this.player.update();
        this.bubble.update();
        this.game.lasers.forEach(shot => shot.update())
    }

    drawLives() {
        let heart = new Image();
        heart.src = 'src/images/heart.png';
        this.game.lives.forEach(heartCount => {
            this.ctx.drawImage(heart, heartCount * 40, 0, 100, 100);
            this.ctx.beginPath();
            
        });
    }
}


module.exports = Board;