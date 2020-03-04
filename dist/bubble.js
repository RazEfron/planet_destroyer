class Bubble {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx

        this.x = canvas.width / 2;
        this.y = 50;
        this.height = 300 // 210 135
        this.width = 300 // 210 135

        this.bubbleDX = 5;
        this.bubbleDY = 0;
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        this.bounce = 1.005;

    }

    draw() {
        
        let bubble = document.getElementById("planet-one")
        this.ctx.drawImage(bubble, this.x, this.y, this.width * .7, this.height * .7);
        this.ctx.globalCompositeOperation = 'destination-in';
        this.ctx.arc(0, 0, 50, 0, Math.PI * 2);
        this.ctx.globalCompositeOperation = 'source-over';
    }

    update() {
        
        this.gravitySpeed += this.gravity;
        this.x += this.bubbleDX;
        this.y += this.bubbleDY + this.gravitySpeed;
        let rockbottom = this.canvas.height - this.height / 2 - 30;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
        if (this.x + this.bubbleDX > this.canvas.width - this.width / 2 - 30 || this.x + this.bubbleDX < -30) {
            this.bubbleDX = -this.bubbleDX;
        }
    }
}

module.exports = Bubble;