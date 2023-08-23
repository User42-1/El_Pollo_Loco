class World {

    /* canvas; */
    ctx; // stellt bereit: ctx.clearRect(...,...,...,...) , ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    /* keyboard; */
    camera_x = 0; // Verschiebt gesamten ctx --> in draw()  (+ Character muss mit entgegengesetztem Wert verschoben werden)

    level = level1; // Here all other moveable Objects are spawned

    character = new Character(); // Klassen-Variablen hier ohne 'this' (#in Constructor)
    /*     collectableObjects = [];
     */
    throwableObjects = [];
    /*     collectableObjects = [];
     */
    statusBar = new Statusbar();
    statusbarCoin = new StatusbarCoin();
    statusbarBottle = new StatusbarBottle();
    lastCharacterY = 155;



    // Variablen und #funktionen im Constructor immer mit 'this' davor ((für Instanzen))
    constructor(canvas, keyboard) { // canvas wurde in game.js an world('canvas') übergeben (dann auch an (alle) Objekte (zB character) )
        this.ctx = canvas.getContext('2d'); // durch getContext('2d') werden die 'Zeichen'-Funktionen in canvas bereitgestellt
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); // Funktion wird unten definiert
        this.setWorld(); // Variablen aus world können so an die Instanzen weitergegeben werden
        this.run(); // checks collisions and if throwable object in instanciated by pressing 'D'
    }

    setWorld() { // this steht ja hier für eine Instanz der Klasse World
        this.character.world = this; // So werden Variablen von world (zB 'keyboard') in character nutzbar
    }

    run() { // checks collisions and if throwable object is called every 200ms
        setInterval(() => {
            this.characterIsAboveGround();
            this.characterIsMovingDownwards();
            this.checkCollisionsWithEnemy();
            this.checkCollisionsWithBottle();
            this.checkThrowObjects();
        }, 200);
    }

    characterIsAboveGround() {
        return this.character.y < 155;
    }

    characterIsMovingDownwards() { // character in second phase of jump
        let diffY = this.lastCharacterY - this.character.y;
        this.lastCharacterY = this.character.y;
        /* console.log(diffY); */
        /* console.log(diffY < 0); */
        return diffY < 0;
    }

    checkCollisionsWithEnemy() {
        this.level.enemies.forEach((enemy, index) => { // index gives you the index of the enemy in the enemies-array
            if (this.character.isColliding(enemy) && enemy instanceof Chicken && this.characterIsAboveGround()
                /* && this.characterIsMovingDownwards */
                &&
                !this.character.isHurt()
            ) {
                this.character.speedy = 30;
                /* console.log('hit chicken: ', Index); */
                /* let storeX = this.level.enemies[index].x; */
                this.level.enemies[index].enemyIsDead = true;
                setTimeout(() => {
                    delete this.level.enemies[index];
                    /* this.level.enemies.splice([index], 1); */
                }, 1000)
            } else if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionsWithBottle() {
        this.level.bottles_ground.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                /* console.log(index); */
                BottleGround.numberCollectedBottles++;
                /* console.log(BottleGround.numberCollectedBottles); */
                delete this.level.bottles_ground[index];
            }
        });
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    draw() { // this.draw (hier = world.draw) zeichnet die gesamte Map
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // cleared canvas vor jedem neuem draw() The cleared area is set to tranparent rgba(0,0,0,0).

        // Zeichnen (all moveable objects)  camera_x wird in character entsrechend vorgegeben
        this.ctx.translate(this.camera_x, 0); // Verschiebung des gesamten ctx (Kamera) vor Zeichnen nach links

        this.addObjectsToMap(this.level.backgroundObjects); // 'addObjectsToMap' wird unten defeniniert (zeichnet auf canvas)
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.level.bottles_ground);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.addToMap(this.character); // 'addToMap' wird unten defeniniert(zeichnet auf canvas)

        this.ctx.translate(-this.camera_x, 0); // Verschiebung des gesamten ctx (Kamera) nach Zeichnen wieder zurück

        // Zeichnen (all fixed objects)
        this.addToMap(this.statusBar);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarBottle);


        let self = this; // neuere Objektorientierung kennt self, aber nicht this
        requestAnimationFrame(() => { // die Funktion in requestA... wird (asynchron / etwas später) ausgeführt, sobald alles (von 'oben')        
            self.draw(); // gezeichnet wurde - und zwar sooft es die Graphikkarte schafft (? 20-60 fps)
        });

    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        });
    }

    addToMap(mo) { // mo ... jeweiliges moveable-object (ist jeweils ein new Image() )
        // img wird gespiegelt
        if (mo.otherDirection) { // prüft, ob jeweiliges mo eine Eigenschaft otherDirection hat
            this.flipImage(mo);
        }

        // eigentliches Zeichnen
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        // Context-Einstellungen werden auf oben gespeicherte Einstellungen zurückgesetzt
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save(); // aktuelle Context-Einstellungen werden gespeichert
        this.ctx.translate(mo.width, 0); // mo wird um die Breite des mo verschoben (würde sonst beim Spiegeln um  diesesn Wert 'springen')
        this.ctx.scale(-1, 1); // spiegeln
        mo.x = mo.x * -1; // x-Koordinate umgekehrt
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1; // x-Koordinate umgekehrt
        this.ctx.restore();
    }
}