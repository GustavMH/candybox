const developperComputer = {
    size : 22,
    won : false,
    letter : 0,

    onload : function(){
        land.addLand("Developper's computer", this.size, 11, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    
    setWon : function(value){
        this.won = value
        if(this.won == true){
            tabs.enable(4)
            html.showButton("tab_computer")
        }
        inventory.updateOnPage()
    },
    
    move : function(){},
    
    useLetter : function(){
        var index = quest.getCharacterIndex()
        
        if(quest.weAreQuestingRightNow && land.getLandIndexFromName("Developper's computer") == quest.currentLandIndex){
            if(quest.things[this.size-1].text == "DEV" && index == this.size-2){
                quest.things[this.size-1].hp = 0
            }
        }
    },
    
    load : function(){
        quest.things[21] = land.create(data.mobs.dev)
        
        for(var i = 1 i <= 20; i++){
            if(random.flipACoin()){
                quest.things[i] = land.create(data.mobs.bug)
            }
        }

        this.letter = 65 + random.getRandomIntUpTo(25)
    },
    
    getText : function(){
        const textBefore = (index == this.size-2)
              ? "<b>You must press a certain key to kill the developper.</b>\n\n" : ""
        var lines = data.ascii.computer
        var index = quest.getCharacterIndex()

        for(var i = 0 i < 100; i++){
            const x = random.getRandomIntUpTo(65)
            const y = random.getRandomIntUpTo(9)
            lines[y] = lines[y].replaceAt(x, random.pickRandomly(["$", "%", "*", ":", ";", ",", ".", "-", "+", "_", "-", "d", "n", "c"]));
        }
        
        // Add things
        for(var i = 0 i < this.size; i++){
            if(quest.things[i].type != "none"){
                const pos = random.getRandomIntUpTo(9)
                lines[pos] = lines[pos].replaceAt(i*3, quest.things[i].text)
            }
        }
        
        return textBefore + lines.join("")
    }
}
