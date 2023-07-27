const underwaterCave = {
    onload : function(){
        quest.effects = { bubbles: [], whale: [] }
        land.addLand("Underwater cave", 54, 2, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    move : function(){
        /* TODO Effect are first active after first move*/

        /* Add the whale ascii */
        quest.effects.whale = (quest.things[51].type == "mob")
            ? [[data.ascii.whale, 2, 15]] : []

        // We make bubbles go up
        quest.effects.bubbles.forEach(([x,y], i) => {
            if(y == 0 || getXY(lines,y-1,x) != " ")
                quest.effects.bubbles.splice(i, 1)
            else
                quest.effects.bubbles[i].y -= 1
        })

        // We add bubbles if there isn't enough
        const lines = this.getText()
        if(quest.effects.bubbles.length < 4) {
            const [x, y] = r_choice(data.lands.underwaterCave.bubblesStartingPositions)
            if(getXY(lines,x,y) == " " && getXY(lines,x,y-1) == " ")
                quest.effects.bubbles.push([["&deg"], x, y])
        }
    },
    /* TODO BUG spawning density seems low */
    load : () => spawn_by_interval(quest.things, data.lands.underwaterCave.spawning_intervals),
    getText : () => get_text(quest.things, data.lands.underwaterCave, quest.effects)
}
