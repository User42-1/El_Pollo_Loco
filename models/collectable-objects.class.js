/* siehe noch Aufgaben: Video 21 (in Teil 'Mathematik') */

class BottleGround extends DrawableObject {

    y = 360;
    width = 50;
    height = 60;
    static numberCollectedBottles = 0;


    IMAGES_BOTTLE_GROUND = [
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'
    ];


    static j = 0;
    constructor() {
        super().loadImage(this.IMAGES_BOTTLE_GROUND[BottleGround.j]);
        this.x = this.bottlePosition()
        BottleGround.j = 1 - BottleGround.j; // toggle between 0 and 1

    }

    bottlePosition() {
        let x;
        while (true) {
            x = Math.random() * (3000) - 650; // Erzeugt Zahl zw -650 und 2350 <-- Math.random() * (max - min) + min, wobei max=2350 und min=-700
            if (x < 120 || x > 220) { // spart Bereich zw 120 und 220 aus <-- dort wo character gespawnt wird
                break;
            }
        }
        return x;
    }
}


class Coin extends DrawableObject {

    y = 50;
    width = 80;
    height = 80;

    constructor() {
        super().loadImage('img/7_statusbars/3_icons/icon_coin.png');
        this.x = -800 + Math.random() * 3000;
    }
}