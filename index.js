const canvas = document.getElementById('preview');
const ctx = canvas.getContext('2d');
const size = document.getElementById('size');
const textColor = document.getElementById('text-color');
const backgroundColor = document.getElementById('background-color');
const download = document.getElementById('download');
const transparent = document.getElementById('transparent');

// set the canvas width and height
canvas.width = canvas.height = 512;
size.onchange = function() {
    canvas.width = canvas.height = this.value;
    draw();
}

textColor.onchange = draw;
backgroundColor.onchange = draw;
transparent.onchange = draw;

function draw() {
    // draw the background color
    ctx.fillStyle = backgroundColor.value;
    if (!transparent.checked) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = 'transparent';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    // draw the text
    const fontSize = canvas.width * 0.15;
    ctx.font = `${fontSize}px Hachi Maru Pop`;
    const distanceFromEdge = canvas.width * 0.04;
    ctx.textBaseline = 'center';
    ctx.textAlign = 'center';
    ctx.fillStyle = textColor.value;
    ctx.fillText('We', distanceFromEdge + fontSize, distanceFromEdge + fontSize);
    ctx.fillText('Are', canvas.width / 2, canvas.height / 2);
    ctx.fillText('Gay', canvas.width - distanceFromEdge - fontSize, canvas.height - distanceFromEdge - fontSize);
}

draw();

download.onclick = function() {
    const a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = 'image.png';
    a.click();
    delete a;
}