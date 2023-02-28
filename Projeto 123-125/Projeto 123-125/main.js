difference= 0;
rightWrist= 0;
leftWrist= 0;
function setup() {
    video= createCapture(VIDEO);
    video.size(550, 500);
    canvas= createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("O pose net ta on");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}
function draw()  {
    background("white");
    textSize(difference);
    document.getElementById("font").innerHTML= "A largura e a altura deu= " + difference + "px";
    fill("#715ed1");
    stroke("#5ed1c6");
    text("Thomás", 100, 100);
}