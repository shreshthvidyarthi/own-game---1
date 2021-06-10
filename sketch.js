var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var enemy , enemyGroup ; 

function preload(){
  player1Image = loadImage("PLAYERS/PLAYER1.png")
  player2Image = loadImage("PLAYERS/PLAYER2.png")
  enemy1Img = loadImage("ENEMY/V- 1.png")
  enemy2Img = loadImage("ENEMY/v-2.png")
  enemy3Img = loadImage("ENEMY/v-3.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  enemyGroup = new Group()
}

function draw() {
  background("white");
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
