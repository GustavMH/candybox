const desert = {
    size : 25,

    onload : function() {
        land.addLand("desert", this.size, -1, this.load.bind(this), this.getText.bind(this));
    },

    load : function() {},

    getText : function() {
        const lines = data.ascii.desert
        const masks = [37, 38, 40, 41, 42, 44, 45, 54, 55, 56, 57, 58, 59, 60, 61]
        const player_line = quest.things.map(({type, text}) => type == "player" ? text : "   ")
        const line_12 = lines[12].map((c, i) => c != " " && i in masks ? c : player_line[i])

        return [...lines.slice(0,11), line_12, ...lines.slice(13)].join("");
    },
};
