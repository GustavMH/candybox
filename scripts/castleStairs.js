var castleStairs = {
    size : 19,
    timeSpent : 0,

    onload : function(){
        land.addLand("Castle's stairs", this.size, 4, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    
    move : function(){
        var index = quest.getCharacterIndex()
        
        // Make enemies go toward the left
        for(var i = 0; i < this.size-1; i++){
            if(quest.things[i].type == "mob" && quest.things[i-1].type == "none" && quest.things[i].text != "POC"){
                quest.things[i-1] = quest.things[i]
                quest.things[i] = quest.makeNoneThing()
            }
        }
        
        // Add ennemies, summoned by the necromancer !
       if(this.timeSpent > 1){
            // We get a random index where we'll try to add something
            var i = index + 2 + r_int(1+this.size - 1 - (index+2))
            // If there's nothing here
            if(i < this.size-1 && quest.things[i].type == "none"){
                // One chance out of x we make a pile of corpses
                if(r_oneOutOf(8))
                    quest.things[i] = land.create(data.mobs.pileOfCorpses)
                else
                    quest.things[i] = land.create(data.mobs.ghost)
            }
        }
        
        // We increase the time spent
        this.timeSpent += 1
    },
    
    load : function(){
        quest.things[this.size - 1] = land.create(data.mobs.necromancer)
        
        // We reset the time spent
        this.timeSpent = 0
    },

    getText : getText.castleStairs
}
