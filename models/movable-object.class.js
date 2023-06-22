class MoveableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false; // Image wird gespiegelt (in draw() Methode --> addtoMap() in world.js)


    // loadImage('img/test.png')
    loadImage(path) { // erstellt eine neues Image-Objekt, weist diesem einen Quellpfad zu und gibt es "im Hintergrund zurück" --> Das zurückgegebene Obj kann dann an anderer Stelle im Code vervendet oder auf dem Canvas angezeigt werden. 
            this.img = new Image(); // Die Funktion Image() ist eine integrierte Funktion des HTML5 Canvas-Elements 
            this.img.src = path; // dann wird img ein Quellpfad zugewiesen ( wie bei: <img id='image' src='...'> )
        }
        // ((Das Laden kann ggf etwas dauern und sollte deshalb überwacht werden: 1) image.onload = function() {callback(img);}; --> callback wird dann erst ausgeführt, wenn img vollständig geladen ist  oder  2) requestAnimationFrame() zB für Spiele))

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; // path is here used as key  (the img-object is the value)
        });
    }

    moveRight() {
        console.log("movableObject moves to the right");
    }

    /**
     * moves object to the left () by the value of 'speed' at every new frame (60 fps)
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}