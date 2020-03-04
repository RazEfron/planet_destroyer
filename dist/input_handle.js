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

                case ("Escape"): 

                default:
                    break;
            }
        })
    } 
}

module.exports = InputHandler;