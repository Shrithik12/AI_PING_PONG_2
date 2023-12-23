
function setup() {
	canvas = createCanvas(1240,336);
	canvas.size(800,200);
	video = createCapture(VIDEO);
	video.hide();
}

function draw() {
	game();
  image(canvas,0,0,1240,336);
}

