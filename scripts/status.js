/* TODO why 2? */
const status2 = {
    getText : function() {
        const lines_to_block = (lines) => {
            const max_len = lines
                  .map(line => line.length)
                  .reduce((a,b) => Math.max(a,b), 0)

            return lines.map(line => line.padEnd(max_len))
        }

        const block_from_thing = (t) => {
            return lines_to_block([
                `${t.text}`,
                `HP : ${t.hp}/${t.max_hp}`,
                `Weapon : ${t.weapon}`,
                `${t.description}`
            ])
        }

        /* MAKE rectangle text blocks, join horizontally */
        const char_idx = quest.getCharacterIndex()

        if (char_idx != -1) {
            const character  = quest.things[char_idx]
            const next_field = quest.things[char_idx + 1]

            const blocks = (next_field && next_field.type != "none")
                  ? [
                      block_from_thing(character),
                      ...next_field.type == "mob"  ? [lines_to_block(["", "VERSUS", "", ""])] : [],
                      ...next_field.type == "ally" ? [lines_to_block(["", "WITH",   "", ""])] : [],
                      block_from_thing(next_field)
                  ]
                  : [block_from_thing(character)]

            return blocks[0].map((_,i) => blocks.map(lines => lines[i]).join(" | ")).join("\n")
        } else {
            return ""
        }
    }
}
