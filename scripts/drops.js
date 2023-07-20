var drops = {
    getText : function() {
        return [
            quest.candiesFound > 1
                ? "You found ${quest.candiesFound} candies."
                : "You found 1 candy.",
            ...objects.all
                .filter(({ found }) => found)
                .map(({ text }) => `<b>You found ${text}.</b>`),
            "",
            "Things found will be yours only if you finish the quest without dying."
        ].join("\n")
    },
    
    gainDrops : function(){
        // Gain the candies
        candies.setNbrOwned(candies.nbrOwned + quest.candiesFound)
        
        // Set .have if .found
        for(obj in objects.all) {
            if(objects.all[obj].found) {
                objects.setHaveObject(obj, true)
            }
        }
    },
    
    getAllDropsFromList : function(drops) {
        for (const type in drops) {
            const drop = drops[type]

            if (drop == "candies") {
                n_candies = Array.isArray(drop)
                    ? r_interval(...drop)
                    : drop

                quest.setCandiesFound(quest.candiesFound + n_candies)
            } else {
                if(r_oneOutOf(drop))
                    this.foundObject(type)
            }
        }
    },
    
    foundObject : function(name){
        // saves objects found in the objects.all dict
        if(objects.all[name].have == false)
            objects.all[name].found = true
    }
}
