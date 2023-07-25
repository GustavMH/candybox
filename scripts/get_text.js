const get_text = (things, {level, path}, effects={}) => {
    const non_chars = Object.values(effects).flat()
    const characters = things
          .map(({type, text}, i) => [type != "none" ? [text] : false, ...path[i]])
          .filter(([a]) => a)

    return layer_texts(
        level,
        [...non_chars, ...characters]
    ).join("\n")
}

const spawn_by_interval = (things, intervals) => things
      .reduce(([intervals, res], _, i) => {
          const idx = intervals
                .findIndex(({ inv_prob, after, before }) => {
                    const included = before > after
                          ?  (after <= i && i < before)
                          : !(after <= i && i < before)

                    return included && r_oneOutOf(inv_prob)
                })

          if (idx != -1) {
              const { inv_prob, prob_add, type } = intervals[idx]
              return [
                  replace_at_idx(
                      intervals,
                      idx, { ...intervals[idx], inv_prob: inv_prob + prob_add }
                  ),
                  [...res, [i, type]]
              ]
          } else
              return [intervals, res]
      }, [intervals, []])
      .at(1)
      .forEach(([i, type]) => quest.things[i] = land.create(data.mobs[type]))

const getText = {
    developperComputer : function(){
        const textBefore = (index == this.size-2)
              ? "<b>You must press a certain key to kill the developper.</b>\n\n" : ""

        const r_letter = () => [r_int(65), r_int(9), r_choice(["$", "%", "*", ":", ";", ",", ".", "-", "+", "_", "-", "d", "n", "c"])]
        const letters = Array(100).fill(0).map(_ => r_letter)

        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, r_int(9)])
              .filter(([a]) => a)

        const lines = layer_texts(
            data.ascii.computer,
            [...letters, ...characters]
        )

        return textBefore + lines.join("")
    },
    desert: function() {
        const masks = [37, 38, 40, 41, 42, 44, 45, 54, 55, 56, 57, 58, 59, 60, 61]
        return layer_text(
            data.ascii.desert,
            [["\\o/", quest.getPlayerIndex(), 12],
             make_mask(data.ascii.desert, masks, 12)]
        )
    },
    yourself: function(){
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, 0])
              .filter(([a]) => a)

        const text = layer_texts("      ", characters).join("")

        return `<span style='font-size:50px;'>${text}</span>`;
    },
    developperGarden: function() {
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, 13])
              .filter(([a]) => a)

        return layer_texts(
            data.ascii.garden,
            characters
        ).join("")
    },
    chuckNorris: function() {
        const size = chuckNorris.size

        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, 0])
              .filter(([a]) => a)

        const text = layer_texts(
            [Array(size).fill("___").join("")],
            characters
        ).join("")

        /* fact should be centered */
        const before = center_line(`"${this.currentFact}"`, size) + "\n\n\n\n"

        return before + text;
    },
    castleEntrance: function(){
        const land = data.lands.castleEntrance
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, height(land.height, i)])
              .filter(([a]) => a)

        /* TODO should be a character */
        const { x, y, exists } = castleEntrance.magicBall
        const magic_ball = [exists ? ["*"] : false, x, y]

        return layer_texts(
            data.ascii.castleEntrance,
            [...characters,
             magic_ball,
             make_mask(data.ascii.castleEntrance, land.mask, 18)]
        ).join("")
    },
    cow: function(){
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, /* TODO */ height(land.height, i)])
              .filter(([a]) => a)

        return layer_texts(
            data.ascii.cowLevel,
            characters
        ).join("")
    },
    castleKeep: function() {
        const characters = quest.things
              .map(({text, type}) => [
                  type != "none" ? text : false,
                  1 + this.firstCharacterPosition*3 + i*3,
                  this.floorPosition
              ]).filter(([text]) => text)

        return layer_texts(
            this.text,
            characters
        ).join("")
    },
    developperMoat: function(){
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, /* TODO */ height(land.height, i)])
              .filter(([a]) => a)

        return layer_texts(
            data.ascii.moat,
            [[data.ascii.platform, 18 + this.platformPosition*3, 3],
             ...characters]
        ).join("")
    },
    sea: function() {
        return layer_texts(
            data.ascii.sea,
            [data.ascii.boat, quest.getCharacterIndex(), 3]
        )
    },
    castleStairs: function(){
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, /* TODO */ height(land.height, i)])
              .filter(([a]) => a)

        return layer_texts(
            data.ascii.castleStairs,
            characters
        )
    },
    hell: function() {
        const before = [
            "<span style=\"color:red;\"><b>Press i to go up and k to go down.</b></span> (if it doesn't work, click on the page to gain focus)",
            "<span style=\"font-size:10px;\">"
        ].join("\n")

        /* TODO hell has multiple layers of enemies */
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, /* TODO */ height(land.height, i)])
              .filter(([a]) => a)

        const after = [
            Array(this.size).fill(data.ascii.lava[~~(this.laveLakeStep/2)]).join(""),
            "</span>"
        ].join("")

        return before + text + after;
    },
}
