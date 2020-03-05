class InputHandler {
    constructor(game) {
        this.locked = false

        document.addEventListener("keydown", e => {
            switch (e.key) {
                case ("ArrowRight"):
                    game.board.player.moveRight();
                    break;

                case ("ArrowLeft"):
                    game.board.player.moveLeft();
                    break;

                case ("p"): 
                    game.togglePause()
                    break
                case ("n"):
                    game.start()
                    break
                case (" "):
                    // if (this.locked) return
                        game.shoot()
                    // this.locked = true
                    // setTimeout(() => { this.locked = false; }, 1000); 
                    break
                default:
                    break;
            }
        })

        document.addEventListener("keyup", e => {
            switch (e.key) {
                case ("ArrowRight"):
                    if (game.board.player.speed > 0) game.board.player.stop();
                    break;

                case ("ArrowLeft"):
                    if (game.board.player.speed < 0) game.board.player.stop();
                    break;

                // case (" "):
                //     game.stopShooting();
                //     break 

                default:
                    break;
            }
        })
    } 
}

module.exports = InputHandler;