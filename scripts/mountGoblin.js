const mountGoblin = {
    onload : function(){
        land.addLand("Mount Goblin", 28, 1, this.load.bind(this), this.getText.bind(this))
    },
    load : () => spawn_by_interval(quest.things, data.lands.mountGoblin.spawning_intervals),
    getText : () => get_text(quest.things, data.lands.mountGoblin)
}
