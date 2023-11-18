class ThrowableObject extends MoveableObject {

    throwInterval;
    rotationInterval;

    BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.BOTTLE_ROTATION);
        this.loadImages(this.BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throwBottle();
        this.rotateBottle();
        /* this.splashBottle(); */
    }

    throwBottle() {
        if (true) {
            this.speedy = 30;
            this.applyGravity();
            this.throwInterval = setInterval(() => {
                this.x += 30;
            }, 100);
        }
    }

    rotateBottle() {
        if (world.endbossIsHit) {
            this.rotationInterval = setInterval(() => {
                this.playAnimation(this.BOTTLE_SPLASH);
            }, 70);
        } else
            setInterval(() => {
                this.playAnimation(this.BOTTLE_ROTATION);
            }, 70);
    }

    /* splashBottle() {
        if (world.endbossIsHit) {
            world.endbossIsHit = false;
            console.log(this.x, this.y);
            clearInterval(this.throwInterval);
            clearInterval(this.rotationInterval); */
    /* setInterval(() => {
        this.playAnimation(this.BOTTLE_SPLASH);
    }, 300); */
    /* world.ctx.fillStyle = "red"; // Setzt die Füllfarbe auf Rot
            world.ctx.fillRect(100, 100, 100, 100); // Zeichnet ein Quadrat
        }
    } */
}