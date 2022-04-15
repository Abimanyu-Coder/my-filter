mustachX = 0;
mustachY = 0;

l_EarX = 0;
l_EarY = 0;

r_EarX = 0;
r_EarY = 0;

function preload()
{
    my_mustach = loadImage('https://i.postimg.cc/wjJV90w9/mustach.png');
    my_left_ear = loadImage(' https://i.postimg.cc/rwFqf6BH/right-ear.png');
    my_right_ear = loadImage('https://i.postimg.cc/W3JN0MBb/left-ear.jpg');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialzied");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustachX = results[0].pose.nose.x-15;
        mustachY = results[0].pose.nose.y-1;
        l_EarX = results[0].pose.leftEar.x-5;
        l_EarY = results[0].pose.leftEar.y-15;
        r_EarX = results[0].pose.rightEar.x-20;
        r_EarY = results[0].pose.rightEar.y-15;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(my_mustach, mustachX, mustachY, 30, 30);
    image(my_left_ear, l_EarX, l_EarY, 30, 30);
    image(my_right_ear, r_EarX, r_EarY, 30, 30);
    
}

function take_snapshot()
{
    save('myFilter.png');
}