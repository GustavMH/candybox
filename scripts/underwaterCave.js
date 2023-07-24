const underwaterCave = {
    size : 54,
    bubbles : [],
    
    onload : function(){
        quest.effects = { bubbles: [], whale: [] }
        land.addLand("Underwater cave", this.size, 2, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    
    move : function(){
        /* Add the whale ascii */
        quest.effects.whale = (quest.things[51].type != "mob")
            ? [[data.ascii.whale, 4, 15]] : []

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
    
    load : function(){
        const intervals = [
            // oneOutOf prob, start, end, type
            { inverse_probability: 2, start_index: 3, end_index: 26, type: "fish" },
            { inverse_probability: 3, start_index: 26, end_index: 36, type: "eel" },
            { inverse_probability: 2, start_index: 36, end_index: 47, type: "fish" },
            { inverse_probability: 1, start_index: 51, end_index: 52, type: "whale" },
            { inverse_probability: (10/9), start_index: 48, end_index: 51, type: "octopus" }
        ]

        quest.things.forEach((_, i) => {
            const interval = intervals.find(({ start_index }) => i >= start_index) || {}
            console.log(interval)
            const { inverse_probability, type } = interval
            if (r_oneOutOf(inverse_probability))
                quest.things[i] = land.create(data.mobs[type])
        })
    },
    getText : getText.underwaterCave
}
