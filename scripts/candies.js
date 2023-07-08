var candies = {

    // Variables
    nbrOwned : 0,
    nbrEaten : 0,
    nbrThrown : 0,
    nbrTotal : 0, // The total number we earned in all times
    candiesPerSecond : 1,
    
    // Functions
    onload : function(){
        candies.setNbrOwned(0); // We first have 0 candies
    },
    
    eat : function(){
        this.setNbrEaten(this.nbrEaten + this.nbrOwned);
        this.setNbrOwned(0);
    },
    
    setNbrTotal : function(value){
        this.nbrTotal = value;
    },
    
    setNbrOwned : function(value){
        // If this is an increase, we increase nbr total too
        if(value > this.nbrOwned){
            this.setNbrTotal(this.nbrTotal + value - this.nbrOwned);
        }
        
        this.nbrOwned = value;
        if(this.nbrOwned != 1) htmlInteraction.setInnerHtml("candies", "You have " + this.nbrOwned + " candies!");
        else htmlInteraction.setInnerHtml("candies", "You have 1 candy!");
        buttons.checkCandies();
        shop.check();
        cauldron.updateActionsInfoOnPage();
    },
    
    setNbrEaten : function(value){
        this.nbrEaten = value;
        if(this.nbrEaten != 1) htmlInteraction.setInnerHtml("candies_eaten", "You have eaten " + this.nbrEaten + " candies!");
        else htmlInteraction.setInnerHtml("candies_eaten", "You have eaten 1 candy!");
        htmlInteraction.setElementVisibility("candies_eaten", true);
    },
    
    setCandiesPerSecond : function(value){
        this.candiesPerSecond = value;
    },
    
    setNbrThrown: (n_thrown) => {
        this.nbrThrown = value

        // We choose which smiley we want to add at the end of the sentence
        smiley_fn = (txt) => `...? <tt>${txt}<tt>`
        smileys = [".", "...", "...?", ...[":|", ":/", ":(", ":[", ":{", ":'(", "(;_;)"].map(smiley_fn)]
        smiley = smileys[Math.floor(value / 10)] || smileys[9]

        darkMode.check();

        text = n_thrown != 1
            ? "You threw ${this.nbrThrown} candies on the ground ${smiley}"
            : "You threw 1 candy on the ground ${smiley}"
        
        htmlInteraction.setInnerHtml("candies_thrown", text)
        htmlInteraction.setElementVisibility("candies_thrown", true)
    },
    
    throw10Candies : function(){
        if(this.nbrOwned >= 10){ // If we have at least 10 candies
            this.setNbrOwned(this.nbrOwned - 10);
            this.setNbrThrown(this.nbrThrown + 10);
        }
    }
  
};
