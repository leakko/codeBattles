class PlayerNumber {
    constructor(ctx) {
        
        this.ctx = ctx;
        this.height = 30;
        this.width = 100;

        
        this.img = new Image();
        this.img.src = "./assets/img/players/player1.png";
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }
    }

    isReady() {
        return this.img.isReady;
    }

    draw(x, y) {
        if (this.isReady()) {
            this.ctx.drawImage (
                this.img,
                x + 90,
                y + 60,
                this.width,
                this.height
            )
        }
    }
}