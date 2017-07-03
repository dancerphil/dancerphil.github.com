// No Library
// Also, I developed a Google Chrome App 
// https://goo.gl/1450r

var CONFIG_DRAW_REPEAT = 16;

function $(el) {return document.getElementById(el.replace(/#/,''));};
var canvas = $('#canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var context = canvas.getContext('2d');
var path = [];
var PI = 3.141592654;
var map = function(path, number) {
  for(var i = 0; i < path.length; i++) {
    var item = path[i];
    var tx = item.x - canvas.width / 2;
    var ty = - (item.y - canvas.height / 2);
    var x = tx * Math.cos(PI * 2 / number) + ty * Math.sin(PI * 2 / number);
    var y = - tx * Math.sin(PI * 2 / number) + ty * Math.cos(PI * 2 / number);
    item.x = x + canvas.width / 2;
    item.y = -y + canvas.height / 2;
  }
}
var start = function(coors) {
    context.beginPath();
    path.push(coors);
    context.moveTo(coors.x, coors.y);
    this.isDrawing = true;
};
var move = function(coors) {
    if (this.isDrawing) {
        path.push(coors);
        context.strokeStyle = "#fff";
        context.lineJoin = "round";
        context.lineWidth = 3;
        context.lineTo(coors.x, coors.y);
        context.stroke();
    }
};
var stop = function(coors) {
    if (this.isDrawing) {
        this.touchmove(coors);
        this.isDrawing = false;
        for(var count = 1; count < CONFIG_DRAW_REPEAT; count++){
          map(path, CONFIG_DRAW_REPEAT);
          context.beginPath();
          context.moveTo(path[0].x, path[0].y);
          for(var i = 1; i < path.length; i++) {
            context.strokeStyle = "#888";
            context.lineJoin = "round";
            context.lineWidth = 3;
            context.lineTo(path[i].x, path[i].y);
            context.stroke();
          }
        }
        path = [];
    }
};
var drawer = {
    isDrawing: false,
    mousedown: start,
    mousemove: move,
    mouseup: stop,
    touchstart: start,
    touchmove: move,
    touchend: stop
};
var draw = function(e) {
    var coors = {
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

var go = function(e) {
    this.parentNode.removeChild(this);
    draw(e);
};

$('#go').addEventListener('mousedown', go, false);
$('#go').addEventListener('touchstart', go, false);

// prevent elastic scrolling
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
// end body:touchmove
window.onresize = function(e) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
};