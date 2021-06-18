function preload(){

}

function setup(){
canvas = createCanvas( 640 , 480 );
canvas.position(110 , 250);
video = createCapture(VIDEO);
video.hide();

tint_color = "";
}

function draw(){

    fill ( 255 , 144 , 130 );
    stroke ( 255 , 0 , 0 );
    circle ( 50 , 50 , 80 );

    fill ( 255 , 144 , 130 );
    stroke ( 255 , 0 , 0 );
    rect ( 90 , 40 , 460 , 20 );

    fill ( 255 , 144 , 130 );
    stroke ( 255 , 0 , 0 );
    circle ( 560 , 50 , 80 );

    fill ( 255 , 144 , 130 );
    stroke ( 255 , 0 , 0 );
    rect ( 550 , 90 , 20 , 460 );

    
    fill ( 255 , 144 , 130 );
    stroke ( 255 , 0 , 0 );
    rect ( 40 , 90 , 20 , 460 );

    image(video, 100 , 100 , 420 , 420 );
    tint(tint_color);
}

function take_snapshot(){
    save('My_webapp.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}