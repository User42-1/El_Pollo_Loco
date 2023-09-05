class Statusbar extends DrawableObject {

    IMAGES_HEALTH_CHARACTER = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ]

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH_CHARACTER)
        this.x = 20;
        this.y = 5;
        this.width = 200;
        this.height = 50;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_HEALTH_CHARACTER[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5
        } else if (this.percentage > 80) {
            return 4
        } else if (this.percentage > 60) {
            return 3
        } else if (this.percentage > 40) {
            return 2
        } else if (this.percentage > 20) {
            return 1
        } else {
            return 0
        }
    }
}

/* ************************************************************** */

class StatusbarCoin extends DrawableObject {

    IMAGES_BAR_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_BAR_COINS)
        this.x = 20;
        this.y = 40;
        this.width = 200;
        this.height = 50;
        this.displayNumberCoins(0);
    }

    displayNumberCoins(numberCoins) {
        this.numberCoins = numberCoins; // => 0 ... 5
        let path = this.IMAGES_BAR_COINS[this.computeImageIndex()];
        this.img = this.imageCache[path];
    }

    computeImageIndex() {
        if (Coin.numberCollectedCoins == 0) {
            return 0
        } else if (Coin.numberCollectedCoins == 1) {
            return 1
        } else if (Coin.numberCollectedCoins == 2) {
            return 2
        } else if (Coin.numberCollectedCoins == 3) {
            return 3
        } else if (Coin.numberCollectedCoins == 4) {
            return 4
        } else {
            return 5
        }
    }
}


/* ************************************************************** */
class StatusbarBottle extends DrawableObject {

    IMAGES_BAR_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',

    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_BAR_BOTTLES)
        this.x = 20;
        this.y = 75;
        this.width = 200;
        this.height = 50;
        this.displayNumberBottles(0);
    }

    displayNumberBottles(numberBottles) {
        this.numberBottles = numberBottles; // => 0 ... 5
        let path = this.IMAGES_BAR_BOTTLES[this.calculateImageIndex()];
        this.img = this.imageCache[path];
    }

    calculateImageIndex() {
        if (BottleGround.numberCollectedBottles == 0) {
            return 0
        } else if (BottleGround.numberCollectedBottles == 1) {
            return 1
        } else if (BottleGround.numberCollectedBottles == 2) {
            return 2
        } else if (BottleGround.numberCollectedBottles == 3) {
            return 3
        } else if (BottleGround.numberCollectedBottles == 4) {
            return 4
        } else {
            return 5
        }
    }
}