class Endboss extends MoveableObject {

    x = 0;
    y = 145;
    height = 300;
    width = 250;
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ]



    speed = 0.3;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); // function from parent-class
        this.x = 1800 + Math.random() * 500; // (super nur für Methoden)

        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);

        this.speed = 0.2 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if ((level1.enemies[3].x - world.character.x) > 250) { // Distance charactor to endboss
                this.moveLeft();
            }
        }, 1000 / 200);

        /* console.log(world.character.x); */

        setInterval(() => {
            if ((level1.enemies[3].x - world.character.x) < 250) {
                this.playAnimation(this.IMAGES_ALERT);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);

        /* console.log(level1.enemies[3].x); */

    }
}