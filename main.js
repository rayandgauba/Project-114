function preload(){}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(530,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose_x = " + results[0].pose.nose.x);
        console.log("nose_y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized!!");
}

function draw(){
    image(video,0,0,300,300);
}

function takeSnapshot(){
    save('My_filter_Image.png');
}