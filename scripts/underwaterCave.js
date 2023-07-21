var underwaterCave = {
    size : 54,
    bubbles : [],
    
    onload : function(){
        land.addLand("Underwater cave", this.size, 2, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        var defeated = false;
        if(quest.things[51].type != "mob") defeated = true; // The Whale has been defeated
        
        // We create a variable to store the lines of the underwater cave, depending on if the Whale is defeated or not
        var lines = [];
        if(defeated == false) lines = this.text.slice(0);
        else lines = this.textWithoutWhale.slice(0);
        
        // We make bubbles go up
        for(var i = this.bubbles.length - 1; i >= 0; i--){
            if(this.bubbles[i].y == 0 || lines[this.bubbles[i].y-1].charAt(this.bubbles[i].x) != " "){
                this.bubbles.splice(i, 1);
            }
            else this.bubbles[i].y -= 1;
        }

        // We add bubbles if there isn't enough
        if(this.bubbles.length < 4){
            var b = this.bubblesStartingPositions[random.getRandomIntUpTo(this.bubblesStartingPositions.length-1)];
            if(lines[b.y].charAt(b.x) == " " && lines[b.y-1].charAt(b.x) == " "){
                this.bubbles.push({x:0, y:0});
                this.bubbles[this.bubbles.length-1].x = b.x;
                this.bubbles[this.bubbles.length-1].y = b.y;
            }
        }
    },
    
    load : function(){
        for(var i = 1; i < quest.things.length; i++){
            if(i < 47){ // If we're before the place of octopus guardians
                if(i > 2){ // If we're underwater
                    if(i >= 26 && i <= 35){ // Eel zone
                        if(random.oneChanceOutOf(3))
                            quest.things[i] = land.create(data.mobs.eel);
                    } else {
                        if(random.flipACoin())
                            quest.things[i] = land.create(data.mobs.fish);
                    }
                }
            } else if(i <= 50){ // If we're before the whale
                if(random.getRandomIntUpTo(10) <= 9) // 9/10 chances
                    quest.things[i] = land.create(data.mobs.octopus);
            } else if(i == 51){ // It's the whale (52 and 53 must be void)
                quest.things[i] = land.create(data.mobs.theWhale);
            }
        }
    },
    getText : getText.underwaterCave
};
