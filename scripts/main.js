var main = {
    
    // Variables
    nbrOfSecondsSinceLastMinInterval : 0,
    nbrOfSecondsSinceLastHourInterval : 0,
    nbrOfSecondsSinceLastDayInterval : 0,
    saveShown : false,
    
    // Functions
    onload : function(){
        // Prevents some stupid refresh bugs of the browser
        html.enableButtonClass("home_button");
        
        // Various loads
        peacefulForest.onload();
        mountGoblin.onload();
        underwaterCave.onload();
        castleEntrance.onload();
        castleStairs.onload();
        castleKeep.onload();
        cowLevel.onload();
        sea.onload();
        desert.onload();
        hell.onload();
        yourself.onload();
        chuckNorris.onload();
        developperGarden.onload();
        developperMoat.onload();
        developperComputer.onload();
        shop.onload();
        candies.onload();
        spells.onload();
        potions.onload();
        sword.onload();
        cauldron.onload();
        tabs.onload();
        
        // Loading after various loads
        quest.onloadAfter(); // This must be call after other loads because it needs the different quests to be loaded
        
        // Loading save from cookie
        if(cookie.readCookie("CandyCookie") != null) {
            cookie.setData();
        } else {
            console.log("INFO: Couldn't find a Cookie.");
        }

                        
        // First actions
        window.setInterval(this.oneTenthSecInterval.bind(this), 100);
        window.setInterval(this.secInterval.bind(this), 1000);
        cookie.cookiehandler = window.setInterval(cookie.autoSave, 1000);
    },
    
    oneTenthSecInterval : function(){
        // We try to convert candies into lollipops
        candiesConverter.convert();
    },

    secInterval : function(){
        // Candies
        let candy_rate = objects.list.oldAmulet.have ? 3 : 1
        candies.setNbrOwned(candies.nbrOwned + candies.candiesPerSecond * candy_rate);
        
        // Quest tired time
        let recover_rate = objects.list.pinkRing.have ? 2 : 1
        quest.setTiredTime(quest.tiredTime - recover_rate);
        
        // Lollipop farm
        if(farm.productionDelayType == "sec"){
            let lollipop_mult = objects.list.hornOfPlenty.have ? 3 : 1
            lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction * lollipop_mult);
        }
        
        // Cauldron
        if(objects.list.cauldron.have) cauldron.moveSmoke();
        cauldron.increaseActionTimer();
        
        // We increase nbrOfSeconds variables
        this.nbrOfSecondsSinceLastMinInterval += 1;
        this.nbrOfSecondsSinceLastHourInterval += 1;
        this.nbrOfSecondsSinceLastDayInterval += 1;
        
        // We possibly trigger minInterval
        if(this.nbrOfSecondsSinceLastMinInterval >= 60){
            this.nbrOfSecondsSinceLastMinInterval = 0;
            this.minInterval();
        }
        
        // We possibly trigger hourInterval
        if(this.nbrOfSecondsSinceLastHourInterval >= 3600){
            this.nbrOfSecondsSinceLastHourInterval = 0;
            this.hourInterval();
        }
        
        // We possibily trigger dayInterval
        if(this.nbrOfSecondsSinceLastDayInterval >= 86400){
            this.nbrOfSecondsSinceLastDayInterval = 0;
            this.dayInterval();
        }
    },
    
    minInterval : function(){
        // Lollipop farm
        if(farm.productionDelayType == "min"){
            let lollipop_mult = objects.list.hornOfPlenty.have ? 3 : 1
            lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction * lollipop_mult);
        }
    },
    
    hourInterval : function(){
        // Lollipop farm
        if(farm.productionDelayType == "hour"){
            let lollipop_mult = objects.list.hornOfPlenty.have ? 3 : 1
            lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction * lollipop_mult);
        }
    },
    
    dayInterval : function(){
        // Lollipop farm
        if(farm.productionDelayType == "day"){
            let lollipop_mult = objects.list.hornOfPlenty.have ? 3 : 1
            lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction * lollipop_mult);
        }
    },
    
    setNbrOfSecondsSinceLastMinInterval : function(value){
        this.nbrOfSecondsSinceLastMinInterval = value;
    },
    
    setNbrOfSecondsSinceLastHourInterval : function(value){
        this.nbrOfSecondsSinceLastHourInterval = value;
    },
    
    setNbrOfSecondsSinceLastDayInterval : function(value){
        this.nbrOfSecondsSinceLastDayInterval = value;
    }
};    

window.onload = main.onload.bind(main);
