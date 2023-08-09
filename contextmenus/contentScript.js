var sectionTag = document.createElement("section");
sectionTag.id = "containerr";

var canvasTag = document.createElement("canvas");
canvasTag.id = "drawing-board";

sectionTag.appendChild(canvasTag);
document.body.prepend(sectionTag);

const style = document.createElement("style");
style.innerHTML = `#drawing-board {
                    position: absolute;
                    border: 1px solid red;
                    z-index: 1000000;
                }`;
document.head.append(style);

const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = document.body.scrollHeight;

let isPainting = false;
let dragInputLineWidth = 5;

ctx.strokeStyle = "blue";


const startDraw = (e) => {

    isPainting = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop + window.pageYOffset);
    e.preventDefault();

};

const draw = (e) => {

    if (!isPainting) return;

    ctx.lineWidth = dragInputLineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = "round";
    ctx.strokeStyle = "blue";
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop + window.pageYOffset);
    ctx.stroke();
    e.preventDefault();
    console.log(e.clientY);
}

const endDraw = (e) => {

    if (!isPainting) return;

    isPainting = false;
    ctx.stroke();
    ctx.closePath();
    e.preventDefault();

}

const clear = (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mouseout', endDraw);

canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', endDraw);

window.addEventListener("scroll", () => {
    //canvas.height = window.innerHeight + window.pageYOffset;
    console.log(document.body.scrollHeight);
    console.log(window.pageYOffset + window.innerHeight);
})