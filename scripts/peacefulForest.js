const peacefulForest = {
    poniesEncountered : 0,
    
    onload : function() {
        land.addLand("The peaceful forest", 30, 0, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },

    wpy: function() {},

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
    load : () => spawn_by_interval(quest.things, data.lands.peacefulForest.spawning_intervals),
    getText : () => get_text(quest.things, data.lands.peacefulForest)
}
