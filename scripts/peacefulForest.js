const peacefulForest = {
    basicChestProbability : 100,
    poniesEncountered : 0,
    
    onload : function(){
        land.addLand("The peaceful forest", 30, 0, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },

    wpy: function() {
    },

    move : function(){
        quest.things.forEach(({ text }, i) => {
            if(text == "WPY") {
                const direction = r_coin() ? -1 : 1
                if(quest.things[i+direction].type == "none"){
                    quest.things[i+direction] = quest.things[i]
                    quest.things[i] = quest.makeNoneThing()
                }
            }
        })
    },
    
    load : function(){
        const intervals = [
            // oneOutOf prob, start, end, type
            { inv_prob: 600, prob_add: -601, start: 0, end: 30, type: "woodPony" },
            { inv_prob: 100, prob_add: 100, start: 0, end: 30, type: "basicChest" },
            { inv_prob: 2, start: 0, end: 30, type: "tree" },
        ]

        quest.things
            .map((_, i) => intervals
                 .filter(({start, end}) => start <= i && i < end)
                 .reduce((acc, {inv_prob, type}, j) => acc || (r_oneOutOf(inv_prob) && [i, type]), false))
            .filter(a => a)
            .forEach(([i, type]) => quest.things[i] = land.create(data.mobs[type]))
    },

    getText : getText.peacefulForest
}
