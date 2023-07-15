var cauldron = {
    
    // Variables
    textCauldron : [],
    textBook : [],
    textActionsInfo : "",
    textActionsPut : "",
    textActionsInCauldron : "",
    textActions : "",
    textLeftPage : [],
    textRightPage : [],
    cauldron: {x: 10, y: 7, w: 58, h: 16},
    //cauldronPosX : 10, // X position of the cauldron in the system
    //cauldronPosY : 7, // Y position of the cauldron in the system
    //cauldronWidth : 58, // Width of the cauldron <pre>
    //cauldronHeight : 16, // Height
    smoke : {
        on: false,
        orientation: true,
        x: 0,
        y: 0
    },
    //smokeBool : false, // If true, there is a smoke right now above the cauldron
    //smokePosX : 0, // X position of this smoke
    //smokePosY : 0, // Y position
    //smokeOrientation : true, // Can be true or false, depending on the smoke orientation (two orientations possible, that's why it's a boolean)
    book : {x: 0, y: 0, w: 58, h: 17,
            page_1: {x: 9,  y: 1},
            page_2: {x: 43, y: 1},
            page_L: {x: 8,  y: 3},
            page_R: {x: 29, y: 3}},
    //bookPosX : 0, // X position of the book
    //bookPosY : 0, // Y position of the book
    //bookWidth : 58, // Width of the book <pre>
    //bookHeight : 17, // Height
    bookPage : 0, // Current book page
    maxBookPage : 26, // Max book page
    //bookFirstPageNumberPosX : 9, // X position of the first page number of the book (relative to the book)
    //bookFirstPageNumberPosY : 1, // Y
    //bookSecondPageNumberPosX : 43, // X second page
    //bookSecondPageNumberPosY : 1, // Y
    bookChangePageButtonPosX : 2, // X position of the book's buttons used to change pge
    bookChangePageButtonPosY : 16, // Y
    //bookLeftPagePosX : 8, // X position of the left page of the book
    //bookLeftPagePosY : 3, // Y
    //bookRightPagePosX : 29, // X right page
    //bookRightPagePosY : 3, // Y
    candiesInTheCauldron : 0, // Number of candies present in the cauldron
    lollipopsInTheCauldron : 0, // Idem for lollipops
    weAreMixing : false, // True if the player is mixing right now
    weAreBoiling : false, // True if the player is boiling right now
    candiesWhenWeBeganAction : 0, // Number of candies in the cauldron when we began mixing
    lollipopsWhenWeBeganAction : 0, // Idem lollipops
    actionsList : [{type:"none"}, {type:"none"}, {type:"none"}], // List of actions
    actionTimer : 0, // Count the number of seconds an action lasts
    
    // Functions
    registerAction : function(type, nbrCandies, nbrLollipops, timer){
        // We add the action to the list
        this.actionsList.push({type:type, nbrCandies:nbrCandies, nbrLollipops:nbrLollipops, timer:timer});
        
        // We delete one action if there's too much actions in the list
        if(this.actionsList.length > 3){
            this.actionsList.splice(0, 1);
        }
    },
    
    onload : function(){
        this.setBookPage(0);
    },
    
    checkVisibility : function(){
        if(objects.list.cauldron.have){
            // Show the cauldron tab, which have to be hidden before this point
            tabs.enable(3);
        
            // And we update everything on page
            this.updateCauldronOnPage();
            this.updateBookOnPage();
            this.updateActionsInfoOnPage();
            this.updateActionsPutOnPage();
            this.updateActionsInCauldronOnPage();
            this.updateActionsOnPage();
        }
    },
    
    resetCauldronText : function(){
        // Init the text var by putting lots of blank spaces
        this.textCauldron = [];
        for(var i = 0; i < this.cauldron.h; i++){
            this.textCauldron.push(""); // We add a line
            for(var j = 0; j < this.cauldron.w; j++){
                this.textCauldron[i] += " "; // We add a blank space in this line
            }
            this.textCauldron[i] += "\n"; // We add the end of line
        }
    },
    
    resetBookText : function(){
        // Init the text var by putting lots of blank spaces
        this.textBook = [];
        for(var i = 0; i < this.book.h; i++){
            this.textBook.push(""); // We add a line
            for(var j = 0; j < this.book.w; j++){
                this.textBook[i] += " "; // We add a blank space in this line
            }
            this.textBook[i] += "\n"; // We add the end of line
        }
    },
    
    setBookPage : function(value){
        // If the new value is correct
        if(value >= 0 && value <= this.maxBookPage){
            // We set it
            this.bookPage = value;
            // We set the text of the pages
            page = value * 2
            this.textLeftPage  = data.ascii.book_pages[page]
            this.textRightPage = data.ascii.book_pages[page + 1]
            // We update the book on page
            this.updateBookOnPage();
        }
    },
    
    previousPage : function(){
        this.setBookPage(this.bookPage-1);
    },
    
    nextPage : function(){
        this.setBookPage(this.bookPage+1);
    },
    
    drawBook : function(){
        const { x, y, page_1, page_2, page_L, page_R } = this.book
        // Draw the book itself
        for(i = 0; i < data.ascii.book.length; i++){
            this.textBook[y + i] = this.textBook[y + i].replaceAt(x, data.ascii.book[i]);
        }
        
        // Draw the page numbers
        this.textBook[y + page_1.y] = this.textBook[y + page_1.y].replaceAt(x + page_1.x, "" + this.bookPage * 2);
        this.textBook[y + page_2.y] = this.textBook[y + page_2.y].replaceAt(x + page_2.x, "" + (this.bookPage * 2 + 1));
    
        // Draw the previous and next page buttons
        this.textBook[y + this.bookChangePageButtonPosY] = this.textBook[y + this.bookChangePageButtonPosY].replaceAt(x + this.bookChangePageButtonPosX, "<button onclick=\"cauldron.previousPage()\">Previous page</button>                       <button onclick=\"cauldron.nextPage()\">Next page</button>");
    
        // Draw the left page text
        for(i = 0; i < this.textLeftPage.length; i++){
            this.textBook[page_L.y + i] = this.textBook[page_L.y + i].replaceAt(x + page_L.x, this.textLeftPage[i]);
        }
        
        // Idem right
        for(i = 0; i < this.textRightPage.length; i++){
            this.textBook[page_R.y + i] = this.textBook[page_R.y + i].replaceAt(x + page_R.x, this.textRightPage[i]);
        }
    },
    
    drawCauldron : function(){
        const { x, y } = this.cauldron
        // We draw the cauldron
        for(i = 0; i < data.ascii.cauldron.length; i++){
            this.textCauldron[y + i] = this.textCauldron[y + i].replaceAt(x, data.ascii.cauldron[i]);
        }
        
        // We add the smoke
        this.drawSmoke();
    },
    
    drawSmoke : function(){
        const { x, y, on, orientation } = this.smoke
        // Finally, if there's a smoke, we draw it
        if (on) {
            if (orientation) {
                this.textCauldron[y]   = this.textCauldron[y]  .replaceAt(x,     "(")
                this.textCauldron[y-1] = this.textCauldron[y-1].replaceAt(x + 1, ")")
            } else {
                this.textCauldron[y]   = this.textCauldron[y]  .replaceAt(x + 1, ")")
                this.textCauldron[y-1] = this.textCauldron[y-1].replaceAt(x,     "(")
            }
        }
    },
    
    moveSmoke : function(){
        // If we have the cauldron
        if(objects.list.cauldron.have) {
            if(!this.smoke.on) {
                this.smoke = {
                    on: true,
                    x: this.cauldron.x + 7 + random.getRandomIntUpTo(10),
                    y: this.cauldron.y,
                    orientation: random.flipACoin()
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
        }
        
        this.updateCauldronOnPage();
    },
    
    drawActionsInfo : function(){
        this.textActionsInfo = "<br/><b>What you have :</b><br/>";
        
        // Add candies and lollipops info
        this.textActionsInfo += "    Candies :   " + candies.nbrOwned;
        this.textActionsInfo += "<br/>    Lollipops : " + lollipops.nbrOwned;
    },
    
    drawActionsPut : function(){
        this.textActionsPut = "<b>What you want to put in the cauldron :</b><br/><br/>"
        this.textActionsPut += "<input id=\"cauldron_candies_quantity\" type=\"text\" size=\"10\"/> candies<br/>";
        this.textActionsPut += "<input id=\"cauldron_lollipops_quantity\" type=\"text\" size=\"10\"/> lollipops<br/>";
        this.textActionsPut += "<button onclick=\"cauldron.putInTheCauldron()\">Put all that in the cauldron</button> <span id=\"cauldron_comment\"></span><br/>";
    },
    
    drawActionsInCauldron : function(){
        this.textActionsInCauldron += "<b>What is in the cauldron :</b><br/>";
        this.textActionsInCauldron += "    Candies :   " + this.candiesInTheCauldron;
        this.textActionsInCauldron += "<br/>    Lollipops : " + this.lollipopsInTheCauldron + "<br/>";
    },
    
    drawActions : function(){
        this.textActions += "<b>What you can do with it :</b><br/>";
        this.textActions += "<button id=\"cauldron_mix\" onclick=\"cauldron.setWeAreMixing(true)\">Mix</button><button id=\"cauldron_boil\" onclick=\"cauldron.setWeAreBoiling(true)\">Boil</button><button disabled=\"disabled\" id=\"cauldron_stop\" onclick=\"cauldron.stopActions()\">Stop</button><br/><br/>";
        this.textActions += "<span id=\"cauldron_action_text\"></span>";
        this.textActions += "<button id=\"cauldron_put_into_bottles\" onclick=\"cauldron.putIntoBottles()\">Put everything into bottles</button><br/><br/>";
        this.textActions += "<span id=\"cauldron_results_text\"></span>";
    },
    
    increaseActionTimer : function(){
        this.setActionTimer(this.actionTimer + 1);
    },
    
    setActionTimer : function(value){
        // We set the value
        this.actionTimer = value;
        
        // We change on the page
        if(this.weAreMixing){
            if(this.actionTimer < 60){
                // If we just began mixing or we're mixing something
                if(this.actionTimer < 5 || (this.candiesInTheCauldron != 0 || this.lollipopsInTheCauldron != 0)){
                    // We show the timer
                    htmlInteraction.setInnerHtml("cauldron_timer", this.actionTimer);
                }
                // Else
                else{
                    // We show a special message
                    htmlInteraction.setInnerHtml("cauldron_timer", this.actionTimer + " ... You do realize that you're not mixing anything, right ?");
                }
            }
            else
                htmlInteraction.setInnerHtml("cauldron_timer", "too much mixing, your arms are hurting.");
        }

        texts = [
            "cold.",
            "lukewarm.",
            "hot..",
            "very hot...",
            "very very hot !",
            "bubbles begin to appear...",
            "bubbles begin to appear... and..",
            "BOILING !",
            "the water is burnt ! How is that even possible ?"
        ]
        intervals = [0,3,6,9,11,13,14,15,32]
        if (this.weAreBoiling) {
            text = texts[intervals.indexOf(this.actionTimer)]
            if (text) htmlInteraction.setInnerHtml("cauldron_timer", text)
        }
    },
    
    setWeAreMixing : function(value){
        // If we want to stop mixing
        if(value == false && this.weAreMixing == true){
            // Then we stop
            this.weAreMixing = false;
            // We register the mixing
            this.registerAction("mix", this.candiesWhenWeBeganAction, this.lollipopsWhenWeBeganAction, this.actionTimer);
        }
        // Else, if we want to begin mixing
        else if(value == true && this.weAreMixing == false){
            // Then we begin
            this.weAreMixing = true;
            this.disableActionsButtons();
            // We set the text
            htmlInteraction.setInnerHtml("cauldron_action_text", "Mixing... <span id=\"cauldron_timer\"></span><br/><br/>");
            // We set the timer
            this.setActionTimer(0);
            // We store some info
            this.candiesWhenWeBeganAction = this.candiesInTheCauldron;
            this.lollipopsWhenWeBeganAction = this.lollipopsInTheCauldron;
        }
    },
    
    setWeAreBoiling : function(value){
        // If we want to stop Boiling
        if(value == false && this.weAreBoiling == true){
            // Then we stop
            this.weAreBoiling = false;
            // We register the Boiling
            this.registerAction("boil", this.candiesWhenWeBeganAction, this.lollipopsWhenWeBeganAction, this.actionTimer);
        }
        // Else, if we want to begin Boiling
        else if(value == true && this.weAreBoiling == false){
            // Then we begin
            this.weAreBoiling = true;
            this.disableActionsButtons();
            // We set the text
            htmlInteraction.setInnerHtml("cauldron_action_text", "Boiling... <span id=\"cauldron_timer\"></span><br/><br/>");
            // We set the timer
            this.setActionTimer(0);
            // We store some info
            this.candiesWhenWeBeganAction = this.candiesInTheCauldron;
            this.lollipopsWhenWeBeganAction = this.lollipopsInTheCauldron;
        }
    },
    
    putIntoBottles : function(){
        // We create the vars which will store the results for a final drawing on the page
        var resultsList = [];
        var resultsText = "";
        
        // We store actions into vars for easier use
        var lastAc = this.actionsList[this.actionsList.length - 1];
        var lastLastAc = this.actionsList[this.actionsList.length - 2];
        var lastLastLastAc = this.actionsList[this.actionsList.length - 3];
        
        // Check for minor health potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops == 0 // We mixed no lollipop
        && lastAc.nbrCandies > 0 // We mixed at least one candy
        && lastAc.nbrCandies % 100 == 0 // The candies we mixed were a multiple of 100
        && lastAc.nbrCandies == this.candiesInTheCauldron && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add anything while mixing
        && lastAc.timer >= 11 && lastAc.timer <= 19){ // It took between 11 and 19 seconds
            potions.getPotions(potions.list.health, Math.floor(lastAc.nbrCandies/100)); // We add the potions to our stock
            resultsList.push({type:"minor health", nbr:Math.floor(lastAc.nbrCandies/100)}); // We add the result to the list
        }
        
        // Check for major health potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops > 0 // We mixed at least one lollipop
        && lastAc.nbrLollipops % 100 == 0 // The lollipops we mixed were a multiple of 100
        && lastAc.nbrCandies == 0 // We mixed no candy
        && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop while mixing
        && this.candiesInTheCauldron == lastAc.nbrLollipops // While mixing, we added as many candies as we had lollipops at the beginning
        && lastAc.timer >= 16 && lastAc.timer <= 24){ // It took between 16 and 24 seconds
            potions.getPotions(potions.list.majorHealth, Math.floor(lastAc.nbrLollipops/100)); // We add the potions to our stock
            resultsList.push({type:"major health", nbr:Math.floor(lastAc.nbrLollipops/100)}); // We add the result to the list
        }
        
        // Check for turtle potion
        if(
        /* LAST ACTION */
        lastAc.type == "boil" // Last action was boiling
        && lastAc.nbrCandies == 0 // We boiled no candy
        && lastAc.nbrLollipops > 0 // We boiled at least one lollipop
        && lastAc.nbrLollipops % 20000 == 0 // The lollipops we boiled were a multiple of 20000
        && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop while boiling
        && lastAc.nbrCandies == this.candiesInTheCauldron // We didn't add any candy while boiling
        && lastAc.timer >= 15 && lastAc.timer < 32 // It was boiling when we stopped boiling
        /* LAST LAST ACTION */
        && lastLastAc.type == "mix" // Last last action was mixing
        /* LAST LAST LAST ACTION */
        && lastLastLastAc.type == "boil" // Last last last action was boiling
        && lastLastLastAc.nbrCandies == 0 // We boiled no candy
        && lastLastLastAc.nbrLollipops > 0 // We boiled at least one lollipop
        && lastLastLastAc.nbrLollipops % 10000 == 0 // The lollipops we boiled were a multiple of 10000
        && lastLastLastAc.timer >= 15 && lastLastLastAc.timer < 32 // It was boiling when we stopped boiling
        /* STUFF BETWEEN ACTIONS */
        && lastAc.nbrLollipops == 2 * lastLastLastAc.nbrLollipops){ // We boiled at the end twice more lollipops than what we boiled at first
            potions.getPotions(potions.list.turtle, Math.floor(lastAc.nbrLollipops/20000)); // We add the potions to our stock
            resultsList.push({type:"turtle", nbr:Math.floor(lastAc.nbrLollipops/20000)}); // We add the result to the list
        }
        
        // Check for invulnerability potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops == 0 // We mixed no lollipop
        && lastAc.nbrCandies > 0 // We mixed at least one candy
        && lastAc.nbrCandies % 2000 == 0 // The candies we mixed were a multiple of 2000
        && lastAc.nbrCandies == this.candiesInTheCauldron && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add anything while mixing
        && lastAc.timer >= 60){ // It took >= 60 seconds
            potions.getPotions(potions.list.invulnerability, Math.floor(lastAc.nbrCandies/2000)); // We add the potions to our stock
            resultsList.push({type:"invulnerability", nbr:Math.floor(lastAc.nbrCandies/2000)}); // We add the result to the list
        }
        
        // Check for cloning potion
        if(lastAc.type == "boil" // Last action was boiling
        && lastAc.nbrLollipops == 0 // We boiled no lollipop
        && lastAc.nbrCandies == 0 // We boiled no candy
        && this.lollipopsInTheCauldron == 0 // We didn't add any lollipop while boiling
        && this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron) > 0 // With the candies we added while boiling (or after), we can make at least one potion
        && lastAc.timer >= 32){ // The water burnt while boiling
            potions.getPotions(potions.list.cloning, this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron)); // We add the potions to our stock
            resultsList.push({type:"cloning", nbr:this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron)}); // We add the result to the list
        }
        
        // Check for G.M.O.O.H. potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops > 0 // We mixed at least one lollipop
        && lastAc.nbrLollipops % 500 == 0 // The lollipops we mixed were a multiple of 500
        && lastAc.nbrCandies == 10000 // We mixed 10000 candies
        && this.candiesInTheCauldron == lastAc.nbrCandies // We didn't add any candy while mixing
        && this.lollipopsInTheCauldron == lastAc.nbrLollipops){ // We didn't add any lollipop while mixing
            potions.getPotions(potions.list.gmooh, Math.floor(lastAc.nbrLollipops/500)); // We add the potions to our stock
            resultsList.push({type:"G.M.O.O.H.", nbr:Math.floor(lastAc.nbrLollipops/500)}); // We add the result to the list
        }
        
        // Check for superman potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops == 0 // We mixed no lollipop
        && lastAc.nbrCandies > 0 // We mixed at least one candy
        && lastAc.nbrCandies % 180 == 0 // The candies we mixed were a multiple of 180
        && lastAc.nbrCandies == this.candiesInTheCauldron && lastAc.nbrLollipops == this.lollipopsInTheCauldron){ // We didn't add anything while mixing
            potions.getPotions(potions.list.superman, Math.floor(lastAc.nbrCandies/180)); // We add the potions to our stock
            resultsList.push({type:"superman", nbr:Math.floor(lastAc.nbrCandies/180)}); // We add the result to the list
        }
        
        // Check for seed
        if(lastAc.type == "boil" // Last action was boiling
        && lastAc.nbrLollipops == 0 // We boiled no lollipop
        && lastAc.nbrCandies == 0 // We boiled no candy
        && this.lollipopsInTheCauldron == 0 // We didn't add any lollipop while boiling
        && this.candiesInTheCauldron > 0 // We added at least one candy while or after boiling
        && this.candiesInTheCauldron % 650 == 0){ // The candies we added while or after boiling are a multiple of 650
            potions.getPotions(potions.list.seed, Math.floor(this.candiesInTheCauldron/650)); // We add the potions to our stock
            resultsList.push({type:"seed", nbr:Math.floor(this.candiesInTheCauldron/650), special:true, plural:"seeds"}); // We add the result to the list
        }
        
        // Check for jelly
        if(
        /* ACTIONS TYPES */
        lastAc.type == "boil" // Last action was boiling
        && lastLastAc.type == "mix" // Last last action was mixing
        && lastLastLastAc.type == "boil" // Last last last action was boiling
        /* LAST LAST LAST ACTION */
        && lastLastLastAc.nbrLollipops == 0 // No lollipop
        && lastLastLastAc.nbrCandies > 0 // At least one candy
        && lastLastLastAc.nbrCandies % 600 == 0 // Candies multiple of 600
        /* LAST LAST ACTION */
        && lastLastAc.nbrLollipops > 0 // At least one lollipop
        && lastLastAc.nbrLollipops % 6000 == 0 // Lollipops mutiple of 6000
        && lastLastAc.nbrLollipops == 10*lastLastLastAc.nbrCandies // Lollipops = 10*candies of last last last action
        && lastLastAc.nbrCandies == lastLastLastAc.nbrCandies // As many candies as last last last action
        /* LAST ACTION */
        && lastAc.nbrLollipops == lastLastAc.nbrLollipops // As many lollipops as last last action
        && lastAc.nbrCandies == lastLastLastAc.nbrCandies*2 // Twice more candies than last last last action
        && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop
        && lastAc.nbrCandies == this.candiesInTheCauldron){ // We didn't add any candy
            potions.getPotions(potions.list.jelly, Math.floor(lastAc.nbrCandies/600)); // We add the potions to our stock
            resultsList.push({type:"jelly", nbr:Math.floor(lastAc.nbrCandies/600), special:true, plural:"jellies"}); // We add the result to the list
        }
        
        // We show the result on the page if there's any result
        if(resultsList.length > 0){
            for(var i = 0; i < resultsList.length; i++){
                if(resultsList[i].special != true){
                    if(resultsList[i].nbr > 1){
                        resultsText += "You made " + resultsList[i].nbr + " " + resultsList[i].type + " potions !<br/>";
                    }
                    else{
                        resultsText += "You made a " + resultsList[i].type + " potion.<br/>";
                    }
                }
                else{
                    if(resultsList[i].nbr > 1){
                        resultsText += "You made " + resultsList[i].nbr + " " + resultsList[i].plural + " !<br/>";
                    }
                    else{
                        resultsText += "You made a " + resultsList[i].type + ".<br/>";
                    }
                }
            }
            htmlInteraction.setInnerHtml("cauldron_results_text", resultsText);
        }
        else{
            htmlInteraction.setInnerHtml("cauldron_results_text", "You don't manage to get anything interesting with that preparation.<br/>Did you follow the manual's instructions ?");
        }
        
        // We empty the cauldron
        this.setCandiesInTheCauldron(0);
        this.setLollipopsInTheCauldron(0);
        
        // We reset the actions list
        this.actionsList = [{type:"none"}, {type:"none"}, {type:"none"}];
    },
    
    convertCandiesToPotionsForTheCloningPotion : function(howMuch){
        return Math.floor(howMuch / 1337);
    },
    
    disableActionsButtons : function(){
        // We disable the mixing button
        htmlInteraction.disableButton("cauldron_mix");
        // We disable the put into bottles button
        htmlInteraction.disableButton("cauldron_put_into_bottles");
        // We disable the boiling button
        htmlInteraction.disableButton("cauldron_boil");
        // We enable the stopping button
        htmlInteraction.enableButton("cauldron_stop");
    },
    
    enableActionsButtons : function(){
        // We re enable the mixing button
        htmlInteraction.enableButton("cauldron_mix");
        // We re enable the put into bottles button
        htmlInteraction.enableButton("cauldron_put_into_bottles");
        // We re enable the boiling button
        htmlInteraction.enableButton("cauldron_boil");
        // We disable the button
        htmlInteraction.disableButton("cauldron_stop");
    },
    
    stopActions : function(){
        // Stop all actions
        this.setWeAreMixing(false);
        this.setWeAreBoiling(false);
        
        // Re enable buttons
        this.enableActionsButtons();
        
        // Empty the action text
        htmlInteraction.setInnerHtml("cauldron_action_text", "");
    },
    
    putInTheCauldron : function(){
        // We get the values of the text inputs
        var candiesInput = htmlInteraction.getElement("cauldron_candies_quantity").value;
        var lollipopsInput = htmlInteraction.getElement("cauldron_lollipops_quantity").value;
        
        // We get the quantities
        if(candiesInput != ""){
            var candiesQuantity = parseInt(candiesInput);
        }
        else candiesQuantity = 0;
        
        if(lollipopsInput != ""){
            var lollipopsQuantity = parseInt(lollipopsInput);
        }
        else lollipopsQuantity = 0;
        
        // If the quantities are incorrect
        if(isNaN(candiesQuantity) || isNaN(lollipopsQuantity)){
            // If both values are incorrect
            if(isNaN(candiesQuantity) && isNaN(lollipopsQuantity)){
                htmlInteraction.setInnerHtml("cauldron_comment", "The values you entered are not numbers.");
            }
            // If only the candies value is incorrect
            else if(isNaN(candiesQuantity)){
                htmlInteraction.setInnerHtml("cauldron_comment", "The value you entered for candies is not a number.");
            }
            // Else, only the lollipops value is incorrect
            else{
                htmlInteraction.setInnerHtml("cauldron_comment", "The value you entered for lollipops is not a number.");
            }
        }
        // Else, if we don't have enough candies or lollipops to put all that in the cauldron
        else if(candiesQuantity > candies.nbrOwned || lollipopsQuantity > lollipops.nbrOwned){
            htmlInteraction.setInnerHtml("cauldron_comment", "You don't have enough to put all that in the cauldron !");
        }
        // Else, if one if the value is negative
        else if(candiesQuantity < 0 || lollipopsQuantity < 0){
            htmlInteraction.setInnerHtml("cauldron_comment", "Don't put negative values !");
        }
        // Else, we put all that in the cauldron !
        else{
            htmlInteraction.setInnerHtml("cauldron_comment", ""); // We empty the comment
            // We clear the text inputs
            htmlInteraction.getElement("cauldron_candies_quantity").value = "";
            htmlInteraction.getElement("cauldron_lollipops_quantity").value = "";
            // We substract candies from our stock
            candies.setNbrOwned(candies.nbrOwned - candiesQuantity);
            lollipops.setNbrOwned(lollipops.nbrOwned - lollipopsQuantity);
            // And we add them in the cauldron
            this.setCandiesInTheCauldron(this.candiesInTheCauldron + candiesQuantity);
            this.setLollipopsInTheCauldron(this.lollipopsInTheCauldron + lollipopsQuantity);
        }
    },
    
    setCandiesInTheCauldron : function(value){
        this.candiesInTheCauldron = value;
        this.updateActionsInCauldronOnPage();
    },
    
    setLollipopsInTheCauldron : function(value){
        this.lollipopsInTheCauldron = value;
        this.updateActionsInCauldronOnPage();
    },
    
    updateCauldronOnPage : function(){
        this.resetCauldronText();
        this.drawCauldron();
        htmlInteraction.setInnerHtml("cauldron_cauldron", this.textCauldron.join(""));
    },
    
    updateBookOnPage : function(){
        this.resetBookText();
        this.drawBook();
        htmlInteraction.setInnerHtml("cauldron_book", this.textBook.join(""));
    },
    
    updateActionsInfoOnPage : function(){
        this.textActionsInfo = "";
        this.drawActionsInfo();
        htmlInteraction.setInnerHtml("cauldron_actions_info", this.textActionsInfo);
    },
    
    updateActionsPutOnPage : function(){
        this.textActionsPut = "";
        this.drawActionsPut();
        htmlInteraction.setInnerHtml("cauldron_actions_put", this.textActionsPut);
    },
    
    updateActionsInCauldronOnPage : function(){
        this.textActionsInCauldron = "";
        this.drawActionsInCauldron();
        htmlInteraction.setInnerHtml("cauldron_actions_in_cauldron", this.textActionsInCauldron);
    },
    
    updateActionsOnPage : function(){
        this.textActions = "";
        this.drawActions();
        htmlInteraction.setInnerHtml("cauldron_actions", this.textActions);
    },
    
};
