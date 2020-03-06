class Level {
    constructor(game) {
        this.setup = {
            1: [{ size: 2, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }],
            2: [{ size: 3, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }],
            3: [{ size: 4, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }],
            4: [{ size: 5, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }],
            5: [{ size: 5, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }, 
                { size: 3, x: game.canvas.width / 2 - 200, y: 40, bubbleDX: 5, bubbleDY: -5 }],
            6: [{ size: 4, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }, 
                { size: 5, x: game.canvas.width / 2 - 200, y: 40, bubbleDX: 5, bubbleDY: -5 }],
            7: [{ size: 4, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }, 
                { size: 4, x: game.canvas.width / 2 - 200, y: 40, bubbleDX: 5, bubbleDY: -5 }, 
                { size: 4, x: game.canvas.width / 2 - 200, y: 40, bubbleDX: 5, bubbleDY: -5 }],
            8: [{ size: 5, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }, 
                { size: 4, x: game.canvas.width / 2 - 200, y: 40, bubbleDX: 5, bubbleDY: -5 }, 
                { size: 4, x: game.canvas.width / 2 - 400, y: 40, bubbleDX: 5, bubbleDY: -5 }],
            9: [{ size: 4, x: game.canvas.width / 2, y: 40, bubbleDX: 5, bubbleDY: 5 }, 
                { size: 4, x: game.canvas.width / 2 - 100, y: 40, bubbleDX: 5, bubbleDY: -5 }, 
                { size: 4, x: game.canvas.width / 2 - 200, y: 40, bubbleDX: 5, bubbleDY: -5 },
                { size: 4, x: game.canvas.width / 2 - 300, y: 40, bubbleDX: 5, bubbleDY: -5 }]
        }
    }
}

module.exports = Level;