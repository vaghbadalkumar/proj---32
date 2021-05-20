const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg = "day.jpg"

function preload() {

    backgroundImg = loadImage("day.jpg");
    getTime();

}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,490,1200,20);

    shelf1 = new Ground(500, 350, 300, 15);
    shelf2 = new Ground(900, 200, 200, 15);
    polygon = new Polygon(130, 200,20, 20);
    launcher = new Launcher(polygon.body, {x: 130, y: 180});

    block1 = new Box(400, 300, 30, 50);
    block2 = new Box(430, 300, 30, 50);
    block3 = new Box(460, 300, 30, 50);
    block4 = new Box(490, 300, 30, 50);
    block5 = new Box(520, 300, 30, 50);
    block6 = new Box(550, 300, 30, 50);
    block7 = new Box(580, 300, 30, 50);
    block8 = new Box(610, 300, 30, 50);
    block9 = new Box(415, 250, 30, 50);
    block10 = new Box(445, 250, 30, 50);
    block11 = new Box(475, 250, 30, 50);
    block12 = new Box(505, 250, 30, 50);
    block13 = new Box(535, 250, 30, 50);
    block14 = new Box(565, 250, 30, 50);
    block15 = new Box(595, 250, 30, 50);
    block16 = new Box(430, 200, 30, 50);
    block17 = new Box(460, 200, 30, 50);
    block18 = new Box(490, 200, 30, 50);
    block19 = new Box(520, 200, 30, 50);
    block20 = new Box(550, 200, 30, 50);
    block21 = new Box(580, 200, 30, 50);
    block22 = new Box(445, 150, 30, 50);
    block23 = new Box(475 ,150, 30, 50);
    block24 = new Box(505, 150, 30, 50);
    block25 = new Box(535, 150, 30, 50);
    block26 = new Box(565, 150, 30, 50);
    block27 = new Box(505, 100, 30 ,50);

    box1 = new Box(850, 150, 30, 50);
    box2 = new Box(880, 150, 30, 50);
    box3 = new Box(910, 150 ,30, 50);
    box4 = new Box(940, 150, 30, 50);
    box5 = new Box(865, 100, 30, 50);
    box6 = new Box(895, 100, 30, 50);
    box7 = new Box(925, 100, 30, 50);
    box8 = new Box(900, 50, 30, 50);

}

function draw(){
   
    if(background(bg))
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    shelf1.display();
    shelf2.display();
    polygon.display();
    launcher.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();

    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();



}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}


function keyPressed(){
    if(keyCode === 32){
        launcher.attach(polygon.body);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseType = await response.json();
    console.log(responseType);

    var dateTime = responseType.datetime;
    console.log(dateTime);

    var hour = dateTime.slice(11, 13);
    console.log(hour);

    if(hour>= 06 && hour<= 18){
        bg = "day.jpg"
    }
    else{
        bg = "night.jpg"
    }

    backgroundImg = loadImage(bg);
}
