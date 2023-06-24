class World {

    canvas;
    ctx; // stellt bereit: ctx.clearRect(...,...,...,...) , ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    keyboard;
    camera_x = 0; // Verschiebt gesamten ctx --> in draw()  (+ Character muss mit entgegengesetztem Wert verschoben werden)

    character = new Character(); // Klassen-Variablen hier ohne 'this' (#in Constructor)
    level = level1;

    // Variablen und #funktionen im Constructor immer mit 'this' davor ((für Instanzen))
    constructor(canvas, keyboard) { // canvas wurde in game.js an world('canvas') übergeben (dann auch an (alle) Objekte (zB character) )
        this.ctx = canvas.getContext('2d'); // durch getContext('2d') werden die 'Zeichen'-Funktionen in canvas bereitgestellt
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); // Funktion wird unten definiert
        this.setWorld(); // Variablen aus world können so an die Instanzen weitergegeben werden
    }

    setWorld() { // this steht ja hier für eine Instanz der Klasse World
        this.character.world = this; // So Variablen von world (zB 'keyboard') in character nutzbar
    }

    draw() { // this.draw (hier = world.draw) zeichnet die gesamte Map
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // cleared canvas vor jedem neuem draw() The cleared area is set to tranparent rgba(0,0,0,0).

        this.ctx.translate(this.camera_x, 0); // Verschiebung des gesamten ctx (Kamera) vor Zeichnen nach links

        // Zeichnen
        this.addObjectsToMap(this.level.backgroundObjects); // 'addObjectsToMap' wird unten defeniniert (zeichnet auf canvas)
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.addToMap(this.character); // 'addToMap' wird unten defeniniert(zeichnet auf canvas)

        this.ctx.translate(-this.camera_x, 0); // Verschiebung des gesamten ctx (Kamera) nach Zeichnen wieder zurück

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
            this.ctx.save(); // aktuelle Context-Einstellungen werden gespeichert
            this.ctx.translate(mo.width, 0); // mo wird um die Breite des mo verschoben (würde sonst beim Spiegeln um  diesesn Wert 'springen')
            this.ctx.scale(-1, 1); // spiegeln
            mo.x = mo.x * -1; // x-Koordinate umgekehrt
        }

        // eigentliches Zeichnen
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); // drawImage() draws an image, canvas, or video onto the canvas.

        // Context-Einstellungen werden auf oben gespeicherte Einstellungen zurückgesetzt
        if (mo.otherDirection) {
            mo.x = mo.x * -1; // x-Koordinate umgekehrt
            this.ctx.restore();
        }
    }
}