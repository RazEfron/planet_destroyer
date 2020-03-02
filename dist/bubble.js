class Bubble {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx
    }

    draw(x, y, radius) {
        debugger
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
        
    }
}

module.exports = Bubble;