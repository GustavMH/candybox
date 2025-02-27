const quest = {
    currentLandIndex : 0, // Index of the current land in land.list
    maxLandOrder : -1, // Max land order we achieved for the moment
    candiesFound : 0, // Number of candies found during a quest
    speed : 0, // Speed of the character during a quest
    things : [], // Array containing all the things present in a quest
    effects: {},
    tiredTime : 0, // Number of seconds we need to spend before doing another quest
    tiredFound : 0, // Number of seconds we will need to wait after finishing the current quest
    potionUseCountdown : 0, // Number of movements we have to wait before using another potion
    scrollUseCountdown : 0, // Same thing for scrolls
    escaping : false, // If true, it means we are escaping from the quest
    gmooh : false,
    berserk : false, // If true, we're in berserk mode
    berserkCountdown : 0, // Number of cycles we still have to stay in berserk mode
    invulnerability : false, // If true, we're invincible
    invulnerabilityCountdown : 0, // Number of cycles we still have to stay as invincible
    turtle : false, // If true, we're a turtle
    turtleCountdown : 0, // Number of cycles we still have to stay as a turtle
    weAreQuestingRightNow : false, // True if we're making a quest right now
    characterSpeed : 1, // Speed of the character : if = 2 for example, the character will take two cycles to move. This variable can be reduce by being a turtle
    characterSpeedStep : 1, // Used to apply the characterSpeed var
    
    onloadAfter : function() {
        this.setMaxLandOrder(0)
    },
    
    setMaxLandOrder : function(value) {
        if(value > this.maxLandOrder){
            this.maxLandOrder = value; // We change the value
            land.updateListOnPage(quest.maxLandOrder); // And we try to update the quest list on the html page, in case a new quest was unlocked
        }
    },
    
    begin : function(getLandFromList, landIndex){
        // Disable button
        html.disableButton("quest_button")
        
        // First thing to do !
        this.weAreQuestingRightNow = true
        
        // If we have to get the land index from the list on the html page
        if(getLandFromList == true){
            // We get the index in land.list of the current land selected in the html list
            var landNameInHtmlList = html.getElement("quest_destination").options[html.getElement("quest_destination").selectedIndex].text
            this.currentLandIndex = land.getLandIndexFromName(landNameInHtmlList)
        }
        // Else, we use the index given in the parameters
        else{
            this.currentLandIndex = landIndex
        }
        
        // We show the quest panel
        html.setElementVisibility("quest", true)
        html.setElementVisibility("quest_potions_countdowns", true)
        
        // We empty the things array and put none things in it
        this.things = this.fillWithNoneThings()
        
        // We add the character
        if(land.ponyTime == false)
            this.things[0] = {type:"character", text:"\\o/", max_hp:this.getCharacterMaxHp(), hp:this.getCharacterMaxHp(), weapon:(sword.name), description:"You"}
        else
            this.things[0] = {type:"character", text:"PON", max_hp:this.getCharacterMaxHp(), hp:this.getCharacterMaxHp(), weapon:(sword.name), description:"You"}
        
        // We set the speed
        this.speed = this.getSpeed()
        
        // We set the potion & scroll use countdown
        this.potionUseCountdown = 0
        this.scrollUseCountdown = 0
        
        // Not escaping at first
        this.escaping = false
        
        // Not using gmooh potion at first
        this.gmooh = false
        
        // Not in berserk mode at first
        this.berserk = false
        this.berserkCountdown = 0
        this.speed = this.getSpeed()
        
        // Not invincible at first
        this.invulnerability = false
        this.invulnerabilityCountdown = 0
        
        // Not turtle at first
        this.turtle = false
        this.turtleCountdown = 0
        
        // Speed = 1 at first and the step = 1 too
        this.characterSpeed = 1
        this.characterSpeedStep = 1
        
        // Load the current land
        land.load()
        
        // Update the quest and the potions on page
        this.updateOnPage()
        potions.updateOnPage()
        
        // Set a timeout for the next quest movement
        window.setTimeout(this.move.bind(this), this.speed)
    },
    
    updateOnPage : function(){
        html.setInner("quest", [land, status2, drops].map(obj => obj.getText()).join("\n"))
    },
    
    getCharacterMaxHp : function(){
        return 100 + Math.floor(Math.pow(candies.nbrEaten, 0.4)*2.1); // This function means ~ one day of candies eaten at 1cnd/s = +200 hp
    },
    
    getSpeed : function(){
        return 500 * (1/2)**((objects.all.boots.have ? 1 : 0) + (this.beserk ? 1 : 0))
    },
    
    getCharacterIndex : function() {
        return this.things.findIndex(({type}) => type == "character")
    },
    
    move : function(){
        // If we're not escaping, we don't stop the quest
        if(this.escaping == false && this.gmooh == false){
            for(var index = 0; index < this.things.length; index++){
                if(this.things[index].type == "character" || this.things[index].type == "ally" || this.things[index].type == "trap"){
                    // If we are at the end of the quest
                    if(index + 1 == this.things.length){
                        // If we're the character
                        if(this.things[index].type == "character"){
                            // We set a timeout to the winning function and we return
                            window.setTimeout(this.won.bind(this), 3000)
                            return
                        }
                        // Else, we're just an ally or a trap
                        else{
                            // We disappear
                            quest.things[index] = quest.makeNoneThing()
                        }
                    }
                    // Else, we move ourselves
                    else{
                        // If there's nothing in front of us and we're not a trap, we just move
                        if(this.things[index].type != "trap" && this.things[index + 1].type == "none"){
                            if(this.characterSpeedStep >= this.characterSpeed){
                                this.characterSpeedStep = 1; // We set the step back to 1
                                this.things[index + 1] = this.things[index]
                                this.things[index] = this.makeNoneThing()
                                index += 1; // We increment the index to avoid re evaluating the same thing just after
                            }
                            else{
                                this.characterSpeedStep += 1; // We increment the step
                            }
                        }
                        // Else, we try to fight
                        else{
                            // If the thing in front of us is a mob or a trap (and we're not one..), we fight
                            if(this.things[index + 1].type == "mob" || (this.things[index + 1].type == "trap" && this.things[index].type != "trap")){
                                if(this.fight(index, index + 1) == true) return
                            }
                        }
                    }
                }
            }
            
            // We set the timeout to move again
            window.setTimeout(this.move.bind(this), this.speed)
                    
            // We decrement the potion use countdown
            if(this.potionUseCountdown > 0){
                this.potionUseCountdown -= 1
                if(this.potionUseCountdown == 0){
                    potions.updateOnPage()
                }
                else potions.updateCountdownOnPage()
            }
            
            // Same thing for the scroll use countdown
            if(this.scrollUseCountdown > 0){
                this.scrollUseCountdown -= 1
                if(this.scrollUseCountdown == 0){
                    potions.updateOnPage()
                }
                else potions.updateCountdownOnPage()
            }
            
            // We decrement the berserk mode countdown
            if(this.berserkCountdown > 0){
                this.berserkCountdown -= 1
                if(this.berserkCountdown == 0) this.stopBerserk()
                potions.updateCountdownOnPage()
            }
            
            // We decrement the invulnerability mode countdown
            if(this.invulnerabilityCountdown > 0){
                this.invulnerabilityCountdown -= 1
                if(this.invulnerabilityCountdown == 0) this.stopInvulnerability()
                potions.updateCountdownOnPage()
            }
            
            // We decrement the turtle mode countdown
            if(this.turtleCountdown > 0){
                this.turtleCountdown -= 1
                if(this.turtleCountdown == 0) this.stopTurtle()
                potions.updateCountdownOnPage()
            }
            
            // We make the land move too
            if(land.list[this.currentLandIndex].moveFunction != undefined){
                land.list[this.currentLandIndex].moveFunction()
            }
            
            // Horn bonus
            if(objects.all.magicalHorn.have){
                this.applyMagicalHornBonus()
            }
            
            // We update on page
            this.updateOnPage()
        }
        // Else we're escaping : we stop the quest
        else if(this.escaping){
            this.stop()
        }
        // Else if we're using a gmooh potion
        else if(this.gmooh){
            this.stop()
            potions.gmoohEffect()
        }
    },
    
    applyMagicalHornBonus : function(){
        var index = this.getCharacterIndex()
        
        // If we're not dead
        if(this.things[index].hp > 0){
            this.things[index].hp += 3
            if(this.things[index].hp > this.things[index].max_hp) this.things[index].hp = this.things[index].max_hp
        }
    },
    
    fight : function(index1, index2){
        // We launch a fight between us and the mob if the mob still have some hp (he may lose its hp because of a scroll)
        if(this.things[index2].hp > 0) damage.makeTwoQuestThingsFighting(index1, index2)
        
        // Check for deads
        if(this.checkIfDead(index1, index2) == true) return true
        if(this.checkIfDead(index2, index1) == true) return true
        
        return false
    },
    
    checkIfDead : function(index, indexKiller){
        // If we're dead
        if(this.things[index].hp <= 0) {
            // If we're the character
            if(this.things[index].type == "character"){
                this.updateOnPage(); // We update on page
                window.setTimeout(this.stop.bind(this), 5000); // We set the timeout to stop the quest
                return true; // We quit
            }
            // Else, we're just an ally or a trap
            else if(this.things[index].type == "ally" || this.things[index].type == "trap"){
                // We disappear
                if(this.things[index].drops != []) drops.getAllDropsFromList(this.things[index].drops); // We gain the drops of the defeated ally or trap
                quest.things[index] = quest.makeNoneThing()
            }
            // Else, we're a mob
            else if(this.things[index].type == "mob" && (this.things[index].text != "\\o/" || yourself.canSurpass == true)){
                drops.getAllDropsFromList(this.things[index].drops); // We gain the drops of the defeated mob
                this.things[index] = this.makeNoneThing(); // We remove the mob
                
                // If we we were killed by the character
                if(this.things[indexKiller].type == "character"){
                    // Sword of Summoning bonus : we may spawn something here
                    if(sword.name == "Sword of Summoning" || sword.name == "Sword of Liflamesummoning"){
                        sword.summonHere(index)
                    }
                    // Sword of Life : we gain life
                    if(sword.name == "Sword of Life" || sword.name == "Sword of Liflamesummoning"){
                        this.things[indexKiller].hp += sword.specialPower + 1
                        if(this.things[indexKiller].hp > this.things[indexKiller].max_hp) this.things[indexKiller].hp = this.things[indexKiller].max_hp
                    }
                }
            }
        }
        
        return false
    },
    
    beginBerserk : function(){
        this.berserk = true
        this.berserkCountdown = 25 + r_int(1+10)
        this.speed = this.getSpeed()
        this.things[this.getCharacterIndex()].text = "O_O"
    },
    
    stopBerserk : function(){
        this.berserk = false
        this.speed = this.getSpeed()
        this.things[this.getCharacterIndex()].text = "\\o/"
    },
    
    beginInvulnerability : function(){
        this.invulnerability = true
        this.invulnerabilityCountdown = 15
        this.things[this.getCharacterIndex()].text = "GOD"
    },
    
    stopInvulnerability : function(){
        this.invulnerability = false
        this.things[this.getCharacterIndex()].text = "\\o/"
    },
    
    beginTurtle : function(){
        this.turtle = true
        this.turtleCountdown = 30
        this.things[this.getCharacterIndex()].text = "TUR"
        this.characterSpeed = 3; // We reduce the speed !
    },
    
    stopTurtle : function(){
        this.turtle = false
        this.things[this.getCharacterIndex()].text = "\\o/"
        this.characterSpeed = 1; // The speed goes back to its normal state !
    },
    
    won : function(){
        // won ?
        if(land.getLandIndexFromName("Developper's computer") == quest.currentLandIndex){
            developperComputer.setWon(true)
            inventory.updateOnPage()
        }
        
        // Drops
        drops.gainDrops()

        /* TODO inactive? */
        // We may enable a new destination, we store the drop-down list
        var list = html.getElement("quest_destination")
        
        // We change the max land order : it's the order of the just finnished quest + 1
        this.setMaxLandOrder(land.list[this.currentLandIndex].order + 1)
        
        // We stop the quest
        this.stop()
    },
    
    stop : function(){
        // Enable button
        html.enableButton("quest_button")
        
        // First thing to do !
        this.weAreQuestingRightNow = false
        
        // Get the character index
        var index = this.getCharacterIndex()
        
        // No more quest panel or potions shown
        html.setInner("quest", "")
        html.setInner("quest_potions_countdowns", "")
        
        // We re-enable home buttons
        //buttons.enableHomeButtons()
        
        // We update the potions on page
        potions.updateOnPage()
        
        // We're tired after this quest
        if(this.things[index].hp < this.things[index].max_hp) this.setTiredFound(this.tiredFound + 200 * (1 - (this.things[index].hp / this.things[index].max_hp)))
        if(this.escaping == false) this.setTiredTime(Math.floor(this.tiredFound))
        
        // Nothing found anymore
        this.setCandiesFound(0)
        this.setTiredFound(0)
        for (obj in objects.all) objects.all[obj].found = false
    },
    
    defineMood : function(){
        const text = this.tiredTime == 0
              ? "You're in the pink! Ready for fighting!"
              : `You're tired. You have to wait before doing another quest. Waiting time : ${this.tiredTime}`
        html.setInner("mood", text)
        html.setElementVisibility("mood", true)
    },
    
    setCandiesFound : function(value){
        this.candiesFound = value
    },
    
    setTiredTime : function(value){
        if(value < 0) value = 0
        
        this.tiredTime = value
        this.defineMood()
        buttons.checkQuestTiredTime()
    },
    
    setTiredFound : function(value){
        this.tiredFound = value
    },
    
    makeNoneThing : () => ({type: "none", text: "___"}),

    makeFakeCharacter : () => land.createFakeCharacter(),

    fillWithNoneThings : function() {
      return Array(land.list[this.currentLandIndex].size).fill({ type: "none", text: "___" })
    }
}
