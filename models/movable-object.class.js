class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false; // Image wird gespiegelt (in draw() Methode --> addtoMap() in world.js)
    speedy = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedy > 0) {
                this.y -= this.speedy;
                this.speedy -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // ThrowableObjects should always fall
            return true;
        } else {
            return this.y < 155;
        }
    }

    isColliding(mo) {
        return (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
            (this.y + this.height) >= mo.y && this.y <= (mo.y + mo.height);
    }

    hit() {
        this.energy -= 3;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        return timePassed < 1000; // ms
    }

    isDead() {
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
    }

    /**
     * moves object to the left () by the value of 'speed' at every new frame (60 fps)
     */
    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedy = 30;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = (5 % 6) => 0 ; Rest 5
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        /*         if (images == this.IMAGES_DEAD && this.currentImage == this.IMAGES_DEAD.length - 1) { return; }
         */
    }
}