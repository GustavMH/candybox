var yourself = {
    size : 2,
    canSurpass : false,
    end : false,

    onload : function(){
        land.addLand("Yourself", this.size, 7, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    
    move : function(){
        if(quest.things[0].type == "character" && quest.things[1].type == "mob"){
            if(this.end == false){
                quest.things[1].max_hp = quest.things[0].max_hp
                quest.things[1].hp = quest.things[0].hp
            }
            else{
                quest.things[1].hp = 0
            }
        }
    },
    
    setCanSurpass : function(value){
        this.canSurpass = value
    },
    
    load : function(){
        quest.things[1] = this.makeYourself()
        this.end = false
    },
    
    getText : getText.yourself,
    
    makeYourself : function(){
        var index = quest.getCharacterIndex()
        
        return land.create(data.mobs.yourself)
    }
    
}
