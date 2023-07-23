const potions = {
    list : data.potion_list,
  
    getCountdown : () => (objects.all.magicianHat.have) ? 12 : 22,
    onload : () => {},

    updateOnPage : function(){
        html.setInner("quest_potions", this.getText())
        if(quest.weAreQuestingRightNow)
            html.setInner("quest_potions_countdowns", this.getCountdownText())
    },

    getCountdownText : function(){
        var text = "";
        
        // Potions
        if(quest.berserk) text += "Berserk mode : " + quest.berserkCountdown + "\n";
        if(quest.turtle) text += "You're a turtle : " + quest.turtleCountdown + "\n";
        if(quest.invulnerability) text += "Invincible : " + quest.invulnerabilityCountdown + "\n";
        if(this.list.health.shown || this.list.escape.shown || this.list.berserk.shown || this.list.majorHealth.shown || this.list.invulnerability.shown || this.list.turtle.shown || this.list.cloning.shown || this.list.superman.shown || this.list.gmooh.shown) text += "Potion countdown : " + quest.potionUseCountdown + "\n";
        
        // Scrolls
        if(this.list.fireScroll.shown || this.acidRainScroll.shown || this.teleportScroll.shown || this.earthquakeScroll.shown || this.impInvocationScroll.shown) text += "Scroll countdown : " + quest.scrollUseCountdown;
        
        return text;
    },
    
    getText : function() {
        return data.potion_buttons.map(button => {
            return (button != "\n")
                ? this.getPotionButtonText(this.list[button])
                : "\n"
        }).join("")
    },
    
    getPotions : function(potion, nbr){
        this.setPotionShown(potion, true);
        potion.nbrOwned += nbr;
        this.updateOnPage();
    },
    
    setPotionShown : function(potion, value){
        potion.shown = value;
    },
    
    setPotionNbrOwned : function(potion, value){
        potion.nbrOwned = value;
    },
    
    buyPotion : function(potion, price){
        this.getPotions(potion, 1);
        candies.setNbrOwned(candies.nbrOwned - price);
        shop.setMerchantSpeech(potion.merchantSpeech);
    },
    
    buyScroll : function(price) {
        const scroll = [
            "fireScroll",
            "acidRainScroll",
            "teleportScroll",
            "impInvocationScroll",
            "earthquakeScroll"
        ][r_int((objects.all.magicianHat.have) ? 5 : 3)]

        this.buyPotion(this.list[scroll], price);
    },
    
    getPotionButtonText : function(potion){
        /* TODO */
        if(potion.shown) {
            var disabled = "";
            var tooltip = "";
        
            if(quest.weAreQuestingRightNow == false || potion.nbrOwned <= 0 || ((potion.type == "potion" && quest.potionUseCountdown > 0) || (potion.type == "scroll" && quest.scrollUseCountdown > 0))) disabled = "disabled=disabled";
            if(quest.weAreQuestingRightNow == false) tooltip = "<span>" + potion.merchantSpeech + "</span>";
        
            return "<button class=\"tooltip\" style=\"border: 2px solid " + potion.buttonColor + "; padding: 2px 5px;\" " + disabled  + " onclick=\"" + potion.action + "\">" + potion.buttonText + " (" + potion.nbrOwned + ")" + tooltip + "</button>\n";
        }
        return "";
    },
    

    makeJelly : () => land.create(data.mobs.jelly),

    makeCandyTree : () => (r_oneOutOf(100))
        ? land.create(data.mobs.yggdrasil)
        : land.create(data.mobs.tree),

    heal : function(howMuch){
        // We get the character index
        var id = quest.getCharacterIndex();
        
        if(quest.things[id].hp > 0 && ((howMuch == 50 && this.list.health.nbrOwned > 0) || (howMuch == 100 && this.list.majorHealth.nbrOwned > 0))){
            // We decrement nbrOwned
            if(howMuch == 50)
                this.list.health.nbrOwned -= 1;
            else if(howMuch == 100)
                this.list.majorHealth.nbrOwned -= 1;
        
            // We increment hp
            quest.things[id].hp += howMuch;
        
            // We set hp = max_hp if hp > max_hp
            if(quest.things[id].hp > quest.things[id].max_hp){
                quest.things[id].hp = quest.things[id].max_hp;
            }
        
            // We set the countdown
            quest.potionUseCountdown += this.getCountdown();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    escape : function(){
        if(this.list.escape.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.escape.nbrOwned -= 1;
        
        // We tell the quest that we escape
        quest.escaping = true;
        
        // We delete all tired time
        quest.setTiredTime(0);
        quest.setTiredFound(0);
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    berserk : function(){
        if(this.list.berserk.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.berserk.nbrOwned -= 1;
        
        // We set the countdown
        quest.potionUseCountdown += this.getCountdown();
        
        // We tell the quest that we are now in berserk mode
        quest.beginBerserk();
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    fireScroll : function(){
        if(this.list.fireScroll.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.fireScroll.nbrOwned -= 1;
        
        // We set the countdown
        quest.scrollUseCountdown += this.getCountdown();
        
        // We burn the enemy !
        var index = quest.getCharacterIndex();
        index += 1; // We set the index to look just in front of the player
        if(quest.things[index].type == "mob"){ // If it's a mob
            quest.things[index].hp -= 25 + r_int(1+10);
            if(quest.things[index].hp < 0) quest.things[index] = quest.makeNoneThing();
        }
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    acidRainScroll : function(){
        if(yourself.end == false && this.list.acidRainScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.acidRainScroll.nbrOwned -= 1;
            
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
            
            // We burn everyone
            for(var i = 0; i < quest.things.length; i++){
                if(quest.things[i].type == "mob" || quest.things[i].type == "character"){
                    quest.things[i].hp -= 6;
                    if(quest.things[i].type == "character" && quest.things[i].hp <= 0) quest.things[i].hp = 1;
                    if(quest.things[i].hp < 0) quest.things[i] = quest.makeNoneThing();
                }
            }
            
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    teleportScroll : function(){
        // If we're not already at index 0
        if(quest.things[0].type != "character" && this.list.teleportScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.teleportScroll.nbrOwned -= 1;
        
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
        
            // We teleport !
            var index = quest.getCharacterIndex();
            quest.things[0] = quest.things[index];
            quest.things[index] = quest.makeNoneThing();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    earthquakeScroll : function(){
        if(yourself.end == false && this.list.earthquakeScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.earthquakeScroll.nbrOwned -= 1;
            
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
            
            // We hit everyone
            for(var i = 0; i < quest.things.length; i++){
                if(quest.things[i].type == "mob" || quest.things[i].type == "character"){
                    quest.things[i].hp -= 12;
                    if(quest.things[i].type == "character" && quest.things[i].hp <= 0) quest.things[i].hp = 1;
                    if(quest.things[i].hp < 0) quest.things[i] = quest.makeNoneThing();
                }
            }
            
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    impInvocationScroll : function(){
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the end of the land and there's nothing in front of him
        if(index < quest.things.length-1 && quest.things[index+1].type == "none" && this.list.impInvocationScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.impInvocationScroll.nbrOwned -= 1;
            
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
            
            // We invoke an int
            quest.things[index+1] = quest.makeImp();
            
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    invulnerability : function(){
        if(this.list.invulnerability.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.invulnerability.nbrOwned -= 1;
        
        // We set the countdown (40 ! because this potion is too awesome)
        quest.potionUseCountdown += 40;
        
        // We tell the quest that we are now in berserk mode
        quest.beginInvulnerability();
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    turtle : function(){
        if(this.list.turtle.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.turtle.nbrOwned -= 1;

            // We set the countdown
            quest.potionUseCountdown += this.getCountdown();

            // We tell the quest that we are now in berserk mode
            quest.beginTurtle();

            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    jelly : function(){
        // We get the character index
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the beginning of the land and there's nothing behind the character
        if(index != 0 && quest.things[index - 1].type == "none" && this.list.jelly.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.jelly.nbrOwned -= 1;
        
            // We place a jelly
            quest.things[index-1] = this.makeJelly();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    seed : function(){
        // We get the character index
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the end of the land and there's nothing in front of the character
        if(index < quest.things.length-1 && quest.things[index + 1].type == "none"){
            // We decrement nbrOwned
            this.list.seed.nbrOwned -= 1;
        
            // We place a candy tree
            quest.things[index+1] = this.makeCandyTree();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    cloning : function(){
        // We get the character index
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the beginning of the land and there's nothing in front of the character
        if(index != 0 && index < quest.things.length-1 && quest.things[index + 1].type == "none" && this.list.cloning.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.cloning.nbrOwned -= 1;
            
            // We set the countdown
            quest.potionUseCountdown += 100;
        
            // We place a clone
            quest.things[index+1] = land.create(data.mobs.clone)
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    superman : function(){
        if(this.list.superman.nbrOwned > 0){
        // We get the character's index
        var index = quest.getCharacterIndex();
        
        // We decrement nbrOwned
        this.list.superman.nbrOwned -= 1;
        
        // We set the countdown
        quest.potionUseCountdown += this.getCountdown();
        
        // We change the character text
        quest.things[index].text = "(o-";
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    gmooh : function(){
        if(this.list.gmooh.nbrOwned > 0){
            // We tell the quest that we're using a gmooh potion, then when quest.move will be executed, our gmoohEffect() function will be called
            quest.gmooh = true;

            // We delete all tired time
            quest.setTiredTime(0);
            quest.setTiredFound(0);

            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    // When this function is called, quest.stop() was done just before, so we can launch a new quest if we want ;)
    gmoohEffect : function(){
        this.list.gmooh.nbrOwned -= 1;
        quest.setTiredTime(0);
        const land_name = [
            "The peaceful forest",
            "cowLevel",
            "sea",
            "desert"
        ][r_int(1+3)]
        quest.begin(false, land.getLandIndexFromName(land_name));
    }
}
