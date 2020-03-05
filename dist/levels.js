class Level {
    constructor(game) {
        this.setup = {
            1: [{ size: 5, x: game.canvas.width / 2, y: 40, bubbleDX: 5 }]
        }
    }
}

module.exports = Level;