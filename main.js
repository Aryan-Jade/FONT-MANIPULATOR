noseX = 0;
noseY = 0;

difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 120);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is initialized");
}

function draw(){
    background('#bda1ed');
    fill('#84f5bb');
    stroke('#a666ff');
    textSize(difference);
    text('ARYAN', noseX, noseY);
    fill(0, 102, 153);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + "nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference = " + difference);

        document.getElementById("size_of_text").innerHTML = difference + "px";
    }
}