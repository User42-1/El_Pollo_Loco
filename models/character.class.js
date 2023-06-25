class Character extends MoveableObject {

    height = 280;
    y = 155;
    speed = 5;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    /* world; */ // damit Zugriff auf Variablen aus world (zB 'keyboard') (über Funktion setworld() in world.class.js)

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); // function from parent-class
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            // movement to the right
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false; // Object wird nicht gespiegelt
            }
            if (this.world.keyboard.LEFT && this.x > -615) {
                this.x -= this.speed;
                this.otherDirection = true; // Object wird gespiegelt (in draw() Methode --> addtoMap() in world.js)
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            // walk animation
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = (5 % 6) => 0 ; Rest 5
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150)
    }


    jump() {

    }

}