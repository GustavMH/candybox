const castleEntrance = {
    onload : function(){
        quest.effects = { magicBall: [], timeSpent: [[], 0, 0] }
        land.addLand("Castle's entrance", 30, 3, this.load.bind(this), this.getText.bind(this), this.move.bind(this))
    },
    move : function() {
        /* HACK */
        time_spent = quest.effects.timeSpent[1]

        quest.things.forEach(({ type }, i) => {
            if(type == "mob" && quest.things[i-1].type == "none"){
                quest.things[i-1] = quest.things[i]
                quest.things[i] = quest.makeNoneThing()
            }
        })

        // Player could be blocked, stop spawning >1000 ticks
        if(timeSpent < 1000 && quest.things[29].type == "none") {
            if(timeSpent % 16 == 5)
                quest.things[29] = land.create(data.mobs.knight)
            else if(timeSpent % 30 == 29)
                quest.things[29] = land.create(data.mobs.guard)
        }

        /* ball moves 1 character toward the player
         * and shouldn't be above the steps */
        if(timeSpent > 4) {
            const magic_ball = quest.effects.magicBall[0]
            const index = quest.getCharacterIndex()

            if(magic_ball) {
                const [_, x, y] = magic_ball

                if(x - (index*3 + 1) == 0 && y == 19){
                    quest.effects.magicBall = []
                    
                    quest.things[0] = quest.things[index]
                    quest.things[index] = quest.makeNoneThing()
                } else {
                    quest.effects.magicBall = [
                        ["*"],
                        x + (x > 77 ? -1 : Math.sign(x-(index*3+1))),
                        y + ((y < 19 && Math.abs(x - index*3) < (19 - y)*3) ? +1 : 0)
                    ]
                }
            } else
                quest.effects.magicBall = [["*"], 83, 1]
        }
        
        // We increment the time spent
        quest.effects.timeSpent[1] += 1
    },
    load : () => spawn_by_interval(quest.things, data.lands.castleEntrance.spawning_intervals),
    getText : () => get_text(quest.things, data.lands.castleEntrance, quest.effects)
}
