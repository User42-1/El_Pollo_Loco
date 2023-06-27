class Level { // <-- levels.level1, ...
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies; // chicken and endboss
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}