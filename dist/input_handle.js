class InputHandler {
    constructor(player) {

        document.addEventListener("keydown", e => {
            if (e.key == "Right" || e.key == "ArrowRight") {
                player.moveRight();
            } else if (e.key == "Left" || e.key == "ArrowLeft") {
                player.moveLeft();
            }
        })

        document.addEventListener("keyup", e => {
            if (e.key == "Right" || e.key == "ArrowRight") {
                if (player.speed > 0) player.stop();
            } else if (e.key == "Left" || e.key == "ArrowLeft") {
                if (player.speed < 0) player.stop();
            }
        })
    } 
}

module.exports = InputHandler;