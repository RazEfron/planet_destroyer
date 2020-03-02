Board = require('../dist/board')

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    let board = new Board(canvas, ctx)
    document.addEventListener("keydown", board.keyDownHandler, false);
    document.addEventListener("keyup", board.keyUpHandler, false);
})