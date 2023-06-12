class World {

    character = new Character(); // Klassen-Variablen hier ohne 'this' (#in Constructor)
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ]
    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0)
    ]
    canvas;
    ctx;

    // Variablen und #funktionen im Constructor immer mit 'this' ((für Instanzen))
    constructor(canvas) { // canvas wurde in game.js an world('canvas') übergeben
        this.ctx = canvas.getContext('2d'); // durch getContext('2d') wird das Zeichen in canvas bereitgestellt
        this.canvas = canvas;
        this.draw(); // draw nutzt nun (in dieser Instanz = 'this') ctx zum Zeichnen (s.u. draw() )
    }

    draw() { // = world.draw (zeichnet die gesamte Map)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // cleared canvas vor jedem neuem draw()

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies); // Mit 'forEach'  einzelne enemies --> dann mit 'addToMap' zu Map hinzugefügt
        this.addToMap(this.character); // Character zu Map hinzugefügt

        /* this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });

        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        });

        this.backgroundObjects.forEach(bgo => {
            this.addToMap(bgo);
        }); */

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

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}