var chocolateBars = {
    nbrOwned : 0,
    
    setNbrOwned : function(value){
        this.nbrOwned = value;
        
        const endings = ["s :(", "\\o/", "s \\o/ (a bug ? Oo)"]
        const text = `You have ${this.nbrOwned} chocolate bar ${endings[value]}`
        html.setInner("chocolate_bars", text)
        html.setElementVisibility("chocolate_bars", true);
        buttons.checkChocolateBars();
    }

};
