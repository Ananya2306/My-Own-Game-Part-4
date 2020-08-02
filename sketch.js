//var gameState = "serve";
var tank ,tankUp,tankDown, tankLeft, tankRight;
var canvas,bg;
var e1,w1;
var start;
var b1;
function preload(){
bg = loadImage("images/bg1.png");
  tankUp = loadImage("images/tankGU.png");
  tankDown = loadImage("images/tankGD.png");
  tankLeft = loadImage("images/tankGL.png");
  tankRight = loadImage("images/tankGR.png");

  en1 = loadImage("images/tankW1D.png");
  en2 = loadImage("images/tankW2.png");
}

function setup() {
   canvas = createCanvas(1364,624);

  tank = createSprite(40, 567, 0.5, 0.5);
  tank.addImage(tankRight);
  tank.scale = 0.19;

b1 = new Bullet(110,70);
b2 = new Bullet(630,227);
b3 = new Bullet(495,212);
b4 = new Bullet(750,97);
b5 = new Bullet(1135,212);
b6 = new Bullet(350,312);
b7 = new Bullet(1145,405);
b8 = new Bullet(1165,336);
b9 = new Bullet(1263,517);
b10 = new Bullet(990,282);
b11 = new Bullet(420,517);
b12 = new Bullet(740,337);


e1 = createSprite(115,67,0.5,0.5);
e1.addImage(en1);
e1.scale = 0.24;

e2 = createSprite(630,227,0.5,0.5);
e2.addImage(en2);
e2.scale = 0.24;
e2.rotation = 90;

e3 = createSprite(495,212,0.5,0.5);
e3.addImage(en1);
e3.scale = 0.24;
e3.rotation = 90;

e4 = createSprite(750,97,0.5,0.5);
e4.addImage(en2);
e4.scale = 0.24;
e4.rotation = 180;

e5 = createSprite(1135,212,0.5,0.5);
e5.addImage(en1);
e5.scale = 0.24;
e5.rotation = 90;

e6 = createSprite(350,312,0.5,0.5);
e6.addImage(en2);
e6.scale = 0.24;
e6.rotation = 90;

e7 = createSprite(1145,405,0.5,0.5);
e7.addImage(en2);
e7.scale = 0.24;
e7.rotation = 180;

e8 = createSprite(1150,336,0.5,0.5);
e8.addImage(en1);
e8.scale = 0.24;
e8.rotation = 90

e9 = createSprite(1263,517,0.5,0.5);
e9.addImage(en2);
e9.scale = 0.24;
e9.rotation = 180;

e10 = createSprite(990,282,0.5,0.5);
e10.addImage(en2);
e10.scale = 0.24;

e11 = createSprite(420,517,0.5,0.5);
e11.addImage(en2);
e11.scale = 0.24;

e12 = createSprite(740,337,0.5,0.5);
e12.addImage(en1);
e12.scale = 0.24;
e12.rotation = 90;

  w1 = createSprite(40,274,70,500);
  w1.visible = false;
  w2 = createSprite(680,20,1350,40);
  w2.visible = false;
  w3 = createSprite(680,605,1370,40);
  w3.visible = false;
  w4 = createSprite(1330,360,70,500); 
  w4.visible = false;
  w5 = createSprite(620,545,450,20);
  w5.visible = false;
  w6 = createSprite(180,505,50,180);
  w6.visible = false;
  w7 = createSprite(100,360,80,20);
  w7.visible = false;
  w8 = createSprite(295,530,60,120);
  w8.visible = false;
  w9 = createSprite(230,420,150,20);
  w9.visible = false;
  w10 = createSprite(290,360,40,130);
  w10.visible = false;
  w11 = createSprite(240,297,150,30);
  w11.visible = false;
  w12 = createSprite(180,280,35,30);
  w12.visible = false;
  w13 = createSprite(315,260,295,24);
  w13.visible = false;
  w14 = createSprite(425,375,70,250);
  w14.visible = false;
  w15 = createSprite(520,315,140,24);
  w15.visible = false;
  w16 = createSprite(590,370,110,30);
  w16.visible = false;
  w17 = createSprite(560,340,50,40);
  w17.visible = false;
  w18 = createSprite(520,430,140,20);
  w18.visible = false;
  w19 = createSprite(625,475,200,20);
  w19.visible = false;
  w20 = createSprite(310,182,300,20);
  w20.visible = false;
  w21 = createSprite(570,220,35,80);
  w21.visible = false;
  w22 = createSprite(700,250,50,100);
  w22.visible = false;
  w23 = createSprite(820,430,300,23);
  w23.visible = false;
  w24 = createSprite(1080,490,40,120);
  w24.visible = false;
  w25 = createSprite(915,485,270,25);
  w25.visible = false;
  w26 = createSprite(1000,365,440,24);
  w26.visible = false;
  w27 = createSprite(635,190,170,15);
  w27.visible = false;
  w28 = createSprite(810,350,50,50);
  w28.visible = false;
  w29 = createSprite(1205,400,35,170);
  w29.visible = false;
  w30 = createSprite(1135,550,150,20);
  w30.visible = false;
  w31 = createSprite(1185,170,40,190);
  w31.visible = false;
  w32 = createSprite(185,132,40,120);
  w32.visible = false;
  w33 = createSprite(360,87,400,20);
  w33.visible = false;
  w34 = createSprite(430,157,60,60);
  w34.visible = false;
  w35 = createSprite(355,137,90,15);
  w35.visible = false;
  w36 = createSprite(630,142,350,30);
  w36.visible = false;
  w37 = createSprite(810,137,60,110);
  w37.visible = false;
  w38 = createSprite(900,87,130,12);
  w38.visible = false;
  w39 = createSprite(895,187,150,15);
  w39.visible = false;
  w40 = createSprite(940,152,50,60);
  w40.visible = false;
  w41 = createSprite(1030,137,150,30);
  w41.visible = false;
  w42 = createSprite(1070,138,60,115);
  w42.visible = false;
  w43 = createSprite(1135,185,50,15);
  w43.visible = false;
  w44 = createSprite(958,245,500,24);
  w44.visible = false;
  w45 = createSprite(1055,312,300,15);
  w45.visible = false;

}
function draw() {
  background(bg);

if(keyDown(UP_ARROW)){
    tank.y-=5;
    tank.addImage(tankUp);
    tank.scale = 0.19;
 }
 if(keyDown(DOWN_ARROW)){
  tank.y+=5;
  tank.addImage(tankDown);
  tank.scale = 0.19;
}
if(keyDown(RIGHT_ARROW)){
  tank.x+=5;
  tank.addImage(tankRight);
  tank.scale = 0.19;
}
if(keyDown(LEFT_ARROW)){
  tank.x-=5;
  tank.addImage(tankLeft);
  tank.scale = 0.19;
}
console.log(tank.x);
console.log(tank.y);



/*
if(tank.isTouching(w1) || tank.isTouching(w2) || tank.isTouching(w3) || tank.isTouching(w4) || tank.isTouching(w5)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w6) || tank.isTouching(w7) || tank.isTouching(w8) || tank.isTouching(w9) || tank.isTouching(w10)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w11) || tank.isTouching(w12) || tank.isTouching(w13) || tank.isTouching(w14) || tank.isTouching(w15)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w16) || tank.isTouching(w17) || tank.isTouching(w18) || tank.isTouching(w19) || tank.isTouching(w20)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w21) |
 tank.isTouching(w22) || tank.isTouching(w23) || tank.isTouching(w24) || tank.isTouching(w25)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w26) || tank.isTouching(w27) || tank.isTouching(w28) || tank.isTouching(w29) || tank.isTouching(w30)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w31) || tank.isTouching(w32) || tank.isTouching(w33) || tank.isTouching(w34) || tank.isTouching(w35)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w36) || tank.isTouching(w37) || tank.isTouching(w38) || tank.isTouching(w39) || tank.isTouching(w40)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w41) || tank.isTouching(w42) || tank.isTouching(w43) || tank.isTouching(w44) || tank.isTouching(w45)){
  tank.x = 40;
  tank.y = 565;
}*/

  drawSprites();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();

b1.moveYd();
b2.moveYd();
b3.moveXl();
b4.moveXl();
b5.moveXl();
b6.moveYd();
b7.moveXl();
b8.moveXl();
b9.moveXl();
b10.moveXr();
b11.moveXr();
b12.moveXl();

  fill("red");
  textStyle("bold");
  textSize(24);
  text("~Start~",3,540);

}