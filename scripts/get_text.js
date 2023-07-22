replace_line = (text, linetext, i) = [...text.slice(0,i-1), linetext, ...text.slice(i+1)]
make_mask = (upper, masks, y) = [[upper[y].map((c, i) => i in masks ? c : false)], 0, y]
height = (map, i) => map.find(([x]) => x < i)[1]

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
    mountGoblin: function() {
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, /* TODO */ height(land.height, i)])
              .filter(([a]) => a)

        return layer_texts(
            data.ascii.mountGoblin,
            characters
        )
    },
    developperMoat: function(){
        return layer_texts(
            data.ascii.moat,
            [data.ascii.platform, 18 + this.platformPosition*3, 3],
            ["\\o/", quest.getCharacterIndex()*3, 3]
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
        // Create the text var
        var text = "";

        // Add the i & k instructions
        text += "<span style=\"color:red;\"><b>Press i to go up and k to go down.</b></span> (if it doesn't work, click on the page to gain focus)";
        text += "\n";

        // Open the span
        text += "<span style=\"font-size:10px;\">";
        text += "\n";

        // We add buffers
        for(var i = 0; i < 7; i++){
            if(i != this.bufferPosition){
                for(var j = 0; j < this.size; j++){
                    if(this.buffers[i][j].type != "none"){
                        text += this.buffers[i][j].text;
                    } else
                        text += "   ";
                }
            } else {
                for(var j = 0; j < this.size; j++){
                    if(quest.things[j].type != "none"){
                        text += quest.things[j].text;
                    } else
                        text += "   ";
                }
            }

            text += "\n";
        }

        // We make the lava lake
        for(var i = 0; i < Math.floor(this.size/2); i++){
            switch(this.lavaLakeStep){
                case 0: case 1: text += "_.-'-."; break;
                case 2: case 3: text += "._.-'-"; break;
                case 4: case 5: text += "-._.-'"; break;
                case 6: case 7: text += "'-._.-"; break;
                case 8: case 9: text += "-'-._."; break;
                case 10: case 11: text += ".-'-._"; break;
            }
        }

        // Close the span
        text += "</span>"

        return text;
    },
    peacefulForest: function(){
        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false, i*3, 0])
              .filter(([a]) => a)

        return layer_texts(
            data.ascii.peacefulForest,
            characters
        ).join("")
    },
    underwaterCave: function(){
        const bubbles = underwaterCave.bubbles
              .map(({ x, y }) => [["&deg"], x, y]);

        const characters = quest.things
              .map(({type, text}, i) => [type != "none" ? text : false /* TODO path translation */])
              .filter(([a]) => a)

        return layer_texts(
            data.ascii.underwaterCave,
            [
                ...bubbles,
                ...characters,
                ...(quest.things[51].type != "mob")
                    ? [[data.ascii.whale, 4, 15]] : []
            ]
        )
    }
}
