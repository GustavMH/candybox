var sword = {
  
    // Variables
    name : "none",
    specialSword : false,
    specialPower : 1, // How many the Sword of Life can steal hp, additional damage of the Sword of Flames...
    // List of summoned things with the level we need to summon them
    summonList : [],
    
    // Functions
    
    onload : function(){
        this.summonList = [
            {name:"imps",            summonFunction:quest.makeImp.bind(quest),          powerNeeded: 1},
            {name:"orcs",            summonFunction:quest.makeOrc.bind(quest),          powerNeeded: 2},
            {name:"draugrs",         summonFunction:quest.makeDraugr.bind(quest),       powerNeeded: 3},
            {name:"a chupacabra",    summonFunction:quest.makeChupacabra.bind(quest),   powerNeeded: 4},
            {name:"a golem",         summonFunction:quest.makeGolem.bind(quest),        powerNeeded: 5},
            {name:"a chimera",       summonFunction:quest.makeChimera.bind(quest),      powerNeeded: 6},
            {name:"a candy monster", summonFunction:quest.makeCandyMonster.bind(quest), powerNeeded: 7}
        ]
    },
    
    buyThisSword : function(name){
        if(this.name != name){ // If we're not trying to buy the current sword

            const speech = data.text.merchant_swords[name]

            if (candies.nbrOwned >= shop.currentSwordPrice) {
                candies.setNbrOwned(candies.nbrOwned - shop.currentSwordPrice)
                shop.setMerchantSpeech(speech.accept)
                shop.hideProduct("sword")
            } else
                shop.setMerchantSpeech(speech.decline)

            this.setName(name); // We bought it, since we didn't return : we change the name
        }
    },
    
    enchantImpInvocation : function(){
        if(potions.list.impInvocationScroll.nbrOwned > 0){
        this.setSpecialSword(true);
        this.setName("Sword of Summoning");
        potions.list.impInvocationScroll.nbrOwned -= 1;
        potions.updateOnPage();
        forge.setStep(2);
}
    },
    
    setSpecialSword : function(value){
        this.specialSword = value;
    },
    
    setSpecialPower : function(value){
        if(value > 0){
            this.specialPower = value;
        }
        else this.specialPower = 0;
    },
    
    getIndexOfBetterToSummon : function(){
        var indexOfBetterToSummon = 0;
        // We iterate over the list
        for(var i = 0; i < this.summonList.length; i++){
            // If we can summon this one and it is better than the current betterToSummon
            if(this.summonList[i].powerNeeded <= this.specialPower && this.summonList[i].powerNeeded > this.summonList[indexOfBetterToSummon].powerNeeded){
                // This is now the better to summon
                indexOfBetterToSummon = i;
            }
        }
        return indexOfBetterToSummon;
    },
    
    summonHere : function(id){
        // One chance out of two we summon something
        if(random.flipACoin()){
            // We summon the better to summon
            quest.things[id] = this.summonList[this.getIndexOfBetterToSummon()].summonFunction();
        }
    },
    
    enchantFire : function(){
if(potions.list.fireScroll.nbrOwned > 0){
        this.setSpecialSword(true);
        this.setName("Sword of Flames");
        potions.list.fireScroll.nbrOwned -= 1;
        potions.updateOnPage();
        forge.setStep(2);
}
    },
    
    enchantHealth : function(){
if(potions.list.health.nbrOwned > 0){
        this.setSpecialSword(true);
        this.setName("Sword of Life");
        potions.list.health.nbrOwned -= 1;
        potions.updateOnPage();
        forge.setStep(2);
}
    },
    
    sharpen : function(){
        this.setName("sharp chocolate sword");
        forge.setStep(1);
    },
    
    coat : function(){
        if(chocolateBars.nbrOwned >= 1){
            chocolateBars.setNbrOwned(chocolateBars.nbrOwned - 1);
            this.setName("chocolate sword");
            html.hideButton("coat");
        }
    },
    
    encrust : function(){
        if(candies.nbrOwned >= 101){
            candies.setNbrOwned(candies.nbrOwned - 101);
            this.setName("candy diamond sword");
            html.hideButton("encrust");
        }
    },
    
    polish : function(){
        if(lollipops.nbrOwned >= 30){
            lollipops.setNbrOwned(lollipops.nbrOwned - 30);
            this.setName("polished candy diamond sword");
            html.hideButton("polish");
        }
    },
    
    setName : function(value){
        // We change the value
        this.name = value;
        
        // We possibly show a new product in the shop depending on the new sword name
        switch(this.name){
            case "wooden sword": shop.showProduct("copper_sword"); break;
            case "copper sword": shop.showProduct("iron_sword"); break;
            case "iron sword": shop.showProduct("silver_sword"); break;
            case "silver sword": shop.showProduct("diamond_sword"); break;
            default: shop.showProduct("products_after_swords"); break;
        }
        
        // Other stuff
        html.setInner("sword", "You currently have a " + this.name + ".");
        quest.defineMood();
        html.setElementVisibility("sword", true);
        html.setElementVisibility("quest_form", true);
        buttons.checkSword();
        inventory.updateOnPage();
    }
};
