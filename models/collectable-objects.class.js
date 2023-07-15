/* für Klassen bottles und coins */

/* diese verteilen */

/* dafür auch jeweils eine Statusbar einfügen */

/* Nur so viele Flaschen dürfen geworfen werden können wie auch eingesammelt wurden */


/* siehe Aufgaben: Video 21 (in Teil 'Mathematik') */



class Bottle extends DrawableObject {

    y = 360;
    width = 50;
    height = 60;
    IMAGES_BOTTLE_GROUND = [
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'
    ];

    static j = 0;
    constructor() {
        super().loadImage(this.IMAGES_BOTTLE_GROUND[Bottle.j]);
        this.x = -800 + Math.random() * 3000;
        Bottle.j = 1 - Bottle.j; // toggle betwenn 0 and 1
    }
}

class Coin extends DrawableObject {

    y = 110;
    width = 80;
    height = 80;

    constructor() {
        super().loadImage('img/7_statusbars/3_icons/icon_coin.png');
        this.x = -800 + Math.random() * 3000;
    }
}