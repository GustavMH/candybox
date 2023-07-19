var developperComputer = {
    
    // Variables
    size : 22,
    won : false,
    letter : 0,

    // Functions
    onload : function(){
        land.addLand("Developper's computer", this.size, 11, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    setWon : function(value){
        this.won = value;
        if(this.won == true){
            tabs.enable(4);
            html.showButton("tab_computer");
        }
        inventory.updateOnPage();
    },
    
    move : function(){
        
    },
    
    useLetter : function(){
        var index = quest.getCharacterIndex();
        
        if(quest.weAreQuestingRightNow && land.getLandIndexFromName("Developper's computer") == quest.currentLandIndex){
            if(quest.things[this.size-1].text == "DEV" && index == this.size-2){
                quest.things[this.size-1].hp = 0;
            }
        }
    },
    
    load : function(){
        // Add the dev
        quest.things[21] = land.create(data.mobs.dev)
        
        // Add bugs
        for(var i = 1; i <= 20; i++){
            if(random.flipACoin()){
                quest.things[i] = land.create(data.mobs.bug)
            }
        }
        
        // Choose letter
        this.letter = 65 + random.getRandomIntUpTo(25);
    },
    
    getText : function(){
        var textBefore = "";
        var lines = this.asciiComputer.slice(0);
        var x = 0;
        var y = 0;
        var pos = 0;
        var index = quest.getCharacterIndex();
        
        if(index == this.size-2) textBefore = "<b>You must press a certain key to kill the developper.</b>\n\n";
        
        for(var i = 0; i < 100; i++){
            x = random.getRandomIntUpTo(65);
            y = random.getRandomIntUpTo(9);
            lines[y] = lines[y].replaceAt(x, random.pickRandomly(["$", "%", "*", ":", ";", ",", ".", "-", "+", "_", "-", "d", "n", "c"]));
        }
        
        // Add things
        for(var i = 0; i < this.size; i++){
            if(quest.things[i].type != "none"){
                pos = random.getRandomIntUpTo(9);
                lines[pos] = lines[pos].replaceAt(i*3, quest.things[i].text);
            }
        }
        
        return textBefore + lines.join("");
    },

    // Ascii
    asciiComputer :
[
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"                                                                  \n"
]
    
};
