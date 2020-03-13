Sound = require('./sound');


class InputHandler {
    constructor(game) {
        this.locked = false
        this.shootingSound = new Sound("src/sounds/shooting.mp3");
        document.addEventListener("keydown", e => {
            // debugger
            switch (e.keyCode) {
                case (39):
                    game.board.player.moveRight();
                    break;

                case (37):
                    game.board.player.moveLeft();
                    break;

                case (80): 
                    game.togglePause()
                    break
                case (78):
                    game.start()
                    break
                case (32):
                    this.shootingSound.play()
                    if (this.locked) return
                        game.shoot()
                    this.locked = true
                    setTimeout(() => { this.locked = false; }, 250); 
                    break
                default:
                    break;
            }
        })

        document.addEventListener("keyup", e => {
            switch (e.keyCode) {
                case (39):
                    if (game.board.player.speed > 0) game.board.player.stop();
                    break;

                case (37):
                    if (game.board.player.speed < 0) game.board.player.stop();
                    break;
                default:
                    break;
            }
        })
    } 
}

module.exports = InputHandler;