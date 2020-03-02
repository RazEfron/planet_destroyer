class Shape {
    constructor(canvas) {
        this.color = 'pink';
        this.x = canvas.width/2;
        this.y = canvas.height-30;
        this.dx = 2;
        this.dy = -2;
        this.radius = 25;
        this.drawShape = this.drawShape.bind(this);
        this.canvas = canvas;
        this.ballRadius = 10;
    }

    drawShape(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
}

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI,
            false
        );

        ctx.fill();
    };
}

module.exports = Shape;