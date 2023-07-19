var mountGoblin = {

    // Variables
    basicChestProbability : 50,

    // Functions
    onload : function(){
        land.addLand("Mount Goblin", 28, 1, this.load.bind(this), this.getText.bind(this));
    },
    
    setBasicChestProbability : function(value){
        this.basicChestProbability = value;
    },
    
    load : function(){
        for(var i = 1; i < quest.things.length; i++){
            if(random.flipACoin()){
                // If we're not at the top of the mount
                if(i < 12 || i > 15){
                    // 1 chance out of x we spawn a CHS (chest !!)
                    if(random.oneChanceOutOf(this.basicChestProbability)){
                        this.setBasicChestProbability(this.basicChestProbability + 50);
                        quest.things[i] = quest.makeBasicChest();
                    } // 1 chance out of 7 we spaw a GSB
                    else if(random.oneChanceOutOf(7)) quest.things[i] = land.create(data.mobs);
                    // Else we spawn a GOB
                    else quest.things[i] = land.create(data.mobs);
                } else {
                    quest.things[i] = land.create(data.mobs);
                }
            }
        }
    },
    
    getText : function(){
        var text = "";
        
        text += "                                    "; for(var i = 12; i < 16; i++) text += quest.things[i].text; text += "\n";
        text += "                           "; for(var i = 9; i < 12; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\/ \\"; for(var i = 16; i < 19; i++) text += quest.things[i].text; text += "\n";
        text += "                  "; for(var i = 6; i < 9; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\  /   \\  \\  / \\/ \\/ \\"; for(var i = 19; i < 22; i++) text += quest.things[i].text; text += "\n";
        text += "         "; for(var i = 3; i < 6; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\   \\ /   \\/     \\  \\/  /   \\  / \\/ \\/ \\"; for(var i = 22; i < 25; i++) text += quest.things[i].text; text += "\n";
        text += ""; for(var i = 0; i < 3; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\  /  /   \\   /    /       \\ /  /     \\/  /   \\  / \\/ \\/ \\"; for(var i = 25; i < 28; i++) text += quest.things[i].text;
    
        return text;
    }

};
