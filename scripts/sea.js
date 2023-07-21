var sea = {
    size : 25,

    onload : function(){
        land.addLand("sea", this.size, -1, this.load.bind(this), this.getText.bind(this));
    },
    
    load : function(){},
    
    getText : function() {
        return layer_texts(
            data.ascii.sea,
            [data.ascii.boat, quest.getCharacterIndex(), 3]
        )
    }
}
