let canvas;
let world;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas); // variabe canvas wird dann in world.class.js verwendet
    console.log('My Character is', world.character);
}