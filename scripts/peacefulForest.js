var peacefulForest = {
    /* TODO peaceful forest bliver to land objektet???? */
    
    // Variables
    basicChestProbability : 100,
    poniesEncountered : 0,
    
    // Functions
    onload : function(){
        land.addLand("The peaceful forest", 30, 0, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    setBasicChestProbability : function(value){
        this.basicChestProbability = value;
    },
    
    move : function(){
        // Iterate over all things
        for(var i = 0; i < quest.things.length; i++){
            // If it's a wood poney (wood poneeeey \o/)
            if(quest.things[i].text == "WPY"){
                // We make it move if possible
                if(random.flipACoin()){
                    // If we can move it to the right
                    if(quest.things[i+1].type == "none"){
                        // We move it to the right
                        quest.things[i+1] = quest.things[i];
                        quest.things[i] = quest.makeNoneThing();
                    }
                }
                else{
                    // If we can move it to the left
                    if(quest.things[i-1].type == "none"){
                        // We move it to the left
                        quest.things[i-1] = quest.things[i];
                        quest.things[i] = quest.makeNoneThing();
                    }
                }
            }
        }
    },
    
    load : function(){
        var addedAPoney = false; // Will be true if we added a pony. Useful to avoid adding two ponies in the same quest
        
        for(var i = 1; i < quest.things.length; i++){
            if(random.flipACoin()){
                // 1 chance out of x we spawn a wood poney !!!! (if we didn't already add one)
                if(random.oneChanceOutOf(300) && addedAPoney == false){
                    addedAPoney = true;
                    quest.things[i] = land.create(data.mobs.woodPony)
                }
                // 1 chance out of x we spawn a CHS (chest !!)
                else if(random.oneChanceOutOf(this.basicChestProbability)){
                    this.setBasicChestProbability(this.basicChestProbability + 50);
                    quest.things[i] = land.create(data.mobs.basicChest)
                }
                // Else we spawn a tree
                else quest.things[i] = land.create(data.mobs.tree);
            }
        }
        
        if(addedAPoney){
            this.setPoniesEncountered(this.poniesEncountered + 1);
        }
    },
    
    setPoniesEncountered : function(value){
        this.poniesEncountered = value;
    },
    
    getText : function(){
        /* TODO .join ? */
        var text = "";
        
        for(var i = 0; i < quest.things.length; i++){
            text += quest.things[i].text;
        }
        
        return text;
    }
};
