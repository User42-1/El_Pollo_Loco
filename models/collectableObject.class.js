/* für Klassen bottles und coins */

/* diese verteilen */

/* dafür auch jeweils eine Statusbar einfügen */

/* Nur so viele Flaschen dürfen geworfen werden können wie auch eingesammelt wurden */


/* siehe Aufgaben: Video 21 (in Teil 'Mathematik') */



class CollectableObject extends MoveableObject {

    y = 50;
    width = 200;
    height = 200;
    IMAGES_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'
    ]

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 400;

        this.loadImages(this.IMAGES_ROTATION);

        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ROTATION);
        }, 200)
    }
}