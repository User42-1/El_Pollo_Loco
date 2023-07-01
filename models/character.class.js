class Character extends MoveableObject {

    height = 280;
    y = 155;
    speed = 8;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    /* world; */ // damit Zugriff auf Variablen aus world (zB 'keyboard') (über Funktion setworld() in world.class.js)
    walking_sound = new Audio('audio/running_on_grass.wav')

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); // function from parent-class
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            // movement to the right
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false; // Object wird nicht gespiegelt
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -615) {
                this.moveLeft();
                this.otherDirection = true; // Object wird gespiegelt (in draw() Methode --> addtoMap() in world.js)
                this.walking_sound.play();
            }

            if ((this.world.keyboard.UP || this.world.keyboard.SPACE) && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            // jump animation
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                // walk animation
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                    /* let i = this.currentImage % this.IMAGES_WALKING.length; // let i = (5 % 6) => 0 ; Rest 5
                    let path = this.IMAGES_WALKING[i];
                    this.img = this.imageCache[path];
                    this.currentImage++; */
                }
            }
        }, 50)
    }

}