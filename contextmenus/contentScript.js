let section = `<section id="containerr">
    <div id="toolbar">
        <label for="stroke">Stroke</label>
        <input id="stroke" name='stroke' type="color">
        <label for="lineWidth">Line Width</label>
        <input id="lineWidth" name='lineWidth' type="number" value="5">
        <button id="clear">Clear</button>
    </div>
    <div class="drawing-board">
        <canvas id="drawing-board"></canvas>
    </div>
</section>`;
document.body.innerHTML = section + document.body.innerHTML;
const style  = document.createElement("style");
style.innerHTML = `#containerr {
                        height: 100%;
                        display: flex;
                       /* position: fixed; */
                        left:0px;
                        top:0px;
                        z-index: 10099;
                        border: 1px solid red;
                    }

                    #toolbar {
                        display: flex;
                        flex-direction: column;
                        padding: 5px;
                        width: 70px;
                        background-color: #202020;
                    }

                    #toolbar * {
                        margin-bottom: 6px;
                    }

                    #toolbar label {
                        font-size: 12px;
                    }

                    #toolbar input {
                        width: 100%;
                    }

                    #toolbar button {
                        background-color: #1565c0;
                        border: none;
                        border-radius: 4px;
                        color:white;
                        padding: 2px;
                    }`;
document.head.append(style);

const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //document.body.style.overflow = "auto";
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

// drawing 
const draw = (e) => {
    if(!isPainting) {
        return;
    }
    
    //document.body.style.overflow="hidden";

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
