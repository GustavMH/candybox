const sword = {
    name : "none",
    asciiKey: null,
    specialSword : false,
    specialPower : 1, // How many the Sword of Life can steal hp, additional damage of the Sword of Flames...

    onload : function() {},
    
    buyThisSword : function(name) {
        if(this.name != name){ // If we're not trying to buy the current sword

            const speech = data.text.merchant.swords[name]

            if (candies.nbrOwned >= shop.currentSwordPrice) {
                candies.setNbrOwned(candies.nbrOwned - shop.currentSwordPrice)
                shop.setMerchantSpeech(speech.accept)
                shop.hideProduct("sword")
                this.setName(name)
            } else
                shop.setMerchantSpeech(speech.decline)
        }
    },
    
    setSpecialSword : function(value){
        this.specialSword = value
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

    enchantImpInvocation : function(){
        if(potions.list.impInvocationScroll.nbrOwned > 0){
            this.specialWord = true
            this.setName("Sword of Summoning")
            potions.list.impInvocationScroll.nbrOwned -= 1
            potions.updateOnPage()
            forge.setStep(2)
        }
    },

    
    enchantFire : function() {
        if(potions.list.fireScroll.nbrOwned >= 1){
            this.setName("Sword of Flames")
            potions.list.fireScroll.nbrOwned -= 1

            this.setSpecialSword(true)
            potions.updateOnPage()
            forge.setStep(2)
        }
    },
    
    enchantHealth : function() {
        if(potions.list.health.nbrOwned >= 1){
            this.setName("Sword of Life")
            potions.list.health.nbrOwned -= 1

            this.setSpecialSword(true)
            potions.updateOnPage()
            forge.setStep(2)
        }
    },
    
    sharpen : function(){
        this.setName("sharp chocolate sword")
        forge.setStep(1)
    },
    
    coat : function(){
        if(chocolateBars.nbrOwned >= 1){
            chocolateBars.setNbrOwned(chocolateBars.nbrOwned - 1)
            this.setName("chocolate sword")

            html.hideButton("coat")
        }
    },
    
    encrust : function(){
        if(candies.nbrOwned >= 101){
            candies.setNbrOwned(candies.nbrOwned - 101)
            this.setName("candy diamond sword")

            html.hideButton("encrust")
        }
    },
    
    polish : function(){
        if(lollipops.nbrOwned >= 30){
            lollipops.setNbrOwned(lollipops.nbrOwned - 30)
            this.setName("polished candy diamond sword")

            html.hideButton("polish")
        }
    },
    
    setName : function(value) {
        this.name = value
        const order = data.shop_selling_order
        const next_sword_name = order[1+order.findIndex((a) => a == this.name)]

        shop.showProduct(next_sword_name)
        html.setInner("sword", `You currently have a ${this.name}.`)
        html.setElementVisibility("sword", true)
        quest.defineMood()
        html.setElementVisibility("quest_form", true)
        buttons.checkSword()
        inventory.updateOnPage()
    }
}
