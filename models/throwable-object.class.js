class ThrowableObject extends MoveableObject {
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw(); // nur testweise im Constructor (sonst dann auf Taste 'D')
    }

    throw () {
        this.speedy = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}