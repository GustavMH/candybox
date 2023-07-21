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

        return layer_texts(
            data.ascii.castleEntrance,
            [...characters,
             make_mask(data.ascii.castleEntrance, land.mask, 18)]
        ),join("")

        // We add the magic ball
        if(this.thereIsAMagicBall){
            lines[this.magicBallY] = lines[this.magicBallY].replaceAt(this.magicBallX, "*");
        }

        // We return the lines
        return lines.join("");
    },
    cow: function(){
        var text = "                                   \"The cow level\"\n\n\n";

        text += "                  ";
        for(var i = 0; i < 18; i++){
            text += quest.things[i].text;
        }

        text += "\n\n         ";
        for(var i = 18; i < 42; i++){
            text += quest.things[i].text;
        }

        text += "\n\n";
        for(var i = 42; i < this.size; i++){
            text += quest.things[i].text;
        }

        return text;
    },
    castleKeep: function() {
        return layer_texts(
            this.text,
            quest.things.map(({text, type}) => [
                type != "none" ? text : false,
                1 + this.firstCharacterPosition*3 + i*3,
                this.floorPosition
            ]).filter(([text]) => text)
        ).join("")
    },
    mountGoblin: function() {
        /* TODO */
        return layer_texts(
            data.ascii.mountGoblin,
            []
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
        var lines = []
        lines = this.text.slice(0); // It will store the lines

        // We add things to the lines
        for(var i = 0; i < this.size; i++){
            // If there's a thing
            if(quest.things[i].type != "none"){
                lines[this.size-1-i] = lines[this.size-1-i].replaceAt(i*3, quest.things[i].text)
            }
        }

        // We return the lines around the player
        return lines.join("")
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
        /* TODO .join ? */
        var text = "";

        for(var i = 0; i < quest.things.length; i++){
            text += quest.things[i].text;
        }

        return text;
    },
    underwaterCave: function(){
        var defeated = false;
        if(quest.things[51].type != "mob") defeated = true; // The Whale has been defeated

        var lines = (defeated == false)
            ? data.ascii.underwaterCave
            : data.ascii.underwaterCaveWithoutWhale

        // We modify this variable by adding things to it
        for(var i = 0; i < this.size; i++){
            if(defeated == true || (defeated == false && i <= 50)){ // If we defeated the Whale or we're not drawing the things located after the Whale
                if(quest.things[i].type != "none"){
                    lines[this.positions[i].y] = lines[this.positions[i].y].replaceAt(this.positions[i].x, quest.things[i].text);
                }
            }
        }

        // We modify this land var by drawing bubbles
        for(var i = this.bubbles.length - 1; i >= 0; i--){
            if(lines[this.bubbles[i].y].charAt(this.bubbles[i].x) == " ") lines[this.bubbles[i].y] = lines[this.bubbles[i].y].replaceAt_with_size(this.bubbles[i].x, "&deg", 1);
            else this.bubbles.splice(i, 1);
        }

        return lines.join("");
    }
}
