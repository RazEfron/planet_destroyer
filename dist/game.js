Board = require('../dist/board');


class Game {
    constructor() {
        this.board = new Board
    }


    play() {
        debugger
        const board = new Board()
        document.addEventListener("keydown", this.board.player.keyDownHandler, false);
        document.addEventListener("keyup", this.board.player.keyUpHandler, false);
    }
}

module.exports = Game;