class Bubble {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx

        this.x = canvas.width / 2;
        this.y = 50;
        this.height = 300
        this.width = 300

        this.bubbleDX = 5;
        this.bubbleDY = 0;
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        this.bounce = 1.005;

    }

    draw() {
        debugger
        let bubble = document.getElementById("planet-one")
        this.ctx.drawImage(bubble, this.x, this.y, this.width * .7, this.height * .7);
        this.ctx.globalCompositeOperation = 'destination-in';
        this.ctx.arc(75, 75, 50, 0, Math.PI * 2);
        this.ctx.globalCompositeOperation = 'source-over';
    }

    update() {
        debugger
        this.gravitySpeed += this.gravity;
        this.x += this.bubbleDX;
        this.y += this.bubbleDY + this.gravitySpeed;
        let rockbottom = this.canvas.height - this.height / 2;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
        if (this.x + this.bubbleDX > this.canvas.width - this.height / 2 - 30 || this.x + this.bubbleDX < -30) {
            this.bubbleDX = -this.bubbleDX;
        }
    }
}

module.exports = Bubble;