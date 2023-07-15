class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;


    // loadImage('img/test.png')
    loadImage(path) { // erstellt eine neues Image-Objekt, weist diesem einen Quellpfad zu und gibt es "im Hintergrund zurück" --> Das zurückgegebene Obj kann dann an anderer Stelle im Code vervendet oder auf dem Canvas angezeigt werden. 
            this.img = new Image(); // Die Funktion Image() ist eine integrierte Funktion des HTML5 Canvas-Elements 
            this.img.src = path; // dann wird img ein Quellpfad zugewiesen ( wie bei: <img id='image' src='...'> )
        }
        // ((Das Laden kann ggf etwas dauern und sollte deshalb überwacht werden: 1) image.onload = function() {callback(img);}; --> callback wird dann erst ausgeführt, wenn img vollständig geladen ist  oder  2) requestAnimationFrame() zB für Spiele))

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // drawImage() draws an image, canvas, or video onto the canvas.
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Bottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

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


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedy > 0) {
                this.y -= this.speedy;
                this.speedy -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isColliding(obj) {
        return (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
            (this.y + this.height) >= obj.y && this.y <= (obj.y + obj.height);
    }

}