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

// Control buttons for mobile devices
document.addEventListener("DOMContentLoaded", function() { // wait until DOM has been loaded
    var image = document.getElementById("iconLeft"); // move left

    image.addEventListener("mousedown", () => { keyboard.LEFT = true; });
    image.addEventListener("touchstart", () => { keyboard.LEFT = true; });

    image.addEventListener("mouseup", () => { keyboard.LEFT = false; });
    image.addEventListener("touchend", () => { keyboard.LEFT = false; });

    var image = document.getElementById("iconRight"); // move right

    image.addEventListener("mousedown", () => { keyboard.RIGHT = true; });
    image.addEventListener("touchstart", () => { keyboard.RIGHT = true; });

    image.addEventListener("mouseup", () => { keyboard.RIGHT = false; });
    image.addEventListener("touchend", () => { keyboard.RIGHT = false; });

    var image = document.getElementById("iconUp"); // jump

    image.addEventListener("mousedown", () => { keyboard.UP = true; });
    image.addEventListener("touchstart", () => { keyboard.UP = true; });

    image.addEventListener("mouseup", () => { keyboard.UP = false; });
    image.addEventListener("touchend", () => { keyboard.UP = false; });

    var image = document.getElementById("attack"); // throw bottle

    image.addEventListener("mousedown", () => { keyboard.D = true; });
    image.addEventListener("touchstart", () => { keyboard.D = true; });

    image.addEventListener("mouseup", () => { keyboard.D = false; });
    image.addEventListener("touchend", () => { keyboard.D = false; });
});

// Control buttons for background music
document.addEventListener("DOMContentLoaded", function() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    var playButton = document.getElementById("sound_on");
    var pauseButton = document.getElementById("sound_off");
    /* var muteButton = document.getElementById("sound_off"); */

    // Play the background music
    playButton.addEventListener("click", function() {
        backgroundMusic.play();
        backgroundMusic.volume = 0.3;
    });

    // Pause the background music
    pauseButton.addEventListener("click", function() {
        backgroundMusic.pause();
    });
    /* 
        // Mute/unmute the background music
        muteButton.addEventListener("click", function() {
            if (backgroundMusic.muted) {
                backgroundMusic.muted = false;
            } else {
                backgroundMusic.muted = true;
            }
        }); */
});