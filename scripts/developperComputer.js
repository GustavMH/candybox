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
            if(r_coin()){
                quest.things[i] = land.create(data.mobs.bug)
            }
        }

        this.letter = 65 + r_int(1+25)
    },
    getText: getText.developperComputer
}
