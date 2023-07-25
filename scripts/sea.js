var sea = {
    size : 25,

    onload : function(){
        land.addLand("sea", this.size, -1, this.load.bind(this), this.getText.bind(this))
    },
    load : function(){},
    getText : getText.sea
}
