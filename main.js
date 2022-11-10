objects = [];
status ="";

function setup()
{
    canvas = createCanvas(480,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detected";
    value = document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function draw()
{
    

