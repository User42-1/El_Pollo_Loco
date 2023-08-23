class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false; // Image wird gespiegelt (in draw() Methode --> addtoMap() in world.js)
    speedy = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    enemyIsDead = false;

    isAboveGround() {
        if (this instanceof ThrowableObject) { // ThrowableObjects should always fall
            return true;
        } else {
            return this.y < 155;
        }
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
        return timePassed < 1500; // ms
    }

    isDead() {
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedy = 30;
    }

    playAnimation(images) { // currentImage = 0 <-- variable in moveableObject
        let i = this.currentImage % images.length; // let i = (5 % 6) => 0 ; Rest 5
        let path = images[i];
        this.img = this.imageCache[path];
        if (images[images.length - 2] == "img/2_character_pepe/5_dead/D-56.png") {
            this.currentImage = 5;
            this.world.character.y += 10;
        } else {
            this.currentImage++;
        }
        /*         if (images == this.IMAGES_DEAD && this.currentImage == this.IMAGES_DEAD.length - 1) { return; }
         */
    }
}