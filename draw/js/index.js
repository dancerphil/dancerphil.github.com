/**
 * inspired from codepen
 */

const STRATEGY = '16';

const canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const context = canvas.getContext('2d');

const getPathsRepeated = (path, repeat) => {
    const paths = []
    for(let index = 1; index < repeat; index++) {
        paths.push(
            path.map(item => {
                const angle = Math.PI * 2 * index / repeat;
                const tx = item.x - canvas.width / 2;
                const ty = - (item.y - canvas.height / 2);
                const x = tx * Math.cos(angle) + ty * Math.sin(angle);
                const y = - tx * Math.sin(angle) + ty * Math.cos(angle);
                return {
                    x: x + canvas.width / 2,
                    y: -y + canvas.height / 2,
                }
            })
        );
    }
    return paths;
}

const getPaths = (path) => {
    switch (STRATEGY) {
        case '16':
            return getPathsRepeated(path, 16);
        default:
            return getPathsRepeated(path, 16);
    }
}

/* ---- start, move, stop ----*/

const start = function(coors) {
    context.beginPath();
    this.path.push(coors);
    context.moveTo(coors.x, coors.y);
    this.isDrawing = true;
};

const move = function(coors) {
    if (this.isDrawing) {
        this.path.push(coors);
        context.strokeStyle = "#fff";
        context.lineJoin = "round";
        context.lineWidth = 3;
        context.lineTo(coors.x, coors.y);
        context.stroke();
    }
};

const stop = function(coors) {
    if (this.isDrawing) {
        this.touchmove(coors);
        this.isDrawing = false;
        const paths = getPaths(this.path);
        paths.map(p => {
            context.beginPath();
            context.moveTo(p[0].x, p[0].y);
            for(let i = 1; i < p.length; i++) {
                context.strokeStyle = "#888";
                context.lineJoin = "round";
                context.lineWidth = 3;
                context.lineTo(p[i].x, p[i].y);
                context.stroke();
            }
        })
        this.path = [];
    }
};

const drawer = {
    isDrawing: false,
    path: [],
    mousedown: start,
    mousemove: move,
    mouseup: stop,
    touchstart: start,
    touchmove: move,
    touchend: stop
};

const draw = function(e) {
    const coors = {
        x: e.clientX || e.targetTouches[0].pageX,
        y: e.clientY || e.targetTouches[0].pageY
    };
    drawer[e.type](coors);
}

canvas.addEventListener('mousedown', draw, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', draw, false);
canvas.addEventListener('touchstart', draw, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('touchend', draw, false);

const go = function(e) {
    this.parentNode.removeChild(this);
    draw(e);
};

const goDiv = document.getElementById('go');
goDiv.addEventListener('mousedown', go, false);
goDiv.addEventListener('touchstart', go, false);

// prevent elastic scrolling
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
// end body:touchmove
window.onresize = function(e) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
};
