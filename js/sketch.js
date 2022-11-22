var mySong, amplitude, t;

function preload() {
    mySong = loadSound('assets/massiveAttackAngel.mp3');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    amplitude = new p5.Amplitude();

    background(5);

    t = 0;

    rectMode(CENTER);
    play = false;
    var button = createButton("play");
    button.center();
    button.addClass('btn');

    button.mousePressed(function(){
        play = true;
        mySong.play();
        button.hide();
    });
}

function draw() {
    if(play == true){
        background(0,5);
        var level = amplitude.getLevel();

        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        //console.log(vol);

        console.log(x);

        var x = width * noise(t);
        var y = height * noise(t+5);

        noStroke();
        fill(col, col, col);
        ellipse(x, y, vol);

        t += 0.01;
    }
}