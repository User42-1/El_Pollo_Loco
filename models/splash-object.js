class SplashObject extends MoveableObject {

    img;
    currentImage = 0;

    BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png');
        this.loadImages(this.BOTTLE_SPLASH);
        this.x = 100;
        this.y = 100;
        this.height = 60;
        this.width = 50;
        this.splashBottle();
    }

    splashBottle() {
        if (world.endbossIsHit) {
            world.endbossIsHit = false;
            console.log(this.x, this.y);
            setInterval(() => {
                this.playAnimation2(this.BOTTLE_SPLASH);
            }, 100);
        }
    }

    splashBottle() {
        if (world.endbossIsHit) {
            world.endbossIsHit = false;
            console.log(this.x, this.y);
            clearInterval(this.throwInterval);
            clearInterval(this.rotationInterval);
            setInterval(() => {
                this.playAnimation2(this.BOTTLE_SPLASH);
            }, 300);
        }
    }

    playAnimation2(images) { // currentImage = 0 <-- variable in moveableObject
        let i = this.currentImage % images.length; // let i = (5 % 6) => 0 ; Rest 5
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}