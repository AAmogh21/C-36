var gameState = 0;
var playerCount;

var database;

var form,player,game;



function setup(){
  
  createCanvas(1000,800);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  
}

function draw(){
  
}

