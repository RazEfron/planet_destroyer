class InputHandler {
    constructor(player, game) {

        document.addEventListener("keydown", e => {
            debugger
            switch (e.key) {
                case ("ArrowRight"):
                    player.moveRight();
                    break;

                case ("ArrowLeft"):
                    player.moveLeft();
                    break;

                case ("p"): 
                    game.togglePause()
                    break
                case ("n"):
                    game.start()
                    break
                case (" "):
                    game.shoot()
                    break
                default:
                    break;
            }
        })

        document.addEventListener("keyup", e => {
            switch (e.key) {
                case ("ArrowRight"):
                    if (player.speed > 0) player.stop();
                    break;

                case ("ArrowLeft"):
                    if (player.speed < 0) player.stop();
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