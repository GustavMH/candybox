var drops = {
    getText : function() {
        return [
            `You found ${quest.candiesFound} cand${quest.candiesFound == 1 ? "y" : "ies"}.`,
            ...Object.values(objects.all)
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

            if (type == "candies") {
                n_candies = r_interval_or_number(drop)
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
