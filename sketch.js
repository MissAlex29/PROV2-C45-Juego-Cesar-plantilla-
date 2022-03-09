//Estados del Juego
var PLAY=1;
var END=0;
var gameState=1;

var sponge,plate,cat,dog,plateGroup,petsGroup, score,r,randomPlate,position;
var spongeImage , pet1Img, pet2Img ,plate, gameOverImage;
var gameOverSound;

function preload(){
  
   
}

function setup() {
  createCanvas(800, 600);
  background(0);
  
  
}

function draw() {
  background(125,30,100);

  
  
  drawSprites();
 
}


function pets(){
  
}

function showPlates(){
  
}