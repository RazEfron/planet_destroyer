class Bubble {
    constructor(canvas, ctx, size, options) {
        this.canvas = canvas
        this.ctx = ctx

        this.x = options.x;
        this.y = options.y;
        this.height = options.height 
        this.width = options.width 

        this.bubbleDX = options.bubbleDX;
        this.bubbleDY = options.bubbleDY;
        this.gravity = options.gravity;
        this.gravitySpeed = options.gravitySpeed;
        this.bounce = options.bounce;
        this.size = size
        this.realCoordinates()
    }

    draw(size) {
        let bubble
        switch (size) {
            case 5:
                bubble = document.getElementById("planet-five")
                break;
            case 4:
                bubble = document.getElementById("planet-four")
                break;
            case 3:
                bubble = document.getElementById("planet-three")
                break;
            case 2:
                bubble = document.getElementById("planet-two")
                break;
            case 1:
                bubble = document.getElementById("planet-one")
                break;
            default:
                break;
        }
        this.ctx.drawImage(bubble, this.x, this.y, this.width * .7, this.height * .7);
        this.ctx.globalCompositeOperation = 'destination-in';
        this.ctx.arc(0, 0, 50, 0, Math.PI * 2);
        this.ctx.globalCompositeOperation = 'source-over';
    }

    update() {
        
        // this.gravitySpeed += this.gravity;
        this.x += this.bubbleDX;
        this.y += this.bubbleDY
        // let rockbottom = this.canvas.height - this.height / 2 - this.height / 10;
        // if (this.y > rockbottom) {
        //     this.y = rockbottom;
        //     this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        // }
        if (this.x + this.bubbleDX > this.canvas.width - this.width / 2 - this.height / 10 || this.x + this.bubbleDX < - this.height / 10) {
            this.bubbleDX = -this.bubbleDX;
        }
        if (this.y + this.bubbleDY >= this.canvas.height - this.height / 2 || this.y + this.bubbleDY < 0) {
            this.bubbleDY = -this.bubbleDY;
        }
        this.realCoordinates()
    }

    realCoordinates() {
        switch (this.size) {
            case 5:
                this.bubbleX = this.x + 40;
                this.bubbleY = this.y + 40;
                break;
            case 4:
                this.bubbleX = this.x + 47;
                this.bubbleY = this.y + 47;
                break;
            case 3:
                this.bubbleX = this.x + 25;
                this.bubbleY = this.y + 20;
                break;
            case 2:
                this.bubbleX = this.x + 15;
                this.bubbleY = this.y + 25;
                break;
            case 1:
                this.bubbleX = this.x + 12;
                this.bubbleY = this.y + 25;
                break;
            default:
                break;
        }
    }
}

module.exports = Bubble;