
song="";
leftwristX = 0;
rightwristX = 0;
leftwristY = 0;
rightwristY = 0;

function preload(){
    song=loadSound("music_thinkstockphotos.jpg");
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("posenet is initialized");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw(){
    image(video,0,0,400,400);
    fill("FC2D03");
    stroke("FC2D03");
    if (scoreLeftWrist > 0.2) {


        circle(leftwristX, leftwristY, 20);
        in_no = Number(leftwristY);
        remove_decimal = floor(in_no);
        volume = remove_decimal / 500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    }
}