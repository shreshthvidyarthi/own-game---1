class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(windowWidth/2+50 ,windowHeight/2+50);
    player1.addImage("player1",player1Image);
    player1.scale = 1.5
    
    player2 = createSprite(windowWidth/2+50 ,windowHeight/2+50);
    player2.addImage("player2", player2Image);
    players=[player1,player2];
    player2.scale = 1.5

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 
                 var x =windowWidth/2
                 var y= windowHeight/2
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = windowWidth/2-allPlayers[plr].distance;
                     y=windowHeight/2;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                        fill("black");
                        textSize(25);
                        text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                      fill("white");
                     textSize(25);
                     text("Player :" + index + allPlayers[plr].score, 100,400 );
                 

                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     enemy = createSprite(random(100, windowWidth-50), 0, 100, 100);
                     enemy.velocityY = 6;
                     var rand = Math.round(random(1,3));
                     switch(rand){
                         case 1: enemy.addImage("enemy1",enemy1Img);
                         break;
                         case 2: enemy.addImage("enemy2", enemy2Img);
                         break;
                         case 3: enemy.addImage("enemy3", enemy3Img);
                         break;
                         
                     }
                     enemyGroup.add(enemy);
                     enemy.scale = 0.8
                 }
                 
                  if (player.index !== null) {
                     
                     for(var i=0;i<enemyGroup.length;i++){
                        if(enemyGroup.get(i).isTouching(players[player.index-1])){
                            
                           enemyGroup.get(i).destroy();
                     
                     console.log(player1);
                     player.update();
                        }
                    }
                    }
                
                  

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}