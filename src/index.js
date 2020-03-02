Board = require('../dist/board')

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const board = new Board()
    board.draw()
})