class Level {
    constructor(game) {
        this.setup = {
            1: [{ size: 2, x: game.canvas.width / 2, y: 40, bubbleDX: 5 }],
            2: [{ size: 3, x: game.canvas.width / 2, y: 40, bubbleDX: 5 }]
        }
    }
}

module.exports = Level;