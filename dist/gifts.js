class Gifts {
    constructor(x, y, game) {
        this.x = x;
        this.y = y;
        this.dY = 5;
        this.randomNumber = Math.floor(Math.random() * 1000);
        this.game = game;
        this.delete = false;
        this.height = 0;
        this.width = 0
    }

    draw() 
    {
            if (this.randomNumber >= 980) {//lives
                let heart = new Image();
                heart.src = 'src/images/heart.png';
                this.height = 110;
                this.width = 100;
                this.game.ctx.drawImage(heart, this.x, this.y, 100, 100);
            } else if (this.randomNumber >= 850) {//coinBag
                let coinBag = new Image();
                coinBag.src = 'src/images/coin_bag.png';
                this.height = 109;
                this.width = 60;
                this.game.ctx.drawImage(coinBag, this.x, this.y, 60, 60);
            } else if (this.randomNumber >= 650) {// coinStack
                let coinStack = new Image();
                coinStack.src = 'src/images/coin_stack.png';
                this.height = 50;
                this.width = 30;
                this.game.ctx.drawImage(coinStack, this.x, this.y, 30, 30);
            }
            else if (this.randomNumber >= 200) {// goldCoin
                let goldCoin = new Image();
                goldCoin.src = 'src/images/gold_coin.png';
                this.height = 60;
                this.width = 35;
                this.game.ctx.drawImage(goldCoin, this.x, this.y, 35, 35);
            }
        }

    update() {
        this.y += this.dY;
        
        if (this.y + this.dY >= this.game.canvas.height - this.height / 2) {
            
            this.dY = 0;
            setTimeout(() => { this.delete = true; }, 500); 
        }
    }
}

module.exports = Gifts;