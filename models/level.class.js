class Level { // <-- levels.level1, ...
    enemies;
    clouds;
    collectableObjects;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, collectableObjects, backgroundObjects) {
        this.enemies = enemies; // chicken and endboss
        this.clouds = clouds;
        this.collectableObjects = collectableObjects;
        this.backgroundObjects = backgroundObjects;
    }
}