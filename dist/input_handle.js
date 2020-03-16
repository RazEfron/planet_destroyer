Sound = require('./sound');


class InputHandler {
    constructor(game) {
        this.locked = false
        this.shootingSound = new Sound("src/sounds/shooting.mp3");
        document.addEventListener("keydown", e => {
            debugger
            switch (e.keyCode) {
                case (39)://right arrow
                    game.board.player.moveRight();
                    break;

                case (37)://left arrow
                    game.board.player.moveLeft();
                    break;

                case (80): //p
                    game.togglePause()
                    break
                case (13): //enter
                    game.start()
                    break
                case (77): //enter
                    game.unmute ? game.unmute = false : game.unmute = true
                    break
                case (32):
                    if (game.unmute) this.shootingSound.play()
                    if (this.locked) return
                        game.shoot()
                    this.locked = true
                    setTimeout(() => { this.locked = false; }, 200); 
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