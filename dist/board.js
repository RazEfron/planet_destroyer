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
        this.drawBackground()
        this.bubble.draw()
        this.player.draw()
    }

    updateGame(deltaTime) {
        this.player.update(deltaTime)
        this.bubble.update(deltaTime)
    }


}


module.exports = Board;