var developperGarden = {
    size : 40,

    onload : function(){
        land.addLand("Developper's garden", this.size, 9, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    
    move : function(){
        var targetIndex = -1;
        
        // We make the gnomes shooting
        for(var i = 0; i < this.size; i++){
            if(quest.things[i].text == "CGG") {
                if(targetIndex != -1){ // If we have a target
                    quest.things[targetIndex].hp -= 30;
                    if(quest.things[targetIndex].hp <= 0){
                        if(quest.things[targetIndex].type != "character")
                            quest.things[targetIndex] = quest.makeNoneThing();
                        else
                            quest.things[targetIndex].hp = 1;
                        targetIndex = -1;
                    }
                }
            } else if(quest.things[i].type != "none") {
                targetIndex = i;
            }
        }
        
        // Increase the time spent
        this.timeSpent += 1;
    },
    
    load : function() {
        data.garden_gnome_spawn
            .forEach(([prob, pos]) => {
                if (r_oneOutOf(prob))
                    quest.things[pos] = land.create(data.mobs.cheatedGardenGnome)
            })
    },

    getText : function(){
        const lines = data.ascii.garden
        const line = quest.things
              .map(({type, text}, i) => type != "none" ? text : lines[13].slice(i*3, i*3+2))
        return [...lines.slice(0,12), ...line, ...lines.slice(14)].join("");
    }
}
