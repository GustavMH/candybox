var cauldron = {
    textCauldron : [],
    textBook : [],
    textLeftPage : [],
    textRightPage : [],
    cauldron: {x: 10, y: 7, w: 58, h: 16},
    smoke : {
        on: false,
        orientation: true,
        x: 0,
        y: 0
    },
    book : {x: 0, y: 0, w: 58, h: 17,
            page_no_1: {x: 9,  y: 1},
            page_no_2: {x: 43, y: 1},
            page_L: {x: 8,  y: 3},
            page_R: {x: 29, y: 3}},
    bookPage : 0, // Current book page
    maxBookPage : 26, // Max book page
    candiesInTheCauldron : 0, // Number of candies present in the cauldron
    lollipopsInTheCauldron : 0, // Idem for lollipops
    weAreMixing : false, // True if the player is mixing right now
    weAreBoiling : false, // True if the player is boiling right now
    candiesWhenWeBeganAction : 0, // Number of candies in the cauldron when we began mixing
    lollipopsWhenWeBeganAction : 0, // Idem lollipops
    actions: [],
    actionsList : [{type:"none"}, {type:"none"}, {type:"none"}], // List of actions
    actionTimer : 0, // Count the number of seconds an action lasts

    registerAction : function(type, nbrCandies, nbrLollipops, timer){
        // We add the action to the list
        this.actionsList.push({type:type, nbrCandies:nbrCandies, nbrLollipops:nbrLollipops, timer:timer})

        // We delete one action if there's too much actions in the list
        if(this.actionsList.length > 3){
            this.actionsList.splice(0, 1)
        }
    },

    onload : function(){
        this.setBookPage(0)
    },

    checkVisibility : function(){
        if(objects.all.cauldron.have){
            // Show the cauldron tab, which have to be hidden before this point
            tabs.enable(3)

            // And we update everything on page
            this.updateCauldronOnPage()
            this.updateBookOnPage()
            this.updateActionsInfoOnPage()
            this.updateActionsPutOnPage()
            this.updateActionsInCauldronOnPage()
            this.updateActionsOnPage()
        }
    },

    resetCauldronText : function(){
        // Init the text var by putting lots of blank spaces
        const { h, w } = this.cauldron
        this.textCauldron = Array(h).fill(Array(w).fill(" ").join("") + "\n")
    },

    resetBookText : function(){
        // Init the text var by putting lots of blank spaces
        const { h, w } = this.book
        this.textBook = Array(h).fill(Array(w).fill(" ").join("") + "\n")
    },

    setBookPage : function(value){
        // If the new value is correct
        if(value >= 0 && value <= this.maxBookPage){
            // We set it
            this.bookPage = value
            // We set the text of the pages
            page = value * 2
            this.textLeftPage  = data.ascii.book_pages[page]
            this.textRightPage = data.ascii.book_pages[page + 1]
            // We update the book on page
            this.updateBookOnPage()
        }
    },

    previousPage : function(){
        this.setBookPage(this.bookPage-1)
    },

    nextPage : function(){
        this.setBookPage(this.bookPage+1)
    },

    drawBook : function(){
        const { x, y, page_no_1, page_no_2, page_L, page_R } = this.book
        this.textBook = layer_texts(
            this.textBook,
            [
                // Draw the book itself
                [data.ascii.book, x, y],
                // Draw the page numbers
                [["" +  this.bookPage * 2],      page_no_1.x, page_no_1.y],
                [["" + (this.bookPage * 2 + 1)], page_no_2.x, page_no_2.y],
                // Draw the page text
                [this.textLeftPage,  page_L.x, page_L.y],
                [this.textRightPage, page_R.x, page_R.y]
            ])

        // Draw the previous and next page buttons
        this.textBook.push("   <button onclick=\"cauldron.previousPage()\">Previous page</button>                       <button onclick=\"cauldron.nextPage()\">Next page</button>")
    },

    drawCauldron : function(){
        const { x, y } = this.cauldron
        // We draw the cauldron
        this.textCauldron = layer_text(this.textCauldron, data.ascii.cauldron, x, y)

        // We add the smoke
        this.drawSmoke()
    },

    drawSmoke : function(){
        const { x, y, on, orientation } = this.smoke
        // Finally, if there's a smoke, we draw it
        if (on) {
            block = orientation ? ["( "," )"] : [" )","( "]
            this.textCauldron = layer_text(this.textCauldron, block, x, y-1)
        }
    },

    moveSmoke : function(){
        if(!this.smoke.on) {
            this.smoke = {
                on: true,
                x: this.cauldron.x + 7 + r_int(1+10),
                y: this.cauldron.y,
                orientation: r_coin()
            }
        } else {
            // We make it go up
            this.smoke.y -= 1
            // We switch its orientation
            this.smoke.orientation = !this.smoke.orientation
            // If it's too high, there's no smoke anymore
            if(this.cauldron.y - this.smoke.y > 3)
                this.smoke.on = false
        }

        this.updateCauldronOnPage()
    },
    increaseActionTimer : function(){
        this.setActionTimer(this.actionTimer + 1)
    },
    
    setActionTimer : function(value){
        // We set the value
        this.actionTimer = value
        /* TODO mere kompakt branching */
        
        // We change on the page
        if(this.weAreMixing) {
            timer = this.actionTimer
            somethingInCauldron = (this.candiesInTheCauldron != 0 || this.lollipopsInTheCauldron != 0)

            text = timer < 60
                ? timer > 5 && !somethingInCauldron
                    ? timer + " ... You do realize that you're not mixing anything, right ?"
                    : timer
                : "too much mixing, your arms are hurting."

            html.setInner("cauldron_timer", text)
        }

        if (this.weAreBoiling) {
            const { intervals, texts } = data.text.cauldron_boiling
            text = texts[intervals.indexOf(this.actionTimer)]
            if (text) html.setInner("cauldron_timer", text)
        }
    },
    
    setWeAreMixing : function(value){
        this.weAreMixing = value

        if(!value){
            this.registerAction("mix", this.candiesWhenWeBeganAction, this.lollipopsWhenWeBeganAction, this.actionTimer)
        } else {
            this.disableActionsButtons()
            html.setInner("cauldron_action_text", "Mixing... <span id=\"cauldron_timer\"></span><br/><br/>")
            this.setActionTimer(0)

            this.candiesWhenWeBeganAction = this.candiesInTheCauldron
            this.lollipopsWhenWeBeganAction = this.lollipopsInTheCauldron
        }
    },
    
    setWeAreBoiling : function(value){
        this.weAreBoiling = value

        if(!value){
            this.registerAction("boil", this.candiesWhenWeBeganAction, this.lollipopsWhenWeBeganAction, this.actionTimer)
        } else {
            this.disableActionsButtons()
            html.setInner("cauldron_action_text", "Boiling... <span id=\"cauldron_timer\"></span><br/><br/>")
            this.setActionTimer(0)

            this.candiesWhenWeBeganAction = this.candiesInTheCauldron
            this.lollipopsWhenWeBeganAction = this.lollipopsInTheCauldron
        }
    },
    
    putIntoBottles : function(){
        // We create the vars which will store the results for a final drawing on the page
        var resultsList = []
        var resultsText = ""
        
        // We store actions into vars for easier use
        const [ac_0, ac_1, ac_2] = this.actionsList

        /* { mix: time, n_candies: 100 } save action timestamp*/

        const check_recipe = (recipe, actions) => {
            check = data.recipes[0][0]
            if(ac_0.type == check.type
               && ac_0.nbrLollipos == check.n_lollipops)
            {

            }

        }


        // Check for minor health potion
        if(ac_0.type == "mix" // Last action was mixing
           && ac_0.nbrLollipops == 0 // We mixed no lollipop
           && ac_0.nbrCandies > 0 // We mixed at least one candy
           && ac_0.nbrCandies % 100 == 0 // The candies we mixed were a multiple of 100
           && ac_0.nbrCandies == this.candiesInTheCauldron && ac_0.nbrLollipops == this.lollipopsInTheCauldron // We didn't add anything while mixing
           && ac_0.timer >= 11 && ac_0.timer <= 19){ // It took between 11 and 19 seconds
            potions.getPotions(potions.list.health, Math.floor(ac_0.nbrCandies/100)); // We add the potions to our stock
            resultsList.push({type:"minor health", nbr: Math.floor(ac_0.nbrCandies/100)}); // We add the result to the list
        }
        
        // Check for major health potion
        if(ac_0.type == "mix" // Last action was mixing
           && ac_0.nbrLollipops > 0 // We mixed at least one lollipop
           && ac_0.nbrLollipops % 100 == 0 // The lollipops we mixed were a multiple of 100
           && ac_0.nbrCandies == 0 // We mixed no candy
           && ac_0.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop while mixing
           && this.candiesInTheCauldron == ac_0.nbrLollipops // While mixing, we added as many candies as we had lollipops at the beginning
           && ac_0.timer >= 16 && ac_0.timer <= 24){ // It took between 16 and 24 seconds
            potions.getPotions(potions.list.majorHealth, Math.floor(ac_0.nbrLollipops/100)); // We add the potions to our stock
            resultsList.push({type:"major health", nbr:Math.floor(ac_0.nbrLollipops/100)}); // We add the result to the list
        }
        
        // Check for turtle potion
        if(
            /* LAST ACTION */
            ac_0.type == "boil" // Last action was boiling
                && ac_0.nbrCandies == 0 // We boiled no candy
                && ac_0.nbrLollipops > 0 // We boiled at least one lollipop
                && ac_0.nbrLollipops % 20000 == 0 // The lollipops we boiled were a multiple of 20000
                && ac_0.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop while boiling
                && ac_0.nbrCandies == this.candiesInTheCauldron // We didn't add any candy while boiling
                && ac_0.timer >= 15 && ac_0.timer < 32 // It was boiling when we stopped boiling
            /* LAST LAST ACTION */
                && ac_1.type == "mix" // Last last action was mixing
            /* LAST LAST LAST ACTION */
                && ac_2.type == "boil" // Last last last action was boiling
                && ac_2.nbrCandies == 0 // We boiled no candy
                && ac_2.nbrLollipops > 0 // We boiled at least one lollipop
                && ac_2.nbrLollipops % 10000 == 0 // The lollipops we boiled were a multiple of 10000
                && ac_2.timer >= 15 && ac_2.timer < 32 // It was boiling when we stopped boiling
            /* STUFF BETWEEN ACTIONS */
                && ac_0.nbrLollipops == 2 * ac_2.nbrLollipops){ // We boiled at the end twice more lollipops than what we boiled at first
            potions.getPotions(potions.list.turtle, Math.floor(ac_0.nbrLollipops/20000)); // We add the potions to our stock
            resultsList.push({type:"turtle", nbr:Math.floor(ac_0.nbrLollipops/20000)}); // We add the result to the list
        }
        
        // Check for invulnerability potion
        if(ac_0.type == "mix" // Last action was mixing
           && ac_0.nbrLollipops == 0 // We mixed no lollipop
           && ac_0.nbrCandies > 0 // We mixed at least one candy
           && ac_0.nbrCandies % 2000 == 0 // The candies we mixed were a multiple of 2000
           && ac_0.nbrCandies == this.candiesInTheCauldron && ac_0.nbrLollipops == this.lollipopsInTheCauldron // We didn't add anything while mixing
           && ac_0.timer >= 60){ // It took >= 60 seconds
            potions.getPotions(potions.list.invulnerability, Math.floor(ac_0.nbrCandies/2000)); // We add the potions to our stock
            resultsList.push({type:"invulnerability", nbr:Math.floor(ac_0.nbrCandies/2000)}); // We add the result to the list
        }
        
        // Check for cloning potion
        if(ac_0.type == "boil" // Last action was boiling
           && ac_0.nbrLollipops == 0 // We boiled no lollipop
           && ac_0.nbrCandies == 0 // We boiled no candy
           && this.lollipopsInTheCauldron == 0 // We didn't add any lollipop while boiling
           && this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron) > 0 // With the candies we added while boiling (or after), we can make at least one potion
           && ac_0.timer >= 32){ // The water burnt while boiling
            potions.getPotions(potions.list.cloning, this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron)); // We add the potions to our stock
            resultsList.push({type:"cloning", nbr:this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron)}); // We add the result to the list
        }
        
        // Check for G.M.O.O.H. potion
        if(ac_0.type == "mix" // Last action was mixing
           && ac_0.nbrLollipops > 0 // We mixed at least one lollipop
           && ac_0.nbrLollipops % 500 == 0 // The lollipops we mixed were a multiple of 500
           && ac_0.nbrCandies == 10000 // We mixed 10000 candies
           && this.candiesInTheCauldron == ac_0.nbrCandies // We didn't add any candy while mixing
           && this.lollipopsInTheCauldron == ac_0.nbrLollipops){ // We didn't add any lollipop while mixing
            potions.getPotions(potions.list.gmooh, Math.floor(ac_0.nbrLollipops/500)); // We add the potions to our stock
            resultsList.push({type:"G.M.O.O.H.", nbr:Math.floor(ac_0.nbrLollipops/500)}); // We add the result to the list
        }
        
        // Check for superman potion
        if(ac_0.type == "mix" // Last action was mixing
           && ac_0.nbrLollipops == 0 // We mixed no lollipop
           && ac_0.nbrCandies > 0 // We mixed at least one candy
           && ac_0.nbrCandies % 180 == 0 // The candies we mixed were a multiple of 180
           && ac_0.nbrCandies == this.candiesInTheCauldron && ac_0.nbrLollipops == this.lollipopsInTheCauldron){ // We didn't add anything while mixing
            potions.getPotions(potions.list.superman, Math.floor(ac_0.nbrCandies/180)); // We add the potions to our stock
            resultsList.push({type:"superman", nbr:Math.floor(ac_0.nbrCandies/180)}); // We add the result to the list
        }
        
        // Check for seed
        if(ac_0.type == "boil" // Last action was boiling
           && ac_0.nbrLollipops == 0 // We boiled no lollipop
           && ac_0.nbrCandies == 0 // We boiled no candy
           && this.lollipopsInTheCauldron == 0 // We didn't add any lollipop while boiling
           && this.candiesInTheCauldron > 0 // We added at least one candy while or after boiling
           && this.candiesInTheCauldron % 650 == 0){ // The candies we added while or after boiling are a multiple of 650
            potions.getPotions(potions.list.seed, Math.floor(this.candiesInTheCauldron/650)); // We add the potions to our stock
            resultsList.push({type:"seed", nbr:Math.floor(this.candiesInTheCauldron/650), special:true, plural:"seeds"}); // We add the result to the list
        }
        
        // Check for jelly
        if(
            /* ACTIONS TYPES */
            ac_0.type == "boil" // Last action was boiling
                && ac_1.type == "mix" // Last last action was mixing
                && ac_2.type == "boil" // Last last last action was boiling
            /* LAST LAST LAST ACTION */
                && ac_2.nbrLollipops == 0 // No lollipop
                && ac_2.nbrCandies > 0 // At least one candy
                && ac_2.nbrCandies % 600 == 0 // Candies multiple of 600
            /* LAST LAST ACTION */
                && ac_1.nbrLollipops > 0 // At least one lollipop
                && ac_1.nbrLollipops % 6000 == 0 // Lollipops mutiple of 6000
                && ac_1.nbrLollipops == 10*ac_2.nbrCandies // Lollipops = 10*candies of last last last action
                && ac_1.nbrCandies == ac_2.nbrCandies // As many candies as last last last action
            /* LAST ACTION */
                && ac_0.nbrLollipops == ac_1.nbrLollipops // As many lollipops as last last action
                && ac_0.nbrCandies == ac_2.nbrCandies*2 // Twice more candies than last last last action
                && ac_0.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop
                && ac_0.nbrCandies == this.candiesInTheCauldron){ // We didn't add any candy
            potions.getPotions(potions.list.jelly, Math.floor(ac_0.nbrCandies/600)); // We add the potions to our stock
            resultsList.push({type:"jelly", nbr:Math.floor(ac_0.nbrCandies/600), special:true, plural:"jellies"}); // We add the result to the list
        }
        
        // We show the result on the page if there's any result
        if(resultsList.length > 0){
            for(var i = 0; i < resultsList.length; i++){
                if(resultsList[i].special != true){
                    if(resultsList[i].nbr > 1){
                        resultsText += "You made " + resultsList[i].nbr + " " + resultsList[i].type + " potions !<br/>"
                    }
                    else{
                        resultsText += "You made a " + resultsList[i].type + " potion.<br/>"
                    }
                }
                else{
                    if(resultsList[i].nbr > 1){
                        resultsText += "You made " + resultsList[i].nbr + " " + resultsList[i].plural + " !<br/>"
                    }
                    else{
                        resultsText += "You made a " + resultsList[i].type + ".<br/>"
                    }
                }
            }
            html.setInner("cauldron_results_text", resultsText)
        }
        else{
            html.setInner("cauldron_results_text", "You don't manage to get anything interesting with that preparation.<br/>Did you follow the manual's instructions ?")
        }
        
        // We empty the cauldron
        this.setCandiesInTheCauldron(0)
        this.setLollipopsInTheCauldron(0)
        
        // We reset the actions list
        this.actionsList = [{type:"none"}, {type:"none"}, {type:"none"}]
    },
    
    convertCandiesToPotionsForTheCloningPotion : function(howMuch){
        return Math.floor(howMuch / 1337)
    },
    
    disableActionsButtons : function(){
        html.disableButton("cauldron_mix")
        html.disableButton("cauldron_put_into_bottles")
        html.disableButton("cauldron_boil")

        html.enableButton("cauldron_stop")
    },
    
    enableActionsButtons : function(){
        html.enableButton("cauldron_mix")
        html.enableButton("cauldron_put_into_bottles")
        html.enableButton("cauldron_boil")

        html.disableButton("cauldron_stop")
    },
    
    stopActions : function(){
        // Stop all actions
        if (this.weAreMxing)   this.setWeAreMixing(false)
        if (this.weAreBoiling) this.setWeAreBoiling(false)
        
        // Re enable buttons
        this.enableActionsButtons()
        
        // Empty the action text
        html.setInner("cauldron_action_text", "")
    },
    
    putInTheCauldron : function(){
        // We get the values of the text inputs
        const str_candies   = html.getElement("cauldron_candies_quantity").value
        const str_lollipops = html.getElement("cauldron_lollipops_quantity").value
        
        // We get the quantities
        const n_candies   = str_candies   != "" ? parseInt(str_candies)   : 0
        const n_lollipops = str_lollipops != "" ? parseInt(str_lollipops) : 0

        let val_error = data.text.brewing_val_errors[[
            isNaN(n_candies),
            isNaN(n_lollipops),
            isNaN(n_candies) && isNaN(n_lollipops),
            n_candies > candies.nbrOwned || n_lollipops > lollipops.nbrOwned,
            n_candies < 0 || n_lollipops < 0
        ].findIndex((a) => a) || 5]

        if (val_error) html.setInner("cauldron_comment", val_error)
        else {
            html.getElement("cauldron_candies_quantity")  .value = ""
            html.getElement("cauldron_lollipops_quantity").value = ""

            candies.  setNbrOwned(candies.nbrOwned   - n_candies)
            lollipops.setNbrOwned(lollipops.nbrOwned - n_lollipops)

            this.setCandiesInTheCauldron  (this.candiesInTheCauldron   + n_candies)
            this.setLollipopsInTheCauldron(this.lollipopsInTheCauldron + n_lollipops)
        }
    },

    setCandiesInTheCauldron : function(value){
        this.candiesInTheCauldron = value
        this.updateActionsInCauldronOnPage()
    },
    
    setLollipopsInTheCauldron : function(value){
        this.lollipopsInTheCauldron = value
        this.updateActionsInCauldronOnPage()
    },
    
    updateCauldronOnPage : function(){
        this.resetCauldronText()
        this.drawCauldron()
        html.setInner("cauldron_cauldron", this.textCauldron.join(""))
    },
    
    updateBookOnPage : function(){
        this.resetBookText()
        this.drawBook()
        html.setInner("cauldron_book", this.textBook.join(""))
    },
    
    updateActionsInfoOnPage : function(){
        html.setInner("cauldron_actions_info", data.text.brewing_actions.info)
        html.setInner("candies_n", candies.nbrOwned)
        html.setInner("lollipops_n", lollipops.nbrOwned)
    },
    
    updateActionsPutOnPage : function(){
        html.setInner("cauldron_actions_put", data.text.brewing_actions.put)
    },
    
    updateActionsInCauldronOnPage : function(){
        html.setInner("cauldron_actions_in_cauldron", data.text.brewing_actions.in_cauldron)
        html.setInner("candies_in_cauldron",  this.candiesInTheCauldron)
        html.setInner("lollipops_in_cauldron", this.lollipopsInTheCauldron)
    },
    
    updateActionsOnPage : function(){
        html.setInner("cauldron_actions", data.text.brewing_actions.actions)
    },
}
