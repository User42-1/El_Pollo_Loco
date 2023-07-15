class Level { // <-- levels.level1, ...
    enemies;
    clouds;
    bottles_ground;
    coins;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, bottles_ground, coins, backgroundObjects) {
        this.enemies = enemies; // chicken and endboss
        this.clouds = clouds;
        this.bottles_ground = bottles_ground;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}