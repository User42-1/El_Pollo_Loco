class Chicken extends MoveableObject {

    y = 365;
    height = 60;
    width = 60;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]
    speed = 0.3;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); // function from parent-class
        this.x = 400 + Math.random() * 500; // (use super only for methods)

        this.loadImages(this.IMAGES_WALKING);

        this.speed = 0.2 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            /*             let i = this.currentImage % this.IMAGES_WALKING.length; // let i = (5 % 6) => 0 ; Rest 5
                        let path = this.IMAGES_WALKING[i];
                        this.img = this.imageCache[path];
                        this.currentImage++; */
        }, 200)
    }
}