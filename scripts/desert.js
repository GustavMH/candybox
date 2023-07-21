const desert = {
    size : 25,

    onload : function() {
        land.addLand("desert", this.size, -1, this.load.bind(this), this.getText.bind(this))
    },

    load : function() {},

    getText : getText.desert
}
