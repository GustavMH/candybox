var buttons = {
  
    // Variables
    
    homeButtonsDisabled : false, // Block any enabling home button process when true
    
    // Functions
    
    enableHomeButtons : function(){
        if(this.homeButtonsDisabled == true){
            this.homeButtonsDisabled = false;
            html.enableButtonClass("home_button");
            this.checkHomeEnabled();
        }
    },
    
    enableButton : function(name){
        // If the home buttons are enabled or our button isn't a home button
        if(this.homeButtonsDisabled == false || html.getElement(name).className != "home_button"){
            html.enableButton(name);
        }
    },
    
    checkEatAndThrowButtons : function(){
        // Show the eat button
        if(candies.nbrOwned >= 1){
            html.showButton("eat");
            this.enableButton("eat");
        }
        else html.disableButton("eat");
        
        // Show the throw button
        if(candies.nbrOwned >= 10){
            html.showButton("throw_10");
            this.enableButton("throw_10");
        }
        else html.disableButton("throw_10");
    },
    
    checkHomeEnabled : function(){
        this.checkEatAndThrowButtons();
        this.checkQuestBuyingButtons();
        this.checkEncrustSwordButton();
        this.checkPolishSwordButton();
        this.checkCoatSwordButton();
        this.checkLollipopsStockShortage();
        this.checkObjects();
        this.checkLollipopsPlantingButtons();
        this.checkQuestTiredTime();
    },
    
    checkCandies : function(){
        this.checkEatAndThrowButtons();
        this.checkQuestBuyingButtons();
        this.checkEncrustSwordButton();
        this.checkLollipopsStockShortage();
        this.checkWishingWell();
    },
    
    checkSword : function(){
        this.checkQuestBuyingButtons();
        this.checkEncrustSwordButton();
        this.checkPolishSwordButton();
        this.checkCoatSwordButton();
        this.checkTabPanel();
    },
    
    checkTabPanel : function(){
        // If we have a sword
        if(sword.name != "none"){
            // We enable the tab bar
            html.setElementDisplay("tabBar", "");
            // And we enable some tabs
	        tabs.enable(0);
            tabs.enable(1);
            tabs.enable(2);
            // And we show the switch tabs button
            html.showButtonClass("toggle");
        }
    },
    
    checkQuestBuyingButtons : function(){
        // Enable/disable quest buying buttons (show/hide is handle by sword&shop algorithms)
        
        // Swords
        if(shop.currentSwordButtonId != "none"){ // If the merchant is selling a sword right now
            if(candies.nbrOwned >= shop.currentSwordPrice) this.enableButton(shop.currentSwordButtonId);
            else html.disableButton(shop.currentSwordButtonId);
        }
        
        // Potions & scrolls
        if(candies.nbrOwned >= 600) this.enableButton("buy_health_potion");
        else html.disableButton("buy_health_potion");
        
        if(candies.nbrOwned >= 150) this.enableButton("buy_escape_potion");
        else html.disableButton("buy_escape_potion");
        
        if(candies.nbrOwned >= 400) this.enableButton("buy_scroll");
        else html.disableButton("buy_scroll");
    },
    
    checkEncrustSwordButton : function(){
        // Show the encrust the diamond sword button
        if(candies.nbrOwned >= 101 && sword.name == "diamond sword"){
            html.showButton("encrust");
            this.enableButton("encrust");
            html.setElementDisplay("encrust", "inline");
            html.setElementDisplay("polish", "none");
            html.setElementDisplay("coat", "none");
        }
        else html.disableButton("encrust");
    },
    
    checkPolishSwordButton : function(){
        // Show the polish the diamond sword button
        if(lollipops.nbrOwned >= 30 && sword.name == "candy diamond sword"){
            html.showButton("polish");
            this.enableButton("polish");
            html.setElementDisplay("encrust", "none");
            html.setElementDisplay("polish", "inline");
            html.setElementDisplay("coat", "none");
        }
        else html.disableButton("polish");
    },
    
    checkLollipops : function(){
        this.checkPolishSwordButton();
        this.checkLollipopsPlantingButtons();
        this.checkHut();
        this.checkLollipopsStockShortage();
        this.checkComputer();
    },
    
    checkComputer : function(){
        if(lollipops.nbrOwned >= 1000000){
            html.showButton("computer_bug_1");
            html.showButton("computer_comment_1");
        }
        else{
            html.hideButton("computer_bug_1");
        }
        
        if(lollipops.nbrOwned >= 10000000){
            html.showButton("computer_bug_2");
            html.showButton("computer_comment_2");
        }
        else{
            html.hideButton("computer_bug_2");
        }
        
        if(lollipops.nbrOwned >= 100000000){
            html.showButton("computer_bug_3");
            html.showButton("computer_comment_3");
        }
        else{
            html.hideButton("computer_bug_3");
        }
        
        if(lollipops.nbrOwned >= 1000000000){
            html.showButton("computer_bug_4");
            html.showButton("computer_comment_4");
        }
        else{
            html.hideButton("computer_bug_4");
        }
        
        if(lollipops.nbrOwned >= 10000000000){
            html.showButton("computer_bug_5");
            html.showButton("computer_comment_5");
            html.showButton("computer_note");
        }
        else{
            html.hideButton("computer_bug_5");
        }
        
        if(lollipops.nbrOwned >= 100000000000) html.showButton("computer_bug_6");
        else html.hideButton("computer_bug_6");
        
        if(lollipops.nbrOwned >= 1000000000000) html.showButton("computer_bug_7");
        else html.hideButton("computer_bug_7");
        
        if(lollipops.nbrOwned >= 10000000000000) html.showButton("computer_bug_8");
        else html.hideButton("computer_bug_8");
    },
    
    checkCoatSwordButton : function(){
        // Show the coat the diamond blbl sword button
        if(chocolateBars.nbrOwned >= 1 && sword.name == "polished candy diamond sword"){
            html.showButton("coat");
            this.enableButton("coat");
            html.setElementDisplay("encrust", "none");
            html.setElementDisplay("polish", "none");
            html.setElementDisplay("coat", "inline");
        }
        else html.disableButton("coat");
    },
    
    checkChocolateBars : function(){
        this.checkCoatSwordButton();
    },
    
    checkLollipopsStockShortage : function(){
        // If the shop is shown
        if(shop.shown){
            // If there's a lollipops stock shortage
            if(lollipops.stockShortage == true){
                // We show the stock shortage and hide the buttons used to buy lollipops
                html.setElementVisibility("lollipops_stock_shortage", true);
                html.hideButton("buy_1_lollipop");
                html.hideButton("buy_10_lollipops");
            }
            // Else, no lollipops stock shortage
            else{
                // We don't show the stock shortage
                html.setElementVisibility("lollipops_stock_shortage", false);
                // We show and maybe enable the button to buy one lollipop
                html.showButton("buy_1_lollipop");
                if(candies.nbrOwned >= shop.oneLollipopPrice) this.enableButton("buy_1_lollipop");
                else html.disableButton("buy_1_lollipop");
                // We maybe show and maybe enable the button to buy 500 lollipops
                if(candies.nbrOwned >= shop.tenLollipopsPrice || shop.buy10LollipopsButtonShown){
                    shop.setBuy10LollipopsButtonShown(true);
                    if(html.isElementVisible("buy_10_lollipops") == false){ // If it wasn't shown yet
                        html.showButton("buy_10_lollipops");
                        shop.setMerchantSpeech("There's now a discount for 10 lollipops! Buy them please.. I need candiiiies!");
                    }
                    this.enableButton("buy_10_lollipops");
                }
                if(candies.nbrOwned < shop.tenLollipopsPrice) html.disableButton("buy_10_lollipops");
            }
        }
    },
    
    checkObjects : function(){
        // Show the button to go to the swamp map
        if(objects.list.swampMap.have){
            html.setElementDisplay("go_to_swamp", "block");
            html.showButton("go_to_swamp");
            this.enableButton("go_to_swamp");
        }
        // Show the button to go to the hut
        if(objects.list.hutMap.have){
            html.setElementDisplay("go_to_hut", "block");
            html.showButton("go_to_hut");
            this.enableButton("go_to_hut");
        }
        // Show the button to go to the wishing well
        if(objects.list.wellMap.have){
            html.setElementDisplay("go_to_well", "block");
            html.showButton("go_to_well");
            this.enableButton("go_to_well");
        }
        // Show the button to go to the forge
        if(objects.list.forgeMap.have){
            html.setElementDisplay("go_to_forge", "block");
            html.showButton("go_to_forge");
            this.enableButton("go_to_forge");
        }
        
        // Check the farm visibility
        farm.checkVisibility();
        
        // Check some farm's buttons
        this.checkLollipopsPlantingButtons();
        
        // Check the candies converter visibility
        candiesConverter.checkVisibility();
        
        // Check the cauldron visibility
        cauldron.checkVisibility();
    },
    
    checkLollipopsPlantingButtons : function(){
        // If we have the key of the lollipop farm
        if(objects.list.key.have){
            // innerHtml of the lp_buttons span
            
            // Plant 1000 button
            if(lollipops.nbrOwned >= 1000 && farm.plantingButtonsStep < 4){
                farm.setPlantingButtonsStep(4);
            }
            // Plant 100 button
            else if(lollipops.nbrOwned >= 100 && farm.plantingButtonsStep < 3){
                farm.setPlantingButtonsStep(3);
            }
            // Plant 10 button
            else if(lollipops.nbrOwned >= 10 && farm.plantingButtonsStep < 2){
                farm.setPlantingButtonsStep(2);
            }
            // Plant 1 button
            else if(farm.plantingButtonsStep < 1){
                farm.setPlantingButtonsStep(1);
            }
            
            // Buttons activation
            
            // Plant 1000 button
            if(farm.plantingButtonsStep >= 4){
                html.showButton("plant_1000_lp");
                if(lollipops.nbrOwned >= 1000){
                    this.enableButton("plant_1000_lp");
                }
                else html.disableButton("plant_1000_lp");
            }
            // Plant 100 button
            if(farm.plantingButtonsStep >= 3){
                html.showButton("plant_100_lp");
                if(lollipops.nbrOwned >= 100){
                    this.enableButton("plant_100_lp");
                }
                else html.disableButton("plant_100_lp");
            }
            // Plant 10 button
            if(farm.plantingButtonsStep >= 2){
                html.showButton("plant_10_lp");
                if(lollipops.nbrOwned >= 10){
                    this.enableButton("plant_10_lp");
                }
                else html.disableButton("plant_10_lp");
            }
            // Plant 1 button
            if(farm.plantingButtonsStep >= 1){
                html.showButton("plant_1_lp");
                if(lollipops.nbrOwned >= 1){
                    this.enableButton("plant_1_lp");
                }
                else html.disableButton("plant_1_lp");
            }
        }
    },
    
    checkQuestTiredTime : function(){
        // Buttons related to the quest tired time
        if(quest.tiredTime == 0 && quest.weAreQuestingRightNow == false) this.enableButton("quest_button");
        else html.disableButton("quest_button");
    },
    
    checkHut : function(){
        if(hut.shown){
            switch(hut.step){
                case 0:
                    html.showButton("hut_throw_lollipops");
                    if(lollipops.nbrOwned >= 10){
                        this.enableButton("hut_throw_lollipops");
                    }
                    else html.disableButton("hut_throw_lollipops");
                break;
                case 2:
                    for(var i = 0; i < spells.list.length; i++){
                        if(hut.canThisSpellBeUsed(i)){
                            this.enableButton("hut_spell_" + i);
                        }
                        else html.disableButton("hut_spell_" + i);
                    }
                    // Special surpass button
                    if(quest.maxLandOrder == 7 && yourself.canSurpass == false){
                        if(lollipops.nbrOwned >= 1000000) this.enableButton("hut_surpass");
                        else html.disableButton("hut_surpass");
                    }
                break;
            }
        }
    },
    
    checkWishingWell : function(){
        if(wishingWell.shown){
            switch(wishingWell.step){
                case 0:
                    if(candies.nbrOwned >= 1){
                        this.enableButton("wishingWell_throw_candy");
                    }
                    else html.disableButton("wishingWell_throw_candy");
                break;
            }
        }
    },
    
    checkForge : function(){
        if(forge.shown && forge.step == 1){
            // Health
            if(potions.list.health.shown && potions.list.health.nbrOwned >= 1){
                this.enableButton("enchant_health");
            }
            else html.disableButton("enchant_health");
            
            // Fire
            if(potions.list.fireScroll.shown && potions.list.fireScroll.nbrOwned >= 1){
                this.enableButton("enchant_fire");
            }
            else html.disableButton("enchant_fire");
            
            // Imp invocation
            if(potions.list.impInvocationScroll.shown && potions.list.impInvocationScroll.nbrOwned >= 1){
                this.enableButton("enchant_imp_invocation");
            }
            else html.disableButton("enchant_imp_invocation");
        }
    }
  
};
