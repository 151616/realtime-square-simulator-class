nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function draw(){
    background("#ADD8E6");
    fill("#00008b");
    stroke("#ADD8E6");
    square(nosex, nosey, difference);
    document.getElementById("square_size").innerHTML = "Width and Height of the square will be " + difference + " px.";

}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("Nose X = "+ nosex +"Nose Y ="+ nosey);
    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = floor(leftwristx - rightwristx);
    console.log("Left Wrist = " + leftwristx + "Right Wrist = " + rightwristx + "Difference = " + difference);
}
}
