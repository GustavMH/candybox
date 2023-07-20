var sword = {
  
    // Variables
    name : "none",
    specialSword : false,
    specialPower : 1, // How many the Sword of Life can steal hp, additional damage of the Sword of Flames...

    onload : function() {},
    
    buyThisSword : function(name){
        if(this.name != name){ // If we're not trying to buy the current sword

            const speech = data.text.merchant.swords[name]

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
        this.specialPower = value > 0 ? value : 0
    },

    summonHere : function(id){
        if (r_coin()) {
            summon_key = data.sword_summons[this.specialPower] || data.sword_summons[6]
            quest.things[id] = land.create(data.mobs[summon_key])
        }
    },

    /* TODO sword enchantment -> data ?? */
    
    enchantFire : function() {
        if(potions.list.fireScroll.nbrOwned >= 1){
            this.setName("Sword of Flames");
            potions.list.fireScroll.nbrOwned -= 1;

            this.setSpecialSword(true);
            potions.updateOnPage();
            forge.setStep(2);
        }
    },
    
    enchantHealth : function() {
        if(potions.list.health.nbrOwned >= 1){
            this.setName("Sword of Life");
            potions.list.health.nbrOwned -= 1;

            this.setSpecialSword(true);
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
