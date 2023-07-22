const mountGoblin = {
    basicChestProbability : 50,

    onload : function(){
        land.addLand("Mount Goblin", 28, 1, this.load.bind(this), this.getText.bind(this))
    },
    
    setBasicChestProbability : function(value){
        this.basicChestProbability = value
    },
    
    load : function(){
        for(var i = 1; i < quest.things.length; i++){
            if(r_coin()) {
                if(i < 12 || i > 15){
                    if(r_oneOutOf(this.basicChestProbability)) {
                        this.basicChestProbability += 50
                        quest.things[i] = quest.makeBasicChest()

                    } else if(r_oneOutOf(7)) {
                        quest.things[i] = land.create(data.mobs.nastyGoblin)

                    } else
                        quest.things[i] = land.create(data.mobs.sickGoblin)

                } else {
                    quest.things[i] = land.create(data.mobs.teneciousGoblin)

                }
            }
        }
    },
    
    getText : getText.mountGoblin

}
