const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var boy,walk;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;

function preload(){
    walk = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(500,700);

    boy = createSprite(250,550,100,100);
    boy.addAnimation("walking",walk);   
    boy.scale = 0.45;

    if(frameCount % 150 === 0){

        for(var i=0; i<100; i++){
            drops.push(new createDrop(random(0,500), random(0,500)));
        }

    }
}

function draw(){
    background("black");
    Engine.update(engine);
    console.log(frameCount);

    if(frameCount%80===0){
        rand = Math.round(random(1,4));
        switch(rand){
        case 1:
            image(thunder1,random(10,370), 0, 300, 300);
        break;
        case 2:
            image(thunder2,random(10,370), 0, 300, 300);
        break; 
        case 3:
            image(thunder3,random(10,370), 0, 300, 300);
        break;
        case 4:
            image(thunder4,random(10,370), 0, 300, 300);
        break;
        default: break;
        }
    }

    for(var i = 0; i<100; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

