class Gifts {
    constructor(x, y, game) {
        this.x = x;
        this.y = y;
        this.dY = 5;
        this.randomNumber = Math.floor(Math.random() * 100);
        this.game = game;
        this.delete = false;
    }

    draw() {
        switch (this.randomNumber) {
            case (this.randomNumber >= 95): //lives
                let heart = new Image();
                heart.src = 'src/images/heart.png';
                this.ctx.drawImage(heart, this.x * this.y, 100, 100);
            break;
            case (this.randomNumber >= 75): //coinBag
                let coinBag = new Image();
                heart.src = 'src/images/coin_bag.png';
                this.ctx.drawImage(coinBag, this.x, this.y, 100, 100);
            break;
            case this.randomNumber >= 50: // coinStack
                let coinStack = new Image();
                heart.src = 'src/images/coin_stack.png';
                this.ctx.drawImage(coinStack, this.x, this.y, 100, 100);
            break;
            case this.randomNumber >= 0: // goldCoin
                let goldCoin = new Image();
                heart.src = 'src/images/gold_coin.png';
                this.ctx.drawImage(goldCoin, this.x, this.y, 100, 100);
            break;
        }
    }

    update() {
        this.y += this.dY;
        if (this.y + this.dY >= this.game.canvas.height - this.height / 2) {
            this.dY = 0;
            setTimeout(() => { this.delete = true; }, 1000); 
        }
    }
}

module.exports = Gifts;