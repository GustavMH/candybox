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
        this.setNbrEaten(this.nbrEaten + this.nbrOwned)
        this.setNbrOwned(0)
    },
    
    setNbrTotal : function(value){
        this.nbrTotal = value
    },
    
    setNbrOwned : function(value){
        // If this is an increase, we increase nbr total too
        if(value > this.nbrOwned){
            this.setNbrTotal(this.nbrTotal + value - this.nbrOwned)
        }
        
        this.nbrOwned = value

        text = this.nbrOwned != 1
            ? `You have ${this.nbrOwned} candies!`
            : `You have 1 candy!`

        html.setInner("candies", text)
        buttons.checkCandies()
        shop.check()
        cauldron.updateActionsInfoOnPage()
    },
    
    setNbrEaten : function(n_eaten){
        this.nbrEaten = n_eaten

        text = n_eaten != 1
            ? `You have eaten ${this.nbrEaten} candies!`
            : "You have eaten 1 candy!"

        html.setInner("candies_eaten", text)
        html.setElementVisibility("candies_eaten", true)
    },
    
    setCandiesPerSecond : function(value){
        this.candiesPerSecond = value
    },
    
    setNbrThrown : (n_thrown) => {
        console.log(n_thrown)
        this.nbrThrown = n_thrown

        // We choose which smiley we want to add at the end of the sentence
        smiley_fn = (txt) => `...? <tt>${txt}<tt>`
        smileys = [".", "...", "...?",
                   ...[":|", ":/", ":(", ":[", ":{", ":'(", "(;_;)"].map(smiley_fn)]
        smiley = smileys[Math.floor(n_thrown / 10)] || smileys[9]

        darkMode.check()

        text = n_thrown != 1
            ? `You threw ${this.nbrThrown} candies on the ground ${smiley}`
            : `You threw 1 candy on the ground ${smiley}`
        
        html.setInner("candies_thrown", text)
        html.setElementVisibility("candies_thrown", true)
    },
    
    throw10Candies : function(){
        console.log(this)
        if(this.nbrOwned >= 10){ // If we have at least 10 candies
            this.setNbrOwned(this.nbrOwned - 10)
            this.setNbrThrown(this.nbrThrown + 10)
        }
    }
  
}
