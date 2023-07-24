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
            .reduce(([intervals, res], _, i) => {
                  const spawn = intervals.reduce(
                      (spawn, { inv_prob, prob_add, start, end, type }, interval_idx) => {
                          if (!spawn &&
                              (start <= i && i < end) &&
                              (r_oneOutOf(inv_prob)))
                              return [interval_idx, i, type]
                      }, false)

                  if (spawn) {
                      const [interval_idx] = spawn
                      const interval       = intervals[interval_idx]
                      return [
                          replace_at_idx(
                              intervals,
                              interval_idx,
                              { inv_prob: interval.inv_prob + interval.prob_add, ...interval}
                          ),
                          [...res, spawn]
                      ]
                  }

                  return [intervals, res]
              }, [intervals, []])[1]
            .forEach(([_, i, type]) => quest.things[i] = land.create(data.mobs[type]))
    },

    getText : getText.peacefulForest
}
