function setup(){
    img=createCapture(VIDEO);
    img.size(500,500);
    canvas=createCanvas(500,500);
    poseNet= ml5.poseNet(img, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw()
{
    background("#e9f76a");
}