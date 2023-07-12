class Endboss extends MoveableObject {

    x = 0;
    y = 145;
    height = 300;
    width = 250;
    IMAGES_WALKING = [
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
        this.x = 500 + Math.random() * 500; // (super nur für Methoden)

        this.loadImages(this.IMAGES_WALKING);

        this.speed = 0.2 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        /* this.moveLeft(); */

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i = (5 % 6) => 0 ; Rest 5
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200)
    }
}