var underwaterCave = {
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
        if(quest.effects.bubbles.length < 4) {
            const [x, y] = r_choice(data.land.underwaterCave.bubblesStartingPositions)
            if(getXY(lines,x,y) == " " && getXY(lines,x,y-1) == " ")
                quest.effects.bubbles.push([["&deg"], x, y])
        }
    },
    
    load : function(){
        const intervals = [
            // oneOutOf prob, start, end, type
            [2,       3, 26, "fish"   ],
            [3,      26, 36, "eel"    ],
            [2,      36, 47, "fish"   ],
            [1,      51, 52, "whale"  ],
            [(10/9), 48, 51, "octopus"]
        ]
        quest.things.forEach((_, i) => {
            const [prob, _1, _2, type] = intervals.find(([_, start]) => i >= start)
            if (r_oneOutOf(prob))
                quest.things[i] = land.create(data.mobs[type])
        })
    },
    getText : getText.underwaterCave
}
