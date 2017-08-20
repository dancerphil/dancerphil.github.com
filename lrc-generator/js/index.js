window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new window.AudioContext();
var source;
function playSound(arraybuffer) {
    context.decodeAudioData(arraybuffer, function (buf) {
        source = context.createBufferSource();
        source.connect(context.destination);
        source.buffer = buf;
        source.start(0);
    });
}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    console.log(files);
    playFile(files[0]);
}

function playFile(file) {
    var freader = new FileReader();

    freader.onload = function (e) {
        console.log(e.target.result);
        playSound(e.target.result);
    };
    freader.readAsArrayBuffer(file);
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);