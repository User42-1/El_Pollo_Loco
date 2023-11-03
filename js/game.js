let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); // variables canvas and keyboard are passed to the constructor in world.class.js

    startscreen = document.getElementById('startscreen').style.opacity = '0';
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (e.key === 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (e.key === 'ArrowUp') {
        keyboard.UP = true;
    }
    if (e.key === 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (e.key === ' ') {
        keyboard.SPACE = true;
    }
    if (e.key === 'd' || e.key === 'D') {
        keyboard.D = true;
    }

}); // Eventlistener returns JSON with the respective events (('keypress' returns when character-keys are hit, not arrow-keys))

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (e.key === 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (e.key === 'ArrowUp') {
        keyboard.UP = false;
    }
    if (e.key === 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (e.key === ' ') {
        keyboard.SPACE = false;
    }
    if (e.key === 'd' || e.key === 'D') {
        keyboard.D = false;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("iconLeft");

    image.addEventListener("mousedown", () => { keyboard.LEFT = true; });
    image.addEventListener("touchstart", () => { keyboard.LEFT = true; });

    image.addEventListener("mouseup", () => { keyboard.LEFT = false; });
    image.addEventListener("touchend", () => { keyboard.LEFT = false; });

    var image = document.getElementById("iconRight");

    image.addEventListener("mousedown", () => { keyboard.RIGHT = true; });
    image.addEventListener("touchstart", () => { keyboard.RIGHT = true; });

    image.addEventListener("mouseup", () => { keyboard.RIGHT = false; });
    image.addEventListener("touchend", () => { keyboard.RIGHT = false; });

    var image = document.getElementById("iconUp");

    image.addEventListener("mousedown", () => { keyboard.UP = true; });
    image.addEventListener("touchstart", () => { keyboard.UP = true; });

    image.addEventListener("mouseup", () => { keyboard.UP = false; });
    image.addEventListener("touchend", () => { keyboard.UP = false; });

    var image = document.getElementById("attack");

    image.addEventListener("mousedown", () => { keyboard.D = true; });
    image.addEventListener("touchstart", () => { keyboard.D = true; });

    image.addEventListener("mouseup", () => { keyboard.D = false; });
    image.addEventListener("touchend", () => { keyboard.D = false; });
});