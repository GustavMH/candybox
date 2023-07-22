var chuckNorris = {
    
    // Variables
    size : 35,
    currentFact : "",
    firstContact : false,
    timeSpent : 0,
    nextPunch : 0,

    // Functions
    onload : function(){
        land.addLand("Chuck Norris", this.size, 8, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    setNextPunch : function(){
        this.nextPunch = 3 + random.getRandomIntUpTo(7);
    },
    
    move : function(){
        // Get indexes 
        var index = quest.getCharacterIndex();
        var norrisIndex = this.getChuckNorrisIndex();
        
        // Increase the fact step
        this.timeSpent += 1;
        if(this.timeSpent % 15)
            this.currentFact = r_choice(data.chuckNorrisFacts);

        // Possibly make some special action
        if(norrisIndex != -1){
            if(this.firstContact == false && index >= 20){
                if(quest.things[norrisIndex - 1].type == "none"){
                    quest.things[norrisIndex - 1] = quest.things[norrisIndex];
                    quest.things[norrisIndex] = quest.makeNoneThing();
                } else this.firstContact = true;
            } else if(this.firstContact == true) {
                // Punch
                if(index > 0 && this.timeSpent % this.nextPunch == 0 && index == norrisIndex - 1 && quest.things[index - 1].type == "none"){
                    quest.things[index - 1] = quest.things[index];
                    quest.things[index] = quest.things[norrisIndex];
                    quest.things[norrisIndex] = quest.makeNoneThing();
                    this.setNextPunch();
                }
            }
        }
        
        // Increase the time spent
        this.timeSpent += 1;
    },
    
    getChuckNorrisIndex : function() {
        return quest.things.findIndex(({text}) => text == "CHN")
    },

    load : function(){
        this.setNextPunch();
        quest.things[30] = land.create(data.mobs.chuckNorris)
        this.firstContact = false;
        this.timeSpent = 0;
    },

    getText : getText.chuckNorris
}
