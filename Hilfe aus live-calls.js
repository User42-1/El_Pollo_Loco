isColliding(obj) {
    return (
        (this.x + this.width - this.offset.right) >= obj.x + obj.offset.left &&
        (this.x + this.offset.left) <= (obj.x + obj.width - obj.offset.right) &&
        (this.y + this.height - this.offset.bottom) >= obj.y + obj.offset.top &&
        (this.y + this.offset.top) <= (obj.y + obj.height - obj.offset.bottom) //&&
        //obj.onCollisionCourse(this)
    );
}

checkCollisionsBottlesToEndboss() {
    this.enemies.forEach((enemy) => { // enemy ist immer der aktuelle Gegner/Wenn ich 5 Gegner habe, wird immer das in der geschweiften Klammer jede Sekunde für jeden Gegnerausgeführt .
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(enemy) && !bottle.hasHitBoss) { // Wenn eine Kollision zwischen der Flasche und dem Endboss auftritt:
                if (enemy instanceof Endboss) {
                    enemy.hit(25);
                    this.endbossBar.setBosshealth(enemy.energy);
                    bottle.hasHitBoss = true;
                    bottle.x = bottle.x + 50;
                } else {
                    enemy.energy = 0;
                }
            }
        });
    });
}

checkCollisions() {
    this.level.enemies.forEach((enemy) => {
        if (!enemy.isDead() && this.character.isColliding(enemy)) {
            if (this.character.isAboveGround() && !this.character.isHurt()) {
                this.character.jump();
                enemy.energy = 0;
                console.log('chicken is dead');

                setTimeout(() => {

                    if (!enemy instanceof Endboss) {
                        let index = this.level.enemies.indexOf(enemy);
                        this.level.enemies.splice(index, 1);
                        console.log('chicken is far far away');
                    }
                }, 150);
            } else {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
            console.log('chicken is dead');
        }
    });
}

/**
 * Checks for collisions between the character and enemies and handles them.
 */
checkCollisionWithEnemies() {
    this.level.enemies.forEach(enemy => {
        if (this.character.isColliding(enemy) && !enemy.isDead()) {
            if (this.character.isAboveGround() && !this.character.isHurt()) {
                this.character.jump();
                enemy.die();
            } else {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
            this.characterIsDead();
        }
    });
}
`