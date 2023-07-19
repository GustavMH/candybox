var farm = {
    
    // Variables
    lollipopsPlanted : 0, // The number of lollipops planted in the farm
    productionDelayType : "none", // On which delay does the farm product lollipops (day, hour, min, sec...)
    lollipopsPerDay : 0, // How many lollipops the farm produce every day
    lollipopsProduction : 0, // How many lollipops the farm produce every day, hour, min, sec.. depending on the production delay type
    maxLollipopsPerDay : 8640000, // = 100/sec
    flagsList : [" ~ ", " * ", "cnd", " ! ", " + ", " ? ", "/|\\"], // List of ascii flags which can appear on the farm
    currentFlagIndex : 0, // Index in the list of the current flag shown
    plantingButtonsStep : 0, // Step of the lollipops planting buttons : (= which buttons are shown, 1000, 100.. ?)
    
    // Functions
    calculateLollipopsPerDay : function(){
        if(this.lollipopsPlanted <= 293){ // sqrt(86400) = 293
            this.lollipopsPerDay = Math.pow(this.lollipopsPlanted, 2); // 293 will give 85849
        }
        else{ // When we're counting in lp/sec, this function is used instead of the other one. It will stabilize the curve.
            var prod = (this.lollipopsPlanted - 122) * 500; // 194 will give 86000
            if(prod < this.maxLollipopsPerDay) this.lollipopsPerDay = prod;
            else this.lollipopsPerDay = this.maxLollipopsPerDay;
        }
    },
    
    setPlantingButtonsStep : function(value){
        // Set the value
        this.plantingButtonsStep = value;

        button_fn = (n) => `<button class='home_button' id='plant_${n}_lp' onClick='farm.plantLollipops(${n});'>${n}</button>`
        const inner_text = range(value).map((_, n) => button_fn(10**n)).join("")
        html.setInner("lp_buttons", `Plant ${inner_text} lp`)

        // Check the buttons
        buttons.checkLollipopsPlantingButtons();
    },
    
    clickedOnTheBigLollipop : function(){
        // Increment the current flag index
        this.setCurrentFlagIndex(this.currentFlagIndex + 1);
    },
    
    setCurrentFlagIndex : function(value){
        // Set the new value and correct it if incorrect
        this.currentFlagIndex = value % this.flagList.length

        // Update on the page
        html.setInner("farm_big_lollipop", this.flagsList[this.currentFlagIndex]);
    },
    
    checkVisibility : function(){
        if(objects.list.key.have) html.setElementVisibility("farm", true);
    },
    
    plantLollipops : function(number){
        if(lollipops.nbrOwned >= number) {
            lollipops.setNbrOwned(lollipops.nbrOwned - number);
            this.setLollipopsPlanted(this.lollipopsPlanted + number);
        }
    },
    
    setLollipopsPlanted : function(value){
        // We change the value
        this.lollipopsPlanted = value;
        
        // We update on page
        html.setInner("lp_planted", "Lp planted : " + this.lollipopsPlanted);
        
        // We re calculate stuff
        this.calculateLollipopsPerDay();
        this.calculateLollipopsProductionFromLollipopsPerDay();
    },
    
    calculateLollipopsProductionFromLollipopsPerDay : function() {
        const [ _, delay_type, divisor ] = [
            [24,       "day",  1],
            [1440,     "hour", 24],
            [86400,    "min",  1440],
            [Infinity, "sec",  86400]
        ].find(([lpd]) => this.lollipopsPerDay < lpd)

        this.setLollipopsProduction(Math.floor(this.lollipopsPerDay / divisor ))
        this.setProductionDelayType(delay_type)
    },

    setProductionDelayType: function(value){
        this.productionDelayType = value;
    },
    
    setLollipopsProduction : function(value){
        /* TODO bug sets production to n/none */
        this.lollipopsProduction = value;
        html.setInner("lp_production", "Production : " + this.lollipopsProduction + " lp/" + this.productionDelayType);
    },
    
    setMaxLollipopsPerDay : function(value){
        // We set the max lollipops per day
        this.maxLollipopsPerDay = value;
        
        // We re calculate stuff
        this.calculateLollipopsPerDay();
        this.calculateLollipopsProductionFromLollipopsPerDay();
    }
    
};
