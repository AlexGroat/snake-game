



var canvas = document.getElementById("canvas")

var snake = new Snake();

var apple = new Apple();

var canvasContext = canvas.getContext('2d');

window.onload = () => {
    gameLoop();
}

function gameLoop () {
    setInterval(show, 1000/15) // 15 is our fps value+
}