var castleEntrance = {
    size : 30,
    timeSpent : 0, // Time spent since the beginning of the quest
    thereIsAMagicBall : false, // True if there's a magic ball right now
    magicBallX : 0, // X position of the magic ball
    magicBallY : 0, // Y position of the magic ball

    onload : function(){
        land.addLand("Castle's entrance", this.size, 3, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function() {
        // Make enemies go toward the left
        for(var i = 0; i < quest.things.length; i++){
            if(quest.things[i].type == "mob" && quest.things[i-1].type == "none"){
                quest.things[i-1] = quest.things[i];
                quest.things[i] = quest.makeNoneThing();
            }
        }
        
        // We add ennemies
        if(this.timeSpent < 1000){ // We must stop adding ennemies after a while, else the player could be blocked in certain conditions
            if(this.timeSpent % 16 == 5){
                // If there's nothing here, we add a knight
                if(quest.things[29].type == "none") quest.things[29] = land.create(data.mobs.knight)
            }
            else if(this.timeSpent % 30 == 29){
                // If there's nothing here, we add a guard
                if(quest.things[29].type == "none") quest.things[29] = land.create(data.mobs.guard)
            }
        }
        
        // We handle the magic ball if we spent at least four movements
        if(this.timeSpent > 4){
            // If there is already a magic ball
            if(this.thereIsAMagicBall){
                var index = quest.getCharacterIndex();
                
                // If the magic ball just hit the player !
                if(Math.abs(this.magicBallX - (index*3 + 1)) <= 1 && this.magicBallY == 19){
                    // No more magic ball
                    this.thereIsAMagicBall = false;
                    
                    // We teleport the player
                    quest.things[0] = quest.things[index];
                    quest.things[index] = quest.makeNoneThing();
                } else {
                    // If the magic ball is at the right of the player or is above the steps (it mustn't be above the steps)
                    if(this.magicBallX > index*3 + 1 || this.magicBallX > 77){
                        this.magicBallX -= 1;
                    }
                    // Else, if it's at the left
                    else if(this.magicBallX < index*3 + 1){
                        this.magicBallX += 1;
                    }
                    // If the magic ball isn't already just above the lawn and we're not too far from the play horizontally
                    if(this.magicBallY < 19 && Math.abs(this.magicBallX - index*3) < (19 - this.magicBallY)*3){
                        this.magicBallY += 1;
                    }
                }
            } else {
                this.thereIsAMagicBall = true;
                this.magicBallX = 83;
                this.magicBallY = 1;
            }
        }
        
        // We increment the time spent
        this.timeSpent += 1;
    },
    
    load : function(){
        [10,12,15,16].forEach(i => quest.things[i] = land.create(data.mobs.guard))

        this.timeSpent = 0;
    },

    getText : getText.castleEntrance
}
